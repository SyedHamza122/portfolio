import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiUser } from "react-icons/fi";

function Contact() {
  const contactItems = [
    { label: "Name", value: "Syed Hamza", detail: "Web Developer & Growth Partner", icon: FiUser },
    { label: "Email", value: "xyedhamza8@gmail.com", detail: "Send me an email", href: "mailto:xyedhamza8@gmail.com", icon: FiMail },
    { label: "WhatsApp", value: "+92 318 0989747", detail: "Start a conversation", href: "https://wa.me/923180989747", icon: FaWhatsapp, external: true },
    { label: "LinkedIn", value: "linkedin.com/in/syedhamza07", detail: "Connect professionally", href: "https://www.linkedin.com/in/syedhamza07", icon: FaLinkedinIn, external: true },
    { label: "GitHub", value: "github.com/SyedHamza122", detail: "Explore my code", href: "https://github.com/SyedHamza122", icon: FaGithub, external: true },
  ];

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
        {contactItems.map(({ label, value, detail, href, icon: Icon, external }) => {
          const content = (
            <>
              <span className="contact-icon" aria-hidden="true"><Icon /></span>
              <span className="contact-card-content">
                <span className="contact-card-label">{label}</span>
                <strong>{value}</strong>
                <small>{detail}</small>
              </span>
            </>
          );

          return href ? (
            <a className="contact-card contact-card-link" href={href} key={label} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
              {content}
            </a>
          ) : (
            <div className="contact-card" key={label}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
