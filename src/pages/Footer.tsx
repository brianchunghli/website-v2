import '../styles/Footer.css'
import FadeLeftRight from "../components/FadeLeftRight";

export default function footer() {
  return (
    <>
      <footer id="footer-content">
        <small>
          Built with Vite and React and deployed with Vercel. The typeface used is
          <a href="https://fontsource.org/fonts/inter" className="highlight"> Inter</a> and the colours seen are a subset of the <a className="highlight" href="https://github.com/catppuccin/catppuccin">Catpuccin theme</a>.
        </small>
      </footer>
    </>
  )
}
