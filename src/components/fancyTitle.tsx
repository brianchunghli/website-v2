import React from 'react'

interface fancyTitle {
  text: string;
  display: boolean;
}
type FancyTitleProps = React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> & React.HTMLProps<HTMLDivElement> & fancyTitle

export default function FancyTitle({ text, display, ...props }: FancyTitleProps) {
  return <div {...props}>
    <div className="highlight">
      <span>{text}
        {display &&
          <i className="fancy-title bi bi-box-arrow-up-right"></i>
        }
      </span>
    </div>
  </div>
}
