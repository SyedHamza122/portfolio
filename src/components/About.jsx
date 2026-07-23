function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-heading">
          <span className="section-label">About Me</span>
          <h2>
            Building digital solutions that create <span>real growth</span>
          </h2>
          <p>
            I combine thoughtful web development, practical AI solutions, and
            client-focused strategy to help ideas become useful digital experiences.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Technology with a clear business purpose.</h3>
            <p>
              I am Syed Hamza, a web developer and AI enthusiast focused on
              creating modern, responsive, and user-friendly digital products.
            </p>
            <p>
              My approach brings together clean development, intelligent
              technology, and growth-minded thinking to help businesses build
              trust, reach the right audience, and create meaningful opportunities.
            </p>
          </div>

          <div className="about-focus">
            <article className="focus-card">
              <div className="focus-icon" aria-hidden="true">💻</div>
              <div>
                <h4>Web Development</h4>
                <p>Responsive, polished websites designed around people and business goals.</p>
              </div>
            </article>

            <article className="focus-card">
              <div className="focus-icon" aria-hidden="true">🤖</div>
              <div>
                <h4>AI &amp; Machine Learning</h4>
                <p>Practical AI-powered solutions that make technology more useful.</p>
              </div>
            </article>

            <article className="focus-card">
              <div className="focus-icon" aria-hidden="true">📈</div>
              <div>
                <h4>Client Growth</h4>
                <p>Digital strategy that supports visibility, trust, and stronger client relationships.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
