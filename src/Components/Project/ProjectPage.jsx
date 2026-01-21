import { Header } from '.././HeaderFiles/Header'
import './Project.css'
import todolist from '../../assets/todoList.png'
import ecommerce from '../../assets/ecommerce.jpg'

export function ProjectPage () {
  return (
    <div className='project-container'>
      <Header />

      <section className="projects-section">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">
        
            <a
              href="https://bwis-ecommerce-site.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='post-card-container1'>
                <img src={ecommerce} className='ecommerce-image' />
              <span>ecommerce</span>
              </div>
            </a>
      
            <a
              href="https://bwis-todo-app.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='post-card-container1'>
                <img src={todolist} className='todo-image' />
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
  )
}
