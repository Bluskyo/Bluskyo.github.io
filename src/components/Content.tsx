import { useEffect, useState } from "react"
import Card from "./Card"
import './Content.css'
import LanguageSelect from "./LanguageSelect"
import ThemeSelect from "./ThemeSelect"
import FlashEffect from "./FlashEffect"

export type color = {
  color: string
  stop?: number
}

export type inputField = {
  name: string
  text: string
  type: string
  placeholder?: string
  required: boolean
}

export type image = {
  src: string
  altText: string
  pos: string
  link?: string
}

const aboutColors: color[] = [
  { color: "var(--card1-color1)" },
  { color: "var(--card1-color2)" }
]

const aboutImage: image[] = [
  { src: "/pictures/headshot.png", altText: "headshot", pos: "top"}
]

const projectsColors: color[] = [
  { color: "var(--card2-color1)" },
  { color: "var(--card2-color2)" }
]

const contactColors: color[]  = [
  { color: "var(--card3-color1)" },
  { color: "var(--card3-color2)", stop: 40 },
  { color: "var(--card3-color3)" }
]

const contactImages: image[] = [
  { src: "/logos/github.svg", altText: "Github icon", pos: "bottom", link: "https://github.com/Bluskyo"},
  { src: "/logos/linkedin.png", altText: "Linkedin icon", pos: "bottom", link: "https://www.linkedin.com/in/isak-mikalsen/"},
]

const contactInput: inputField[] = [
  { name: "Email", text:"Contact-form.Email", type:"email", required: true}, 
  { name: "Message", text: "Contact-form.Message", type:"textarea", required: true }
]

export default function Content() {

  const [text, setText] = useState("");

  // Sets text to empty to remove element from html flow.
  useEffect(() => {
    setTimeout(() => setText(""), 800)
  },[text]);

  return (
    <>
      <div className="content-grid">
        {text &&
          <FlashEffect text={text}/>
        }
        <div className="icon-sidebar">
          <div className="img-wrapper">
            <ThemeSelect />
          </div>
          <div className="img-wrapper">
            <LanguageSelect text={text} setText={setText}/>
          </div>
        </div>

        <Card 
        title="About" 
        content="About-section"
        color={aboutColors}
        gradientAngle={180}
        image={aboutImage}
        />

        <Card 
        title="Projects"
        content="Projects-section" 
        carousel={true}
        color={projectsColors}
        gradientAngle={0}
        />

        <Card 
        title="Contact"
        content="Contact-section"
        color={contactColors}
        gradientAngle={0}
        inputData={contactInput}
        image={contactImages}
        />
      </div>
    </>

  )
}
