import "../styles/Project.css"
import ImageCard from "../components/ImageCard";
import FadeLeftRight from "../components/FadeLeftRight";
import SkillList from "../components/SkillList";
import FancySection from "../components/fancySection";
import { ImageContentEntry, ComponentDelay } from "../types";


//const contents: ContentEntry[] = [{ name: "Hi", desc: "Okay", skills: ["okay"] }];
const imageContents: ImageContentEntry[] = [
  {
    link: "https://brianli-personal-website.vercel.app",
    name: "Personal website v1",
    desc: "The first iteration of my personal website.",
    image: "/website-v1.png",
    skills: ["Typescript", "Vite", "CSS"]
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
          {imageContents.map(({ link, name, desc, image, skills }, i) =>
            <li key={`${name}-${i}`} >
              <ImageCard imageUrl={image} href={link} >
                <FancySection name={name} desc={desc} />
                <SkillList name={name} items={skills} />
              </ImageCard>
            </li>)}
        </ul>
      </FadeLeftRight>
    </article >
  )
}
