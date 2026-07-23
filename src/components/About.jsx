function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-heading">
          <span className="section-label">About Me</span>
          <h2>
            Building reliable digital solutions for <span>meaningful growth</span>
          </h2>
          <p>
            I bring together modern web development, practical AI, and
            client-focused strategy to turn ambitious ideas into dependable digital experiences.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Technology designed around clear business outcomes.</h3>
            <p>
              I am Syed Hamza, a web developer and AI practitioner focused on
              delivering responsive, user-centred products that are built to perform.
            </p>
            <p>
              Every project is approached with a balance of clean engineering,
              thoughtful user experience, and measurable growth goals—helping
              businesses build trust, reach the right audience, and create lasting value.
            </p>
          </div>

          <div className="about-focus">
            <article className="focus-card">
              <div className="focus-icon" aria-hidden="true">💻</div>
              <div>
                <h4>Web Development</h4>
                <p>Fast, responsive websites that present your business with clarity and confidence.</p>
              </div>
            </article>

            <article className="focus-card">
              <div className="focus-icon" aria-hidden="true">🤖</div>
              <div>
                <h4>AI &amp; Machine Learning</h4>
                <p>Practical AI solutions that turn data and automation into useful outcomes.</p>
              </div>
            </article>

            <article className="focus-card">
              <div className="focus-icon" aria-hidden="true">📈</div>
              <div>
                <h4>Client Growth</h4>
                <p>Focused digital strategy that strengthens visibility, trust, and client relationships.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
