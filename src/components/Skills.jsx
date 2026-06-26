function Skills() {
  return (
    <section id="skills">

      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Programming</h3>

          <div className="skill-list">
            <span>Python</span>
            <span>C++</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Artificial Intelligence</h3>

          <div className="skill-list">
            <span>Machine Learning</span>
            <span>Deep Learning</span>
            <span>Computer Vision</span>
            <span>NLP</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Frameworks</h3>

          <div className="skill-list">
            <span>React</span>
            <span>Flask</span>
            <span>FastAPI</span>
            <span>PyTorch</span>
            <span>TensorFlow</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Libraries & Tools</h3>

          <div className="skill-list">
            <span>OpenCV</span>
            <span>Scikit-learn</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;