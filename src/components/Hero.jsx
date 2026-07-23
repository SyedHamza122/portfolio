function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* Left Side - Profile Image */}
        <div className="hero-image">
          <div className="hero-image-glow"></div>

          <img
            src="/profile.png"
            alt="Syed Hamza - Web Developer and Client Growth Partner"
          />
        </div>

        {/* Right Side - Hero Content */}
        <div className="hero-text">

          <span className="hero-tag">
            👋 Hello, I'm Syed Hamza
          </span>

          <h1>
            Web Developer
            <span className="hero-divider"> | </span>
            Client Growth Partner
          </h1>

          <h2>
            Building Digital Experiences & Growth Systems
          </h2>

          <p>
            I help businesses, founders, AI professionals, and service
            providers build a stronger digital presence through modern web
            development, AI-powered solutions, and strategic client growth.
          </p>

          <p>
            My work combines technology and business strategy to create
            digital experiences that build trust, attract the right audience,
            and turn online visibility into meaningful opportunities.
          </p>

          {/* Hero Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View My Work
            </a>

            <a
              href="https://www.linkedin.com/in/syedhamza07"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/SyedHamza122"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>

          </div>

          {/* Professional Highlights */}
          <div className="hero-highlights">

            <div className="hero-highlight">
              <strong>Web Development</strong>
              <span>Modern & Responsive</span>
            </div>

            <div className="hero-highlight">
              <strong>AI & Automation</strong>
              <span>Intelligent Solutions</span>
            </div>

            <div className="hero-highlight">
              <strong>Client Growth</strong>
              <span>Strategy & Execution</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;