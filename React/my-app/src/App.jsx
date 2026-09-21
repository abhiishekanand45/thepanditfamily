import { useState } from 'react'
import './App.css'
import heroImg from "./hero.jpg";
function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "portfolio dark-mode" : ""}>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <h2 className="logo">ThePanditFamily</h2>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Contact</a>
            <a href="#contact">About</a>
            <button onClick={()=>setDark(!dark)}>{dark ? "☀️ Light" : "🌙 Dark"}</button>
          </div>
        </nav>

        {/* Home Section */}
        <section id="home" className="hero">
          <h1 style={{fontSize: "clamp(32px, 8vw, 56px)", lineHeight: "1.2", textAlign: "center"}}>Hi, I'm <span style={{display: "block", color: "#6366f1"}}>Your Abhishek Anand</span></h1>
          <h3>🙏Radhe Radhe🙏</h3>
          <p>Do Good Deeds, everything will be Good,The Rest is Hare Krishna</p>
          <div className="btns" style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px"}}>
            <a href="#card" className="btn">The Bhagavada Gita</a>
            <a> 🙏 बोलो श्री पूज्य प्रेमानंद महाराज की जय 🙏 </a>
          </div>
          <img src={heroImg} alt="hero" style={{width:"200px", borderRadius:"50%"}} />
          <p style={{marginTop: "0px", textAlign: "center"}}>Founder:- Abhishek Anand</p>
        </section>

        {/* Motivational Points */}
        <section id="My Things" className="section">
          <h2> ~ Read These Point Be Carefully ~ </h2>
          <div className="skills-grid">
            <span>Control</span><span>Focus</span><span>Discipline</span><span>Pure Thinking</span><span>Patience</span><span>Believe in God</span>
          </div>
        </section>

        {/* Bhagavad Gita */}
        <section id="card">
          <h2>The Bhagavada Gita</h2>
          <div className="project-grid">
            <div className="card">
              <h3>The Bhagavada Gita in Hindi</h3>
              <p>Click On Below</p>
              <a href="#"><a href="https://share.google/96y0Eg0RGoWeMrNcd" target="_blank">THe Bhagavada Gita PDF</a></a>
            </div>
            <div className="card">
              <h3>The Bhagavada Gita Sanskrit</h3>
              <p>Click On Below</p>
              <a href="#"><a href="https://share.google/gsDMTiFJ7Q7wHVXSz" target="_blank">The Bhagavada Gita PDF</a></a>
             
            </div>
            <div className="card">
              <h3>The Bhagavada Gita in English</h3>
              <p>Click ON Below</p>
              <a href="#"><a href="https://share.google/LqY5p1RmmsoPzwGaF" target="_blank">The Bhagavada Gita PDF</a></a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <h2 style={{color:"#4a6cf7", textAlign: "center", marginBottom: "15px"}}> Contact Me</h2>
          <div style={{display: "flex", flexDirection: "column", gap: "5px", textAlign: "center"}}>
              <p>Email: <a href="mailto:abhishekkumar85929@gmail.com" style={{color: "blue", textDecoration: "none"}}>abhishekkumar85929@gmail.com</a></p>
              <p>linkedin: <a href="https://www.linkedin.com/in/abhishek-kumar-83348b21b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" style={{color: "blue", textDecoration: "none"}}>Abhishek kumar</ a></p>
              <p>github: <a href="https://github.com/abhiishekanand45" target="_blank" style={{color: "blue", textDecoration: "none"}}>Abhishek anand</ a></p>
          </div>
        </section>

        <footer> 
          © 2026 Made with Reacts
          ~ Thank You So Much For Visiting ThePanditFamily ~ ❤️
          </footer>
      </div>
    </div>
  )
}
export default App
