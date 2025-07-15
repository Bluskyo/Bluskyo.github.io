import Card from "./Card"
import './Content.css'

function Content() {
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
      color1="rgba(71, 0, 213, 1)"
      color2="rgba(37, 0, 111, 1)"
      angle={180}
      />
      <Card 
      title="Projects"
      content="This project was my favorite!"
      color1="rgba(213, 0, 110, 1)"
      color2="rgba(37, 0, 111, 1)"
      angle={0}
      />
      <Card 
      title="Contact Me"
      content="Please feel free to contact me!"
      color1="rgba(37, 0, 111, 1)"
      color2="rgba(85, 41, 172, 1)"
      color3="rgba(97, 255, 181, 1)"
      angle={0}
      stop={41}
      />
    </div>
  )
}

export default Content
