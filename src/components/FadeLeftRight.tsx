import React, { useEffect, useRef, useState } from "react";
import '../styles/Fade.css'

interface MyComponentProps {
  delay?: number;
  FadeLeft?: boolean;
}

type FadeInSectionProps = React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> &
  MyComponentProps;

export default function FadeLeftRight({
  children,
  delay = 0,
  FadeLeft = true,
  ...rest
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(() => false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(entry.isIntersecting);
          }, delay);
        }
      });
    });
    domRef?.current && observer.observe(domRef.current);
    return () => {
      domRef?.current && observer.unobserve(domRef.current);
    };
  }, []);
  return (
    <div
      {...rest}
      className={`fade-in-section${isVisible ? (FadeLeft ? " is-visible-left" : " is-visible-right") : ""
        }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};


