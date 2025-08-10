import Card from "./Card"
import './Content.css'
import LanguageSelect from "./LanguageSelect"

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
  { color: "rgba(71, 0, 213, 1)" },
  { color: "rgba(37, 0, 111, 1)" }
]

const aboutImage: image[] = [
  { src: "/pictures/headshot.png", altText: "headshot", pos: "top"}
]

const projectsColors: color[] = [
  { color: "rgba(213, 0, 110, 1)" },
  { color: "rgba(37, 0, 111, 1)" }
]

const contactColors: color[]  = [
  { color: "rgba(37, 0, 111, 1)" },
  { color: "rgba(85, 41, 172, 1)", stop: 40 },
  { color: "rgba(97, 255, 181, 1)" }
]

const contactImages: image[] = [
  { src: "/logos/github-logo.svg", altText: "Github icon", pos: "bottom", link: "https://github.com/Bluskyo"},
  { src: "/logos/linkedin-logo.png", altText: "Linkedin icon", pos: "bottom", link: "https://www.linkedin.com/in/isak-mikalsen/"},
]

const contactInput: inputField[] = [
  { name: "Email", text:"Contact-form.Email", type:"email", required: true}, 
  { name: "Message", text: "Contact-form.Message", type:"textarea", required: true }
]

export default function Content() {

  return (
    <>
      <div className="content-grid">
        <LanguageSelect/>

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
