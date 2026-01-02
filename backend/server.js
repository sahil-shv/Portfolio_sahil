import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { sendEmail } from "./services/emailService.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

/* 🔧 REQUIRED FOR RENDER */
app.set("trust proxy", 1);

/* MIDDLEWARE */
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());

/* RATE LIMIT */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/contact", limiter);

/* HEALTH CHECK */
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Email API is running" });
});

/* CONTACT FORM */
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: "Message is required",
      });
    }

    if (message.length > 5000) {
      return res.status(400).json({
        success: false,
        error: "Message too long (max 5000 chars)",
      });
    }

    const result = await sendEmail({
      name: name || "Unknown",
      email: email || "Not provided",
      message: message.trim(),
      ip: req.ip,
      userAgent: req.get("user-agent") || "Unknown",
      timestamp: new Date().toISOString(),
    });

    if (!result.success) throw new Error(result.error);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

/* 404 */
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL}`);
});
