import "../styles/Blurb.css"
import Socials from "./Social";

const scrollToTop = () => {
  window.scrollTo(0, 0)
  window.history.replaceState(null, '', window.location.pathname);
}

export default function Blurb() {
  return (
    <section id="blurb">
      <div id="blurb-floating" >
        <div>
          <span id="blurb-floating-title" className="highlight-white" >
            <span role="button" aria-label="back-to-top" id="blurb-floating-title-name" onClick={scrollToTop}> Brian Li</span>
          </span>
        </div>
        <div id="blurb-floating-body">
          <div className="highlight-white">
            Computer Science Student
          </div>
          <div>
            Masters of IT (Computer Science) @ UNSW and avid tech enthusiast based in Sydney.
          </div>
        </div>
      </div >
      <Socials />
    </section >
  )
}
