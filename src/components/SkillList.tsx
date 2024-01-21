import React from 'react'
import "../styles/SkillsList.css"

interface SkillListProps {
  name: string,
  items: string[]
}

type SkillsProps = React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> & React.HTMLProps<HTMLDivElement> & SkillListProps

export default function SkillList({ name, items, ...props }: SkillsProps) {
  return <div className="skills-list-container" {...props}>
    {items.map((v, j) => <div className="skills-list-item smaller-text" key={`${name}-${v}-${j}`}>{v}</div>)}
  </div>

}
