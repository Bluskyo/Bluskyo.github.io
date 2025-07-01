import Card from "./Card"
import './Content.css'

function Content() {
  return (
    <div className="content-grid">
      <Card 
      title="About" 
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel condimentum enim, eu tempus urna. Integer varius leo ut fringilla ullamcorper. Nam tellus quam, vehicula ut rhoncus in, consectetur ac ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel condimentum enim, eu tempus urna. Integer varius leo ut fringilla ullamcorper. Nam tellus quam, vehicula ut rhoncus in, consectetur ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel condimentum enim, eu tempus urna. Integer varius leo ut fringilla ullamcorper. Nam tellus quam, vehicula ut rhoncus in, consectetur ac ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel condimentum enim, eu tempus urna. Integer varius leo ut fringilla ullamcorper. Nam tellus quam, vehicula ut rhoncus in, consectetur ac ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel condimentum enim, eu tempus urna. Integer varius leo ut fringilla ullamcorper. Nam tellus quam, vehicula ut rhoncus in, consectetur ac ante."
      />
      <Card 
      title="Projects"
      content="This project was my favorite!"
      />
      <Card 
      title="Contact Me"
      content="Please feel free to contact me!"
      />
    </div>
  )
}

export default Content
