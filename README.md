# Portfolio Website

A modern, animated, and responsive portfolio website built with React and TypeScript. Features smooth animations, a contact form with email integration, and a showcase of projects.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🚀 **Fast Performance** - Optimized with Vite and modern React
- 📧 **Contact Form** - Integrated email service via Resend API
- 🎯 **Service Templates** - Pre-filled contact forms based on selected service
- 💼 **Project Showcase** - Interactive portfolio gallery with lightbox view
- 🎭 **Smooth Animations** - Powered by Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Backend**: Node.js, Express, Resend API

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd port
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser:
```
http://localhost:5173
```

### Environment Variables

For local development, create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3001
```

## 📁 Project Structure

```
port/
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Work.tsx
│   │   ├── Contact.tsx
│   │   └── Navigation.tsx
│   ├── data/            # Data files
│   │   ├── projects.ts
│   │   └── messageTemplates.ts
│   ├── assets/          # Images and assets
│   └── styles/          # Global styles
├── public/
│   └── works/           # Project images
├── backend/             # Email API backend
└── package.json
```

## 🚢 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variable: `VITE_API_URL` = your backend URL
4. Deploy!

### Backend (Render)

See `backend/README.md` for detailed backend setup instructions.

**Quick Steps:**
1. Deploy `backend/` folder to [Render](https://render.com)
2. Set environment variables (Resend API key, email, etc.)
3. Get Render URL and add to Vercel's `VITE_API_URL`

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## 🎨 Sections

- **Hero** - Introduction and call-to-action
- **Work** - Portfolio projects showcase
- **Services** - Service offerings with pricing
- **About** - Personal introduction
- **Contact** - Contact form with email integration

## 📧 Email Integration

The contact form sends emails via Resend API. Configure your backend with:
- Resend API key
- Recipient email address
- Frontend URL for CORS

See `backend/QUICK_SETUP.md` for configuration details.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Sahil**

- Portfolio: [Your Portfolio URL]
- Email: s.a.h.i.l.7.8.s.h.r.i@gmail.com

---

Built with ❤️ using React and TypeScript
