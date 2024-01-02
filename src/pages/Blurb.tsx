import "../styles/Blurb.css"
import Socials from "./Social";

export default function Blurb() {
  return (
    <section id="blurb">
      <div id="blurb-floating" >
        <div>
          <span id="blurb-floating-title" className="highlight" >Hello, I'm
            <span id="blurb-floating-title-name"> Brian</span>!
          </span>
        </div>
        <div id="blurb-floating-body">
          Masters of IT (Computer Science) student @ UNSW and
          avid tech enthusiast based in Sydney.
        </div>
      </div >
      <Socials />
    </section >
  )
}
