function Projects() {
  return (
    <section id="projects">

      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="project-grid">

        {/* Project 1 */}

        <div className="project-card">

          <img src="/dehazing.png" alt="Dehazing Project" />

          <div className="project-content">

            <h3>Dehazing in Automotive Environment</h3>

            <p>
              AI-powered image dehazing system for improving
              visibility in autonomous driving using Deep Learning
              and Computer Vision.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>OpenCV</span>
              <span>PyTorch</span>
              <span>Deep Learning</span>
            </div>

            <a
              href="https://github.com/SyedHamza122"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub
            </a>

          </div>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <img src="/facemask.png" alt="Face Mask Detection" />

          <div className="project-content">

            <h3>Face Mask Detection</h3>

            <p>
              CNN based intelligent system that detects whether
              a person is wearing a face mask in real time.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>CNN</span>
              <span>OpenCV</span>
            </div>

            <a
              href="https://github.com/SyedHamza122"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub
            </a>

          </div>

        </div>

        {/* Project 3 */}

        <div className="project-card">

          <img src="/emotion.png" alt="Emotion Detection" />

          <div className="project-content">

            <h3>Multi-Class Emotion Detection</h3>

            <p>
              NLP model for detecting multiple human emotions
              from textual input using Machine Learning and
              Deep Learning.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>NLP</span>
              <span>Scikit-learn</span>
              <span>PyTorch</span>
            </div>

            <a
              href="https://github.com/SyedHamza122"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;