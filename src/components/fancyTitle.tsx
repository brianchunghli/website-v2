import React from 'react'

interface fancyTitle {
  text: string;
}

type FancyTitleProps = React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> & React.HTMLProps<HTMLDivElement> & fancyTitle

export default function FancyTitle({ text, ...props }) {
  return <div {...props}>
    <div className="highlight">
      <span>{text}
        <i class="fancy-title bi bi-box-arrow-up-right"></i>
      </span>
    </div>
  </div>
}
