# Personal CV Website

A modern, responsive, and interactive personal portfolio website built with React and Vite. This project showcases professional experience, skills, projects, and contact information in an engaging 3D animated interface.

## 🚀 Features

- **3D Animated UI** - Smooth animations and transitions for an engaging user experience
- **Responsive Design** - Fully responsive layout that works on all device sizes
- **Interactive Sections** - Multiple sections including About, Experience, Portfolio, and Contact
- **Dark/Light Mode** - Built-in theme switching functionality
- **Performance Optimized** - Fast loading times and smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features (Flexbox, Grid, CSS Variables)
- **Animation**: Framer Motion & Three.js for 3D elements
- **Icons**: React Icons
- **Form Handling**: EmailJS integration for contact form

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd personal-cv
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🏗️ Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── about/        # About section components
│   ├── contact/      # Contact form and information
│   ├── experience/   # Work experience timeline
│   ├── header/       # Navigation header
│   ├── portfolio/    # Project showcase
│   ├── services/     # Services offered
│   └── settings/     # Theme and settings
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## 🔧 Configuration

1. Update your personal information in the respective component files.
2. Modify the theme colors in the `src/index.css` file.
3. Configure EmailJS in the contact form component to enable form submissions.

## 🚀 Deployment

### Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with the production build of your app.

### Deploying to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPOSITORY_URL)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)

---

Made with ❤️ by [Your Name]