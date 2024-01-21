import "../styles/Skills.css"
import { ComponentDelay } from "../types"
import FadeLeftRight from "../components/FadeLeftRight"

type SkillsSection = React.ClassAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> & React.HTMLProps<HTMLElement> & ComponentDelay

const languages: string[] = ["Python", "Rust", "C++", "C", "Shell/Zsh", "Typescript"];
const frontend: string[] = ["React", "CSS3", "HTML5"];
const backend: string[] = ["Postgresql", "Axum"];
const build: string[] = ["Docker", "Amazon Web Services", "Git", "Unix/Linux", "Github", "SSH"];

const iconMappings: { [iconName: string]: string } = {
  "Rust": "devicon-rust-plain",
  "Python": "devicon-python-plain",
  "C++": "devicon-cplusplus-plain",
  "C": "devicon-c-plain",
  "CSS3": "devicon-css3-plain",
  "HTML5": "devicon-html5-plain",
  "Typescript": "devicon-typescript-plain",
  "Shell/Zsh": "devicon-bash-plain",
  "Postgresql": "devicon-postgresql-plain",
  "React": "devicon-react-original",
  "Axum": "devicon-rust-plain",
  "Amazon Web Services": "devicon-amazonwebservices-original",
  "Git": "devicon-git-plain",
  "Unix/Linux": "devicon-unix-original",
  "Docker": "devicon-docker-plain",
  "Github": "devicon-github-plain",
  "SSH": "devicon-ssh-original-wordmark"
};

export default function SkillsSection({ mainDelay, ...props }: SkillsSection) {
  return <article {...props}>
    <FadeLeftRight delay={mainDelay} FadeLeft={false}>
      <div>
        <span id="skills-section-title" className="title"><b>LANGUAGES AND TECH</b></span>
      </div>
      <div id="languages-and-tech-section">
        <div className="languages-and-tech-row">
          <div >
            Languages
          </div>
          <div className="languages-and-tech-row-icons">
            {languages.map((v, i) => <div><i className={`${iconMappings[v]}`} key={`languages-${i}-${v}`} />
              <div className="tooltip">{v}</div>
            </div>)}
          </div>
        </div>
        <div className="languages-and-tech-row">
          <div >
            Frontend
          </div>
          <div className="languages-and-tech-row-icons">
            {frontend.map((v, i) => <div><i className={`${iconMappings[v]}`} key={`frontend-${i}-${v}`} />
              <div className="tooltip">{v}</div>
            </div>)}
          </div>
        </div>
        <div className="languages-and-tech-row">
          <div >
            Backend
          </div>
          <div className="languages-and-tech-row-icons">
            {backend.map((v, i) => <div><i className={`${iconMappings[v]}`} key={`backend-${i}-${v}`} />
              <div className="tooltip">{v}</div>
            </div>)}
          </div>
        </div>
        <div className="languages-and-tech-row">
          <div >
            Other
          </div>
          <div className="languages-and-tech-row-icons">
            {build.map((v, i) => <div><i className={`${iconMappings[v]}`} key={`other-${i}-${v}`} />
              <div className="tooltip">{v}</div>
            </div>)}
          </div>
        </div>
      </div>
    </FadeLeftRight>
  </article>
}
