import Card from "./Card"
import './Content.css'

export type colors = {
  color: string;
  stop?: number;
}

export type inputField = {
  name: string,
  type: string,
  placeholder?: string
  required: boolean
}

function Content() {

  const aboutColors: colors[] = [
    { color: "rgba(71, 0, 213, 1)" },
    { color: "rgba(37, 0, 111, 1)" }
  ]

  const projectsColors: colors[] = [
    { color: "rgba(213, 0, 110, 1)" },
    { color: "rgba(37, 0, 111, 1)" }
  ]

  const contactColors: colors[]  = [
    { color: "rgba(37, 0, 111, 1)" },
    { color: "rgba(85, 41, 172, 1)", stop: 40},
    { color: "rgba(97, 255, 181, 1)" }
  ]

  const contactInput: inputField[] = [
    { name: "email", type:"email", placeholder: "Your email address", required: true}, 
    { name: "message", type:"textarea", placeholder: "Your message", required: true }
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
      colors={aboutColors}
      angle={180}
      />

      <Card 
      title="Projects"
      secondTitle="Anki-add"
      content="This project was my favorite!"
      colors={projectsColors}
      angle={0}
      />

      <Card 
      title="Contact Me"
      content="Please feel free to contact me!"
      colors={contactColors}
      angle={0}
      inputData={contactInput}
      />
    </div>
  )
}

export default Content
