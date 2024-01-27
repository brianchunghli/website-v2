import "../styles/Project.css"
import ImageCard from "../components/ImageCard";
import FadeLeftRight from "../components/FadeLeftRight";
import SkillList from "../components/SkillList";
import FancySection from "../components/fancySection";
import { ImageContentEntry, ComponentDelay } from "../types";

const imageContents: ImageContentEntry[] = [
  {
    link: "https://github.com/brianchunghli/splitfast-frontend",
    title: "Splitfast",
    desc: "A splitwise clone built using the Rust Axum framework and React with state persistence, authentication and sharing. Backend deployed via an AWS EC2 instance and AWS CloudFront. Frontend built in Typescript and React with Vite.",
    image: "/placeholder.png",
    skills: ["Rust", "Typescript", "Axum", "React", "Amazon Web Services"]
  },
  {
    link: "https://github.com/brianchunghli/website-v2",
    title: "Personal website v2",
    desc: "The next iteration of my personal website.",
    image: "/website-v2.png",
    skills: ["Typescript", "React", "Css"]
  },
  {
    link: "https://github.com/brianchunghli/personal-website",
    title: "Personal website v1",
    desc: "The first iteration of my personal website.",
    image: "/website-v1.png",
    skills: ["Typescript", "React", "Css"]
  }
];

type ProjectSectionProps = React.ClassAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> & React.HTMLProps<HTMLElement> & ComponentDelay

export default function ProjectsSection({ id, mainDelay = 1000, ...props }: ProjectSectionProps) {
  return (
    <article id={id} {...props}>
      <FadeLeftRight delay={mainDelay} FadeLeft={false}>
        <span id="project-section-title" className="title"><b>PROJECTS</b></span>
        <ul id="project-section-content">
          {imageContents.map(({ link, title, desc, image, skills }, i) =>
            <li key={`${title}-${i}`} >
              <ImageCard imageUrl={image} href={link} >
                <FancySection name={title} desc={desc} link={link} />
                {skills &&
                  <SkillList name={title} items={skills} />
                }
              </ImageCard>
            </li>)}
        </ul>
      </FadeLeftRight>
    </article >
  )
}
