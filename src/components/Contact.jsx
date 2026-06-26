function Contact() {
  return (
    <section id="contact">

      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-grid">

        <div className="contact-card">

          <h3>📧 Email</h3>

          <a href="mailto:xyedhamza8@gmail.com">
            xyedhamza8@gmail.com
          </a>

        </div>

        <div className="contact-card">

          <h3>💼 LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/syedhamza07"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/syedhamza07
          </a>

        </div>

        <div className="contact-card">

          <h3>💻 GitHub</h3>

          <a
            href="https://github.com/SyedHamza122"
            target="_blank"
            rel="noreferrer"
          >
            github.com/SyedHamza122
          </a>

        </div>

        <div className="contact-card">

          <h3>📱 WhatsApp</h3>

          <a
            href="https://wa.me/923180989747"
            target="_blank"
            rel="noreferrer"
          >
            +92 318 0989747
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;