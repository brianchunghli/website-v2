import '../styles/Card.css'
import React from 'react'


interface DateCardProps {
  start: string;
  end?: string;
}

type CardProps = React.ClassAttributes<HTMLAnchorElement> &
  React.HTMLAttributes<HTMLAnchorElement> & DateCardProps

export default function Card({ start, end = "PRESENT", children, ...props }: CardProps) {
  return (
    <a {...props}>
      <div className="card">
        <div className="datecard-textbox"><small>{start} — {end}</small></div>
        <div className="datecard-body">
          {children}
        </div>
      </div>
    </a>
  )
}
