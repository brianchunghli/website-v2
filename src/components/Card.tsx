import '../styles/Card.css'
import React from 'react'

type CardProps = React.ClassAttributes<HTMLAnchorElement> &
  React.HTMLAttributes<HTMLAnchorElement>

export default function Card({ children, ...props }: CardProps) {
  return (
    <a {...props}>
      <div className="card">
        {children}
      </div>
    </a>
  )
}
