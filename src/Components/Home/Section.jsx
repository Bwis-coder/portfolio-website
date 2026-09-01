import system from "/profile.jpeg";

export function Sectionpage() {
  return (
    <>
      <section className="section-container">
        <div>
          <img src={system} loading="lazy" />
        </div>

        <div className="title-container">
          <h1 className="title-name">About Me</h1>
          <h4 className="title-narration">
            <span>Hi, I'm Ogbodo Chidiebere Wisdom.</span>
            I’m a React and full-stack developer. I build modern websites and
            web applications that help businesses and companies grow, reach more
            customers, and build a stronger online presence.
          </h4>
        </div>
      </section>
    </>
  );
}
