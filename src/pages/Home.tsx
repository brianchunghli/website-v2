import '../styles/Home.css';
import AboutSection from './About';
import Footer from './Footer';
import Blurb from './Blurb';
import ProjectSection from './Projects';
import ExperienceSection from './Experience';
import SkillsSection from './Skills';

const DELAY_MAIN_INTRO = 400;

export default function MainPage() {
  return (
    <>
      <main id="main-container">
        <Blurb />
        <section id="main-content" >
          <section id="main-content-sections">
            <AboutSection id="about-section" mainDelay={DELAY_MAIN_INTRO} />
            <ProjectSection id="project-section" mainDelay={DELAY_MAIN_INTRO} />
            <ExperienceSection id="experience-section" mainDelay={DELAY_MAIN_INTRO} />
            <SkillsSection id="skills-section" mainDelay={DELAY_MAIN_INTRO} />
          </section>
          <Footer />
        </section>
      </main >
    </>
  )
}



