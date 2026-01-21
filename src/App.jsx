import { Homepage } from './Components/Home/Hompage'
import { ProjectPage } from './Components/Project/ProjectPage'
import { SkillsPage } from './Components/Skills/SkillsPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/skills' element={<SkillsPage/>} />
      </Routes>
    </>
  )
}

export default App
