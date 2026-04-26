import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AllProjects from './pages/AllProjects'

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  if (showAllProjects) {
    return <AllProjects onBack={() => { setShowAllProjects(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }} />
  }

  return (
    <>
      <Header />
      <Hero />
      <Projects onShowAll={() => { setShowAllProjects(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }} />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
