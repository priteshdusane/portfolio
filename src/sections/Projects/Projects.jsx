import styles from "./ProjectsStyles.module.css";
import world from "../../assets/world.png";
import todo from "../../assets/todo.png";
import card from "../../assets/card.webp";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={card}
          link="https://github.com/priteshdusane/react-character-searcher"
          h3="Character Searcher"
          p="Gamecard Searcher App"
        />
        <ProjectCard
          src={world}
          link="https://github.com/priteshdusane/react-global-gazetteer"
          h3="Global Gazetteer"
          p="Country Information App"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/priteshdusane/react-todo"
          h3="ToDo"
          p="Todo List App"
        />
      </div>
    </section>
  );
}

export default Projects;
