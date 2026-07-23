function Projects() {
  return (
    <section id="projects">

      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      <div className="project-grid">

        {/* Project 1 */}

        <div className="project-card">

          <img src="/dehazing.png" alt="Automotive Image Dehazing" />

          <div className="project-content">

            <h3>AI Image Dehazing for Autonomous Driving</h3>

            <p>
              Final Year Project focused on improving road visibility in
              foggy environments using Artificial Intelligence, Deep
              Learning, and Computer Vision techniques.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>PyTorch</span>
              <span>OpenCV</span>
              <span>Deep Learning</span>
            </div>

            <a
              href="https://github.com/SyedHamza122"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View Source Code
            </a>

          </div>

        </div>


        {/* Project 2 */}

        <div className="project-card">

          <img src="/facemask.png" alt="Face Mask Detection" />

          <div className="project-content">

            <h3>Real-Time Face Mask Detection</h3>

            <p>
              Computer Vision application capable of detecting face masks
              in real-time using Convolutional Neural Networks and
              OpenCV.
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
              View Source Code
            </a>

          </div>

        </div>


        {/* Project 3 */}

        <div className="project-card">

          <img src="/emotion.png" alt="Emotion Detection" />

          <div className="project-content">

            <h3>Multi-Class Emotion Detection</h3>

            <p>
              Natural Language Processing system capable of identifying
              multiple human emotions from textual input using Machine
              Learning models.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>NLP</span>
              <span>Scikit-Learn</span>
              <span>PyTorch</span>
            </div>

            <a
              href="https://github.com/SyedHamza122"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View Source Code
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;