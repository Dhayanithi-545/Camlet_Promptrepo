<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->


project-root/
│── public/                     # Static assets
│── src/                         # Main source code
│   │── assets/                 # Images, icons, fonts
│   │── components/             # Reusable components
│   │   │── Navbar.jsx          # Navigation bar component
│   │   │── Footer.jsx          # Footer component (if needed)
│   │── pages/                  # Individual pages
│   │   │── Home.jsx            # Home page
│   │   │── CamletWay.jsx       # Camlet Way page
│   │   │── About.jsx           # About Us page
│   │   │── Contact.jsx         # Contact Us page
│   │   │── Login.jsx           # Login page
│   │   │── Signup.jsx          # Signup page
│   │   │── Dashboard.jsx       # Dashboard (after login) 
│   │── dashboard/              # Dashboard-specific components
│   │   │── Sidebar.jsx         # Dashboard sidebar
│   │   │── Overview.jsx        # Main dashboard view
│   │   │── Settings.jsx        # User settings page
│   │── routes/                 # Routing setup
│   │   │── AppRouter.jsx       # Centralized routing
│   │── context/                # Context API for authentication (if needed)
│   │   │── AuthContext.jsx     # Handles login/logout state
│   │── styles/                 # CSS or Tailwind styles
│   │   │── global.css          # Global styles (if using plain CSS)
│   │   │── components.css      # Component-specific styles
│   │   │── pages.css           # Page-specific styles
│   │── App.jsx                 # Main App component
│   │── main.jsx                # React entry point
│── index.html                  # Main HTML file
│── vite.config.js              # Vite config
│── package.json                # Dependencies and scripts
│── README.md                   # Documentation
│── .gitignore                   # Ignore unnecessary files
