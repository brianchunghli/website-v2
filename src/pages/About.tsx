import '../styles/About.css'
import FadeLeftRight from "../components/FadeLeftRight"

interface AboutDelay {
  mainDelay?: number;
}

type AboutSectionProps = React.ClassAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> & AboutDelay

export default function AboutSection({ mainDelay, ...props }: AboutSectionProps) {
  return (
    <section {...props}>
      <FadeLeftRight delay={mainDelay} FadeLeft={false}>
        <div id="about-section-content">
          <div>
            My first experience with web development happened back in 2012 while customizing my Myspace page—a small but meaningful beginning in my journey into software development. Over time, my interest in building practical solutions has only grown.
          </div>
          <div>
            After a brief period at PwC Consulting, I realized my true passion lies in creating effective solutions to everyday challenges. So, I made the decision to leave PwC and focus on what I love.
          </div>

          <div>
            For now, stay tuned for updates on my current projects.
          </div>
        </div>
      </FadeLeftRight>
    </section >
  )
}
