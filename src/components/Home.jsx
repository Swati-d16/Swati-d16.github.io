import Bio from './Bio'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='pt-20'>
      {/* Bio Section */}
      <section id='bio' className='min-h-screen'>
        <Bio />
      </section>

      {/* Skills Section */}
      <section id='skills' className='min-h-screen'>
        <Skills />
      </section>

      {/* Experience Section */}
      <section id='experience' className='min-h-screen'>
        <Experience />
      </section>

      {/* Projects Section */}
      <section id='projects' className='min-h-screen'>
        <Projects />
      </section>
    </div>
  )
}

export default Home
