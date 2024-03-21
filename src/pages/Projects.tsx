import "../styles/projects.css";

export const Projects = () => {
  return (
    <section className="projects-container">
      <div className="text-left-block">
        <h3>Projects</h3>
        <div className="text-block">
          <p>Här är det lite mera text.</p>
        </div>
      </div>

      <div className="projects-box">
        <div className="project1">Projekt 1</div>
        <div className="project2">Projekt 2</div>
        <div className="project3">Projekt 3</div>
        <div className="project4">Projekt 4</div>
        <div className="project5">Projekt 5</div>
        <div className="project6">Projekt 6</div>
      </div>
    </section>
  );
};
