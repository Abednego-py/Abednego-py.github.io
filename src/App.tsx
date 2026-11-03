import Classroom from "./components/Classroom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Progress from "./components/Progress";
import Recognition from "./components/Recognition";
import SuccessStories from "./components/SuccessStories";
import Timeline from "./components/Timeline";
import Toolbox from "./components/Toolbox";
import Work from "./components/Work";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main id="top" className="wrap">
        <div className="mesh" aria-hidden="true" />
        <Hero />
      </main>
      <Marquee />
      <div className="wrap">
        <Work />
        <Toolbox />
        <Recognition />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

const ClassRoomPage = () => {
  return (
    <div className="wrap">
      <Classroom />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Progress />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classroom" element={<ClassRoomPage />} />
      </Routes>
    </Router>
  );
}
