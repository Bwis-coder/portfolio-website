import { Header } from "../HeaderFiles/Header";
import "./Skills.css";

import react from "../../assets/react.png";
import javascript from "../../assets/javascript-logo.png";
import htmls from "../../assets/html.png";
import cssd from "../../assets/css.png";

export function SkillsPage() {
  return (
    <>
      <Header />

      <div className="skill-page-container">
        <h2 className="title">Skills</h2>

        <section className="skills-grid">
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <p>
              I build clean and modern user interfaces using React and
              JavaScript. I focus on writing simple, maintainable code that
              turns designs into working websites.
            </p>
          </div>

          <div className="skill-card">
            <h3>User Experience</h3>
            <p>
              I design simple and easy-to-use interfaces so users can navigate
              smoothly and complete actions without confusion.
            </p>
          </div>

          <div className="skill-card">
            <h3>Performance & Responsiveness</h3>
            <p>
              I build fast websites that work on all devices including mobile,
              tablet, and desktop without breaking layout.
            </p>
          </div>

          <div className="skill-card">
            <h3>Business Focus</h3>
            <p>
              I build websites with business goals in mind — helping users
              engage easily and take action like contacting or buying.
            </p>
          </div>
        </section>

        <div className="tech-stack-container">
          <h2 className="tech-title">Tech Stack</h2>

          <div className="tech-icons">
            <img src={react} alt="React" />
            <img src={javascript} alt="JavaScript" />
            <img src={htmls} alt="HTML" />
            <img src={cssd} alt="CSS" />
          </div>
        </div>
      </div>
    </>
  );
}