import Card from "./Card"
import './Content.css'

export type color = {
  color: string
  stop?: number
}

export type inputField = {
  name: string
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

function Content() {

  const aboutColors: color[] = [
    { color: "rgba(71, 0, 213, 1)" },
    { color: "rgba(37, 0, 111, 1)" }
  ]

  const aboutImage: image[] = [
    { src: "/headshot.png", altText: "headshot", pos: "top"}
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
    { src: "/github-logo.svg", altText: "Github icon", pos: "bottom", link: "https://github.com/Bluskyo"},
    { src: "/linkedin-logo.png", altText: "Linkedin icon", pos: "bottom", link: "https://www.linkedin.com/in/isak-mikalsen/"},
    //{ src: "/mail-logo.svg", altText: "Mail icon", pos: "bottom", link: "mailto:"},
  ]

  const contactInput: inputField[] = [
    { name: "Email", type:"email", required: true}, 
    { name: "Message", type:"textarea", required: true }
  ]

  return (
    <div className="content-grid">
      <Card 
      title="About" 
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Mauris vel condimentum enim, eu tempus urna. 
      Integer varius leo ut fringilla ullamcorper. 
      Nam tellus quam, vehicula ut rhoncus in, consectetur ac ante.Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Mauris vel condimentum enim, eu tempus urna. Integer varius leo ut fringilla ullamcorper.
      Nam tellus quam, vehicula ut rhoncus in, consectetur ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Mauris vel condimentum enim, eu tempus urna."
      color={aboutColors}
      gradientAngle={180}
      image={aboutImage}
      />

      <Card 
      title="Projects"
      content="These are some of my favorite projects that I have worked on👇🏻" 
      carousel={true}
      color={projectsColors}
      gradientAngle={0}
      />

      <Card 
      title="Contact"
      content="Please feel free to contact me!"
      color={contactColors}
      gradientAngle={0}
      inputData={contactInput}
      image={contactImages}
      />
    </div>
  )
}

export default Content
