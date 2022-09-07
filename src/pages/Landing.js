import Projects from "../components/Projects"
import Hero from "../components/Hero"
import Techs from "../components/Techs"
import About from "../components/About"
import Refs from "../components/Refs"
import Contact from "../components/Contact"

const Landing = () => {
  return (
    <div className='relative flex flex-col gap-16'>
        
        <Hero/>
        <Projects/>
        {/* <Techs/> */}
        <About/>
        {/* <Refs/> */}
        <Contact/>
    </div>
  )
}

export default Landing