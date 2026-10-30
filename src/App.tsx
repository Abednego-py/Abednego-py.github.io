import Classroom from './components/Classroom'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Progress from './components/Progress'
import Recognition from './components/Recognition'
import Timeline from './components/Timeline'
import Toolbox from './components/Toolbox'
import Work from './components/Work'

export default function App() {
  return (
    <>
      <Progress />
      <Header />
      <main id="top" className="wrap">
        <div className="mesh" aria-hidden="true" />
        <Hero />
      </main>
      <Marquee />
      <div className="wrap">
        <Work />
        <Toolbox />
        <Recognition />
        <Classroom />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
