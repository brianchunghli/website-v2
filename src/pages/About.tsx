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
            My first experience with web development happened back in 2012 while customizing my Myspace page. Back then — it felt like a big step at the time, in hindsight, it was the first small step to my exciting adventure in software development.
          </div>
          <div>
            After a brief period at PwC Consulting, I realized my true passion lies in creating effective solutions to both everyday and novel challenges. So, I made the decision to leave PwC and focus on what I enjoyed doing the most.
            I'm all about that sweet spot where design and engineering meet. It's not just about making things work; it's about making them look and feel good as well.
          </div>
          <div>
            My experience and the things that I've tinkered with or have worked on to date can be found below. When I'm not coding, you'll find me deep in some theoretical computer science rabbit hole, playing badminton, or reading.
          </div>
        </div>
      </FadeLeftRight>
    </section >
  )
}
