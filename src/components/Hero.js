import React from "react";

function Hero() {
  const linkStyle = {
    margin: "0 10px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.625rem", 
    textTransform: "uppercase", 
    letterSpacing: "0.1em" 
  };

  const headerStyle = {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#282c34",
    color: "white"
  };

  return (
    <header style={headerStyle} className="hero__header">
      <h1>Hey, I am Abhinav Gautam</h1>
      <h2>Full Stack Developer</h2>
      <div>
        <a href="https://www.instagram.com/abh1n_av" style={linkStyle} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com/abh1av" style={linkStyle} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.linkedin.com/in/iabhinavgautam" style={linkStyle} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Hero;
