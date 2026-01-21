import system from '../../assets/system.jpg'

export function Sectionpage () {
return (
  <>
  <section className='section-container'>
        <img src={system} loading='lazy' />
        <div className='title-container'>
          <h1 className='title-name'>About Me</h1>
          <h4 className='title-narration'>
            <span>Hi, I'm Ogbodo Chidiebere Wisdom.</span> 
             I’m a self-driven frontend developer who turns ideas and designs into clean, responsive, and user-friendly websites. Using modern web technologies, I build interfaces that are visually appealing and designed to help individuals and businesses grow online.
          </h4>
        </div>

       
    
      </section>
  
  </>
)
}   