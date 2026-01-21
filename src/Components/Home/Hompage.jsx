import { Header } from '../HeaderFiles/Header'
import { Sectionpage } from './Section'
import './HomePage.css'
import { FormSection } from './Form'




export function Homepage() {
  

  return (
    <div className='main-container'>
      <Header />
      <Sectionpage />
      <FormSection />
    </div>
  )
}

