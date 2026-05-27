import { NavLink } from 'react-router-dom'
import './Headerr.css'

export function Header() {
  return (
    <div className='header-container-main'>
      <header className='header-container' >
        <p className='code-name'>BwisTech</p>

        <nav className='nav-container'>
          <NavLink className={({ isActive }) => {
            return isActive ? 'active-link' : ''
          }} to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => {
            return isActive ? 'active-link' : ''
          }} to='/project'>Projects</NavLink>
          <NavLink className={({ isActive }) => {
            return isActive ? 'active-link' : ''
          }} to='/skills' >Stacks/Skills</NavLink>
        </nav>
      </header>
    </div>
  )
}