function Education() {
  return (
    <section id="education">

      <h2 className="section-title">
        My <span>Education</span>
      </h2>

      <div className="education-card">

        {/* Education Icon */}
        <div className="education-icon">
          🎓
        </div>

        {/* Education Details */}
        <div className="education-info">

          <h3>
            Bachelor of Science in Artificial Intelligence
          </h3>

          <h4>
            COMSATS University Islamabad
          </h4>

          <p>
            2022 — 2026
          </p>

          <span>
            Studied Artificial Intelligence with a focus on Machine Learning,
            Deep Learning, Computer Vision, Natural Language Processing,
            Software Development, and intelligent technology solutions.
          </span>

        </div>

      </div>

    </section>
  );
}

export default Education;