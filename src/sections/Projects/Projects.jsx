import styles from "./ProjectsStyles.module.css";
import hipsster from "../../assets/world.png";
import fitLift from "../../assets/todo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={hipsster}
          link="https://github.com/priteshdusane/react-global-gazetteer"
          h3="Global Gazetteer"
          p="Country Information App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/priteshdusane/react-todo"
          h3="ToDo"
          p="Todo List App"
        />
      </div>
    </section>
  );
}

export default Projects;
