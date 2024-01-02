import '../styles/Home.css';
import AboutSection from './About';
import Footer from './Footer';
import Blurb from './Blurb';
import ProjectSection from './Projects';

const DELAY_MAIN_INTRO = 1000;

export default function MainPage() {
  return (
    <>
      <main id="main-container">
        <Blurb />
        <section id="main-content" >
          <section id="main-content-sections">
            <AboutSection id="about-section" mainDelay={DELAY_MAIN_INTRO} />
            <ProjectSection id="experience-section" />
          </section>
          <Footer />
        </section>
      </main >
    </>
  )
}



