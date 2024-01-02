import React from 'react'
import FancyTitle from './fancyTitle'

interface fancySection {
  name: string;
  desc: string;
}

type FancySectionProps = React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> & React.HTMLProps<HTMLDivElement> & fancySection


export default function FancySection({ name, desc, ...props }: FancySectionProps) {
  return <div {...props}>
    <FancyTitle text={name} />
    <div>
      {desc}
    </div>
  </div>
}
