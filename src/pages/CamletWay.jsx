import React from "react";
// import image from "../assets/image.png"
export default function CamletLandingPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
     <section style={{
  position: "relative",
  padding: "50px 20px",
  borderRadius: "10px",
  color: "white",
  textAlign: "center",
  overflow: "hidden",
  backgroundImage: `url('/src/assets/camletway.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
}}>
  
  {/* Overlay for Better Readability */}
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)" // Subtle dark overlay
  }}></div>

  {/* Content */}
  <div style={{
    position: "relative",
    zIndex: 1 // Ensures text stays above the overlay
  }}>
    <h2 style={{ fontSize: '1.7rem', color: '#00ffcc', textTransform: "uppercase", textShadow: "0 0 15px #00ffcc" }}>
      Camlet
    </h2>
    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>
      Spend in line with your values
    </p>
    <button 
      style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px 20px",
        fontSize: "1rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "0.3s ease",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
      onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
      onClick={() => window.location.href = "/signup"}
    >
      Create Your Camlet
    </button>
  </div>
</section>


      {/* Why Students Love Camlet */}
      <section style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '2rem', color: '#35FA2E' }}>Why Students Love Camlet</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        <div style={{ 
  position: "relative",
  width: "300px",
  borderRadius: "10px",
  overflow: "hidden",
  color: "white",
  padding: "20px",
  textAlign: "center"
}}>
  {/* Background Image with Dark Overlay */}
  <div style={{
    position: "absolute",
    top: 0, left: 0, width: "100%", height: "100%",
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/assets/stressbudget.png') center/cover no-repeat`,
    zIndex: 0
  }}></div>

  {/* Text Content */}
  <div style={{
    position: "relative",
    zIndex: 1
  }}>
    <h4 style={{ fontSize: '1.7rem', color: '#00ffcc', textTransform: "uppercase", textShadow: "0 0 15px #00ffcc" }}>
    Stress-Free Budgeting
    </h4>
    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>
    Ditch the spreadsheets—Camlet makes tracking money as easy as scrolling Instagram.
    </p>
  </div>
</div>
          
          <div style={{ 
  position: "relative",
  width: "300px",
  borderRadius: "10px",
  overflow: "hidden",
  color: "white",
  padding: "20px",
  textAlign: "center"
}}>
  {/* Background Image with Dark Overlay */}
  <div style={{
    position: "absolute",
    top: 0, left: 0, width: "100%", height: "100%",
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/assets/roommate.png') center/cover no-repeat`,
    zIndex: 0
  }}></div>

  {/* Text Content */}
  <div style={{
    position: "relative",
    zIndex: 1
  }}>
    <h4 style={{ fontSize: '1.7rem', color: '#00ffcc', textTransform: "uppercase", textShadow: "0 0 15px #00ffcc" }}>
      Roommate-Friendly
    </h4>
    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>
      No more chasing friends for cash. Split bills fairly and keep the peace.
    </p>
  </div>
</div>

<div style={{ 
  position: "relative",
  width: "300px",
  borderRadius: "10px",
  overflow: "hidden",
  color: "white",
  padding: "20px",
  textAlign: "center"
}}>
  {/* Background Image with Dark Overlay */}
  <div style={{
    position: "absolute",
    top: 0, left: 0, width: "100%", height: "100%",
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/assets/smart.png') center/cover no-repeat`,
    zIndex: 0
  }}></div>

  {/* Text Content */}
  <div style={{
    position: "relative",
    zIndex: 1
  }}>
    <h4 style={{ fontSize: '1.7rem', color: '#00ffcc', textTransform: "uppercase", textShadow: "0 0 15px #00ffcc" }}>
    Smart & Secure
    </h4>
    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'white', textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>
    Bank-level encryption keeps your data safe while AI does the heavy lifting.
    </p>
  </div>
</div>
</div>
</section>

{/* Stats Section */}
     <section style={{
  marginTop: "40px",
  padding: "40px 20px",
  background: "linear-gradient(135deg, rgba(36, 36, 36, 1) 0%, rgba(72, 72, 180, 0.8) 50%, rgba(120, 180, 255, 0.6) 100%)",
  borderRadius: "10px",
  textAlign: "center",
  color: "white"
}}>
  <h3 style={{ fontSize: "2.5rem", color: "#35FA2E", marginBottom: "20px", textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}>
    Stats That Matter:
  </h3>

  <p style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "0 auto", lineHeight: "1.5", fontWeight: "bold" }}>
    72% of students feel financially stressed—Camlet helps you stay in control.
    With <span style={{ color: "#FFD700" }}>78%</span> of students preferring digital tools for budgeting, Camlet stands out.
  </p>

  <ul style={{
    listStyleType: "none",
    padding: "0",
    fontSize: "1.2rem",
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px"
  }}>
    <li style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "15px 20px", borderRadius: "8px", maxWidth: "600px" }}>
      <span style={{ fontWeight: "bold", color: "#FFD700" }}>95%</span> of users feel more confident about their finances after using Camlet.
    </li>
    <li style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "15px 20px", borderRadius: "8px", maxWidth: "600px" }}>
      Camlet students save <span style={{ fontWeight: "bold", color: "#FFD700" }}>20%</span> more within the first 3 months of using it.
    </li>
    <li style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "15px 20px", borderRadius: "8px", maxWidth: "600px" }}>
      <span style={{ fontWeight: "bold", color: "#FFD700" }}>84%</span> find Camlet’s bill-splitting feature a game-changer for roommate harmony.
    </li>
  </ul>
</section>

    </div>
  );
}
