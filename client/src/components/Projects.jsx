import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Satellite Image Captioning</h3>
        <p>Used CLIP model to generate image captions for satellite imagery. Evaluated with BLEU, CIDEr and cosine similarity.</p>
      </div>
    </section>
  );
}

export default Projects;
