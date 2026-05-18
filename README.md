 LIVE LINK : https://move-pro-nine.vercel.app/
# 🚚 MovePro - Professional Packers & Movers Platform

MovePro is a modern, high-performance landing page for a Packers & Movers company. Designed with a premium aesthetic and optimized for blazing-fast performance, it features a highly interactive UI built with React and Vite.

## ✨ Features

- **Modern & Symmetrical Design**: A clean, balanced layout with a professional color scheme (Primary Blue `#6A89A7`, Secondary Blue `#88BDF2`).
- **GPU-Accelerated Animations**: Silky smooth, 60fps animations utilizing `transform: translate3d` and CSS `will-change` properties.
- **Micro-Interactions**: Engaging button hover states, interactive service cards, and a dynamic floating hero section.
- **O(1) Rendering Efficiency**: Heavily optimized with `React.memo`, `useCallback`, and `React.lazy` to prevent unnecessary re-renders.
- **Code Splitting**: Below-the-fold content is lazy-loaded, ensuring the vital Hero section paints instantly.
- **Responsive Layout**: Fully responsive CSS Grid and Flexbox structures tailored for mobile, tablet, and desktop devices.
- **Accessibility Support**: Built-in support for `prefers-reduced-motion` to ensure an inclusive user experience.
- **Zero-Image Backgrounds**: Advanced use of CSS `linear-gradient` to create subtle, modern grid backgrounds without heavy image files.

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid)
- **Routing**: DOM-based in-page navigation (Smooth scrolling)
- **Deployment**: Ready for Vercel/Netlify

## 🛠️ Quick Start

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codebyharii/move-pro.git
   cd move-pro
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

```text
src/
├── assets/          # Images and static assets
├── components/      # Reusable React components (Navbar, Hero, Services, About, Contact, Footer)
├── styles/          # Modular CSS files for each component
├── App.jsx          # Main application orchestrator (Lazy Loading config)
└── main.jsx         # React root entry point
```

## 🎨 Design System

The application uses a strict CSS variable system defined in `index.css`:
- **Typography**: Inter (Body), Poppins (Headings)
- **Color Palette**: Curated blues and clean grays.
- **Transitions**: Controlled, specific property transitions (no `all` used).
- **Shadows & Radii**: Consistent CSS tokens for depth and rounded corners.

## 📝 License

This project is open-source and available under the MIT License.
