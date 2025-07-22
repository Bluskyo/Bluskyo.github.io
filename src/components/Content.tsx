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

  const projectsColors: color[] = [
    { color: "rgba(213, 0, 110, 1)" },
    { color: "rgba(37, 0, 111, 1)" }
  ]

  const contactColors: color[]  = [
    { color: "rgba(37, 0, 111, 1)" },
    { color: "rgba(85, 41, 172, 1)", stop: 40 },
    { color: "rgba(97, 255, 181, 1)" }
  ]

  const contactInput: inputField[] = [
    { name: "email", type:"email", placeholder: "Your email address", required: true}, 
    { name: "message", type:"textarea", placeholder: "Your message", required: true }
  ]

  const contactImages: image[] = [
    { src: "/github-logo.svg", altText: "Github icon", pos: "bottom", link: "https://github.com/Bluskyo"},
    { src: "/linkedin-logo.png", altText: "Linkedin icon", pos: "bottom", link: "https://www.linkedin.com/in/isak-mikalsen/"},
    //{ src: "/mail-logo.svg", altText: "Mail icon", pos: "bottom", link: "mailto:"},
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
      Mauris vel condimentum enim, eu tempus urna. Integer varius leo ut fringilla ullamcorper.
      Nam tellus quam, vehicula ut rhoncus in, consectetur ac ante. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel condimentum enim, eu tempus urna. 
      Integer varius leo ut fringilla ullamcorper. Nam tellus quam, vehicula ut rhoncus in, consectetur ac ante. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel condimentum enim, eu tempus urna. 
      Integer varius leo ut fringilla ullamcorper. Nam tellus quam, vehicula ut rhoncus in, consectetur ac ante."
      color={aboutColors}
      angle={180}
      />

      <Card 
      title="Projects"
      secondTitle="Anki-add"
      content="This project was my favorite!"
      color={projectsColors}
      angle={0}
      />

      <Card 
      title="Contact Me"
      content="Please feel free to contact me!"
      color={contactColors}
      angle={0}
      inputData={contactInput}
      image={contactImages}
      />
    </div>
  )
}

export default Content
