import React from "react";

const features = [
  {
    title: "Customizable Budgets",
    description: "Create personalized budgets that adapt to your spending habits.",
    icon: "📊",
    tagline: "Your money, your rules."
  },
  {
    title: "Automated Bill Splitting",
    description: "Split rent, utilities, or pizza right inside Camlet. No awkward reminders!",
    icon: "💰",
    tagline: "No more chasing payments."
  },
  {
    title: "AI-Powered Insights",
    description: "Predict future expenses and get tailored tips to save money.",
    icon: "🤖",
    tagline: "Smart savings made easy."
  },
  {
    title: "Savings Goals with Visual Trackers",
    description: "Save for a spring break trip or new laptop with custom goal tracking.",
    icon: "🎯",
    tagline: "Set goals, smash them."
  },
  {
    title: "Financial Education Hub",
    description: "Bite-sized lessons on taxes, credit, and banking to keep you informed.",
    icon: "📚",
    tagline: "Knowledge is power."
  },
  {
    title: "Offline Mode",
    description: "Track expenses even without WiFi—syncs automatically when online.",
    icon: "📶",
    tagline: "Always stay in control."
  }
];

export default function FeatureSection() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #1E3A8A, #0F172A)",
      padding: "60px 20px",
      textAlign: "center",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h2 style={{
        fontSize: "2.8rem",
        color: "#35FA2E",
        marginBottom: "30px",
        textShadow: "2px 2px 10px rgba(0, 255, 128, 0.6)"
      }}>
        What You Get
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "25px",
        maxWidth: "1100px",
        width: "100%"
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 4px 15px rgba(0, 255, 128, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            textAlign: "center"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 255, 128, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 255, 128, 0.2)";
          }}
          >
            <div style={{
              fontSize: "3rem",
              marginBottom: "15px",
              filter: "drop-shadow(0 0 10px rgba(0, 255, 128, 0.5))"
            }}>
              {feature.icon}
            </div>
            <h3 style={{
              fontSize: "1.6rem",
              color: "#fff",
              marginBottom: "10px",
              textShadow: "1px 1px 5px rgba(255, 255, 255, 0.4)"
            }}>
              {feature.title}
            </h3>
            <p style={{
              color: "#ddd",
              fontSize: "1rem",
              marginBottom: "10px"
            }}>
              {feature.description}
            </p>
            <p style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#35FA2E",
              textShadow: "1px 1px 5px rgba(0, 255, 128, 0.4)"
            }}>
              {feature.tagline}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}