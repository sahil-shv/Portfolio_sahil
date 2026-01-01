
  # Build Animated Responsive Website

  This is a code bundle for Build Animated Responsive Website. The original project is available at https://www.figma.com/design/99ImpvTXJU90Udb3xB1gCp/Build-Animated-Responsive-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Email Backend Integration

  This portfolio includes a backend API for handling contact form submissions. The backend is located in the `backend/` folder and can be deployed separately on Render.

  ### Frontend Setup (Vercel)

  1. **Set Environment Variable:**
     - In Vercel dashboard, go to your project settings
     - Add environment variable: `VITE_API_URL`
     - Value: Your Render backend URL (e.g., `https://your-api.onrender.com`)

  2. **Deploy:**
     - Connect your repository to Vercel
     - Vercel will auto-detect Vite and deploy
     - The frontend will use the API URL from environment variables

  ### Backend Setup (Render)

  See `backend/README.md` for detailed backend setup instructions.

  **Quick Setup:**
  1. Deploy the `backend/` folder to Render
  2. Set environment variables in Render dashboard
  3. Get your Render URL and add it to Vercel's `VITE_API_URL`

  **Note:** For local development, create a `.env` file in the root with:
  ```
  VITE_API_URL=http://localhost:3001
  ```
  