import '../styles/Card.css'
import React from 'react'

interface ImageCard {
  imageUrl: string;
}

type CardProps = React.ClassAttributes<HTMLAnchorElement> &
  React.HTMLAttributes<HTMLAnchorElement> & React.HTMLProps<HTMLAnchorElement> & ImageCard

export default function ImageCard({ imageUrl, children, ...props }: CardProps) {
  return (
    <a {...props} >
      <div className="card">
        <div className="imagecard-image">
          <img src={imageUrl} alt="Missing image" />
        </div>
        <div className="imagecard-body">
          {children}
        </div>
      </div>
    </a>
  )
}
