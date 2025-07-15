import './Card.css'

type ContentProps = {
  title: string
  content: string
  color1: string
  color2: string
  color3?: string
  stop?: number
  angle: number
}

export default function Card(props: ContentProps) {

  let styles = { 
    background: "red"
  }
  
  if (props.color3) {
    styles = {
      background: `linear-gradient(${props.angle}deg, ${props.color1} 0%, ${props.color2} ${props.stop}%, ${props.color3} 100%)` 
    }
  } else {
    styles = {
      background: `linear-gradient(${props.angle}deg, ${props.color1} 0%, ${props.color2} 100%)` 
    }
  }

  return (
    <div className='card' style={styles}>
      <span className='title'>{props.title}</span>
      <p className='text-content'> 
        {props.content}
      </p>
    </div>
  )
}
