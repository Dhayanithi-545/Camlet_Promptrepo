# Camlet – The Campus Wallet

## Project Overview
**Camlet** is a student-centric budget tracker designed to simplify financial management for students. It helps users track expenses, split bills with roommates, set savings goals, and learn about personal finance through gamified lessons. Built with students in mind, Camlet combines automation, education, and personalization to empower users to take control of their finances.

---

## Key Features
1. **Automated Bill Splitting**:  
   - Split bills with roommates or friends seamlessly.  
   - Send payment reminders to avoid missed deadlines.  

2. **Customizable Budget Categories**:  
   - Create, rename, and personalize categories based on spending habits (e.g., "Coffee Addiction," "Textbook Fund").  

3. **AI-Powered Insights**:  
   - Predict future expenses and provide personalized savings tips.  
   - Example: "You’ll spend $200 on dining out next month—here’s how to save $50."  

4. **Savings Goals with Visual Trackers**:  
   - Set savings goals (e.g., for a trip or new laptop) and track progress with motivating visuals.  
   - Automate transfers to savings accounts.  

5. **Financial Education Hub**:  
   - Gamified lessons on saving, investing, and building credit.  
   - Earn badges for hitting savings milestones.  

6. **Offline Mode**:  
   - Add transactions offline; sync automatically when back online.  

---

## Tools and Tech Stack
- **Frontend**: React.js, css and tailwind css
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **AI Integration**: OpenAI API (fine-tuned with PromptRepo for personalized insights)  
- **Deployment**: Render
- **Version Control**: Git, GitHub  

---

## Domain
- **Full-stack Development**: Built end-to-end, from frontend to backend.  
- **AI Development**: Integrated promptrepo OpenAI API for AI-powered insights.  
- **UX/UI Design**: Designed for a seamless and intuitive user experience.  

---

## Video link
https://drive.google.com/file/d/1BJsD9AXL8ViC-UYBjx_eRTag0xDeYrW9/view?usp=sharing

## Presentation link
https://www.canva.com/design/DAGdvXGF5Qo/xJdJK1raJiZszN7g-xjvuQ/edit?utm_content=DAGdvXGF5Qo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## Prototype link (Figma ui/ux)
 https://www.figma.com/design/LngJlqkpSAP8L0Xg3cPd6l/Camlet?node-id=0-1&t=VX4DylSWkVs1bJzX-1

## Deployment link

---

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
