import '../styles/Card.css'
import React from 'react'

interface DateCardProps {
  IntervalStart: string;
  IntervalEnd?: string;
}

type CardProps = React.ClassAttributes<HTMLAnchorElement> &
  React.HTMLAttributes<HTMLAnchorElement> & React.HTMLProps<HTMLAnchorElement> & DateCardProps

export default function DateCard({ IntervalStart, IntervalEnd = "PRESENT", children, ...props }: CardProps) {
  return (
    <a {...props}>
      <div className="card">
        <div className="datecard-textbox"><small>{IntervalStart} — {IntervalEnd}</small></div>
        <div className="datecard-body">
          {children}
        </div>
      </div>
    </a>
  )
}
