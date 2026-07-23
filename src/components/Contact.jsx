import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

function Contact() {
  const contactItems = [
    {
      label: "WhatsApp",
      value: "+92 318 0989747",
      detail: "Start a conversation",
      href: "https://wa.me/923180989747",
      icon: FaWhatsapp,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/syedhamza07",
      detail: "Connect professionally",
      href: "https://www.linkedin.com/in/syedhamza07",
      icon: FaLinkedinIn,
    },
  ];

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const description = formData.get("description");
    const subject = `Portfolio inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nProject details:\n${description}`;

    window.location.href = `mailto:xyedhamza8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact">
      <h2 className="section-title">
        Let&apos;s <span>Work Together</span>
      </h2>

      <div className="contact-intro">
        <p>
          Whether you need web development, an AI or machine learning solution,
          or a digital strategy that supports client growth, let&apos;s discuss how
          we can turn your next idea into meaningful results.
        </p>
      </div>

      <div className="contact-grid">
        {contactItems.map(({ label, value, detail, href, icon: Icon }) => (
          <a
            className="contact-card contact-card-link"
            href={href}
            key={label}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon" aria-hidden="true"><Icon /></span>
            <span className="contact-card-content">
              <span className="contact-card-label">{label}</span>
              <strong>{value}</strong>
              <small>{detail}</small>
            </span>
          </a>
        ))}
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-heading">
          <h3>Tell me about your project</h3>
          <p>Share a few details and your email app will open with your message ready to send.</p>
        </div>

        <div className="contact-form-fields">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
        </div>

        <label>
          Description
          <textarea name="description" placeholder="Tell me about your project or goal" rows="5" required />
        </label>

        <button type="submit" className="contact-submit">
          Send Inquiry <FiSend aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}

export default Contact;
