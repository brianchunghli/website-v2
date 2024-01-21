import "../styles/Experience.css"
import DateCard from "../components/DateCard";
import FadeLeftRight from "../components/FadeLeftRight";
import SkillList from "../components/SkillList";
import FancySection from "../components/fancySection";
import { DateContentEntry, ComponentDelay } from "../types";

const dateContents: DateContentEntry[] = [
  {
    title: "Senior Consultant · PwC Consulting Australia",
    desc: "Involved in projects ranging from Board to Executive level remuneration benchmarking, to digital transformation for Government, Financial Services and Tech sectors.",
    skills: ["Communication", "Leadership", "Stakeholder management"],
    DateInterval: { start: "MAR 2018", end: "JAN 2022" },
  },
];

type ExperienceSection = React.ClassAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> & React.HTMLProps<HTMLElement> & ComponentDelay

export default function ExperienceSection({ id, mainDelay = 1000, ...props }: ExperienceSection) {
  return (
    <article id={id} {...props}>
      <FadeLeftRight delay={mainDelay} FadeLeft={false}>
        <span id="experience-section-title" className="title"><b>EXPERIENCE</b></span>
        <ul id="experience-section-content">
          {dateContents.map(({ link, title, desc, skills, DateInterval }, i) =>
            <li key={`${title}-${i}`} >
              <DateCard IntervalStart={DateInterval.start} IntervalEnd={DateInterval.end} href={link} >
                <FancySection name={title} desc={desc} link={link} />
                {skills && <SkillList name={title} items={skills} />
                }
              </DateCard>
            </li>)}
        </ul>
      </FadeLeftRight>
    </article >
  )
}
