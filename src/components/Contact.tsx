import { motion } from "motion/react";
import { Send, Zap, DollarSign } from "lucide-react";
import { useState } from "react";
import { useInView } from "./useInView";
import { messageTemplates } from "../data/messageTemplates";

const API = import.meta.env.VITE_BACKEND_URL;

export function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-xl border"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#212020]">
              Let’s work together
            </h3>

            <input
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-4 p-4 rounded-xl border"
            />

            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-4 p-4 rounded-xl border"
            />

            <textarea
              name="message"
              placeholder="Tell me about your project"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mb-6 p-4 rounded-xl border"
            />

            <motion.button
              type="submit"
              disabled={isSending || isSent}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#00a6ff] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              {isSent ? (
                "Sent Successfully"
              ) : isSending ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Send size={18} />
                  </motion.span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </motion.button>
          </form>

          {/* FEATURES */}
          <div className="space-y-6">
            <Feature
              icon={<Zap />}
              title="Fast Delivery"
              desc="Quick turnaround without compromising quality."
            />
            <Feature
              icon={<DollarSign />}
              title="Budget Friendly"
              desc="Affordable pricing tailored for startups and locals."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-2xl shadow border flex gap-4 items-start"
    >
      <div className="bg-[#00a6ff] p-3 rounded-xl text-white">{icon}</div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </motion.div>
  );
}
