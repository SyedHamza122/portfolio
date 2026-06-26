function Hero() {
  return (
    <section id="home">
      <div className="hero-container">

        {/* Left Side Image */}
        <div className="hero-image">
          <img src="/profile.png" alt="Syed Hamza" />
        </div>

        {/* Right Side Content */}
        <div className="hero-text">

          <span className="hero-tag">
                        👋 Hello, I'm
          </span>

          <h1>Syed Hamza</h1>

          <h2>
            Python Developer | Machine Learning Engineer
          </h2>

          <p>
            Passionate Artificial Intelligence graduate with hands-on
            experience in Machine Learning, Deep Learning, Computer Vision,
            Natural Language Processing, and AI-powered software development.
            Dedicated to building intelligent applications that solve
            real-world problems through Artificial Intelligence.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View Projects
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

        </div>

      </div>
    </section>
  );
}

export default Hero;