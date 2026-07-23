function Skills() {
  return (
    <section id="skills">

      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">

        {/* Web Development */}

        <div className="skill-card">

          <h3>Web Development</h3>

          <div className="skill-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Responsive Design</span>
            <span>UI Development</span>
          </div>

        </div>


        {/* AI & Machine Learning */}

        <div className="skill-card">

          <h3>AI & Machine Learning</h3>

          <div className="skill-list">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Deep Learning</span>
            <span>Computer Vision</span>
            <span>NLP</span>
            <span>AI Solutions</span>
          </div>

        </div>


        {/* Backend & APIs */}

        <div className="skill-card">

          <h3>Backend & APIs</h3>

          <div className="skill-list">
            <span>Python</span>
            <span>Flask</span>
            <span>FastAPI</span>
            <span>REST APIs</span>
            <span>API Integration</span>
          </div>

        </div>


        {/* Tools & Technologies */}

        <div className="skill-card">

          <h3>Tools & Technologies</h3>

          <div className="skill-list">
            <span>PyTorch</span>
            <span>TensorFlow</span>
            <span>OpenCV</span>
            <span>Scikit-learn</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
          </div>

        </div>


        {/* Client Growth */}

        <div className="skill-card">

          <h3>Client Growth</h3>

          <div className="skill-list">
            <span>Client Acquisition</span>
            <span>Lead Generation</span>
            <span>Digital Strategy</span>
            <span>Personal Branding</span>
            <span>Content Strategy</span>
            <span>Sales Conversations</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;