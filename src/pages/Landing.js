import Projects from "../components/Projects"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"

const Landing = () => {
  return (
    <div className='relative flex flex-col'>
        
        <Hero/>
        <Projects/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Landing