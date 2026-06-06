import { Header } from ".././HeaderFiles/Header";
import "./Project.css";
import todolist from "../../assets/todoList.png";
import ecommerce from "../../assets/ecommerce.jpg";
import foodwebsite from "/foodwebsite.jpeg";
import businesswebsite from "/bussiness-webiste.jpeg";

export function ProjectPage() {
  return (
    <div className="project-container">
      <Header />

      <section className="projects-section">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-grid">
          <a
            href="https://business-website-sj0m.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="post-card-container1">
              <img src={businesswebsite} className="todo-image" />
              <span>Business websibite</span>
            </div>
          </a>

          <a
            href="https://backend-foodwebsite.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="post-card-container1">
              <img src={foodwebsite} className="todo-image" />
              <span>
                full stack: food-website project using e-commerce features
              </span>
            </div>
          </a>

          <a
            href="https://bwis-ecommerce-site.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="post-card-container1">
              <img src={ecommerce} className="ecommerce-image" />
              <span>ecommerce</span>
            </div>
          </a>

          <a
            href="https://bwis-todo-app.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="post-card-container1">
              <img src={todolist} className="todo-image" />
              <span>Todo List</span>
            </div>
          </a>
        </div>

        <div className="github-link-container">
          <a
            href="https://github.com/Bwis-coder?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            See all my GitHub projects
          </a>
        </div>
      </section>
    </div>
  );
}
