import { Header } from '../HeaderFiles/Header'
import './Skills.css'
import react from '../../assets/react.png'
import javascript from '../../assets/javascript-logo.png'
import htmls from '../../assets/html.png'
import cssd from '../../assets/css.png'


export function SkillsPage() {
  return (
    <>
      <Header />

      <div className="skill-page-container">
        <div className="hero-container">
          <h2 className="title">Skills</h2>

          <div className="description-container">
            <h3>Frontend Development</h3>
            <p className="narration">
              I build modern, clean, and functional user interfaces using current frontend technologies.
              My focus is writing clear, maintainable code that turns designs into fully working websites and applications.
            </p>
          </div>

          <div className="description-container">
            <h3>User Experience</h3>
            <p className="narration">
              I design interfaces that are simple to understand and easy to use.
              Every layout, spacing, and interaction is built to help users navigate smoothly and complete actions without confusion.
            </p>
          </div>

          <div className="description-container">
            <h3>Performance & Responsiveness</h3>
            <p className="narration">
              I ensure websites load fast and work properly on all screen sizes.
              Layouts adapt seamlessly across mobile, tablet, and desktop devices without breaking or losing clarity.
            </p>
          </div>

          <div className="description-container">
            <h3>Business-Focused Features</h3>
            <p className="narration">
              I build websites with real business goals in mind — not just visuals.
              From contact forms to user flows, every feature is designed to attract users, keep them engaged, and support profitability.
            </p>
          </div>

          <div className="tech-stack-container">
          <h2 className="tech-stack-title">Tech Stack</h2>
          <p className="tech-stack-list">React · JavaScript · HTML · CSS</p>
          <div className='image-container'>
            <img  src={react} alt='React-logo'/>
            <img  src={javascript} alt='Javascript-logo'/>
            <img src={htmls} alt='Html-logo'/>
            <img src={cssd} alt='Css-logo'/>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
