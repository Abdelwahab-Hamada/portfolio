import Projects from "../components/Projects"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
import Services from "../components/Services"
import Techs from "../components/Techs"

const Landing = () => {
  return (
    <div className='relative flex flex-col overflowx-hidden'>
        <Hero/>
        <Techs/>
        <Services/>
        <Projects/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Landing