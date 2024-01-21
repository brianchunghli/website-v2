import React from 'react'
import FancyTitle from './fancyTitle'

interface fancySection {
  name: string;
  desc: string;
  link?: string;
}

type FancySectionProps = React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> & React.HTMLProps<HTMLDivElement> & fancySection


export default function FancySection({ name, desc, link, ...props }: FancySectionProps) {
  return <div {...props}>
    <FancyTitle className="title-padding" text={name} display={link ? true : false} />
    <div className="smaller-text">
      {desc}
    </div>
  </div>
}
