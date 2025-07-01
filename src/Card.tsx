import './Card.css'

type ContentProps = {
  title: string
  content: string
}

export default function Card(props: ContentProps) {
  return (
    <div className='card'>
      <span className='title'>{props.title}</span>
      <p className='text-content'> 
        {props.content}
      </p>
    </div>
  )
}
