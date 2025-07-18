import type { FormEvent } from 'react';
import './Card.css'
import type { color, image, inputField } from './Content';


type ContentProps = {
  title: string
  secondTitle?: string
  content: string
  color: color[]
  angle: number
  inputData?: inputField[]
  image?: image[]
}

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)

  const formValues = {
    email: formData.get('email'),
    message: formData.get('message')
  }
  console.log("Submitted data:", formValues);
}

export default function Card(props: ContentProps) {
  const gradientString = props.color
  .map(stop => stop.stop !== undefined ? `${stop.color} ${stop.stop}%` : stop.color)
  .join(', ');

  const styles: React.CSSProperties = {
    background: `linear-gradient(${props.angle}deg, ${gradientString})`,
  };

  return (
    <div className='card' style={styles}>
      <span className='title'>
        {props.title}
      </span>

      {props.secondTitle && <h2>{props.secondTitle}</h2>}
      
      {props.image?.map((image: image, index: number) => {
        if (image.pos === "top") {
          return (          
            <a href={image.link} key={index}><img src={image.src} alt={image.altText}/></a>
          )
        }
      })}

      <p className='text-content'>
        {props.content}
      </p>


      {props.inputData && 
        <form onSubmit={handleSubmit}>
          {props.inputData?.map((input: inputField, index: number) => {

            if (input.type === "textarea") {
              return (
                <label htmlFor={input.name} key={index}>{input.name}
                  <textarea
                  key={index}
                  id={input.name}
                  name={input.name}
                  required={input.required}
                  rows={5}
                  cols={33}
                  placeholder={input.placeholder}
                  />
                </label>
              )
              } else {
                return (
                  <label htmlFor={input.name} key={index}>{input.name}
                    <input
                    key={index}
                    type={input.type}
                    id={input.name}
                    name={input.name}
                    required={input.required}
                    size={15}
                    placeholder={input.placeholder}
                    />
                  </label>
                )
              }
            }
          )}

          {props.inputData && <button>Submit</button>}
        </form>
      }

      {props.image?.map((image: image, index: number) => {
        if (image.pos === "bottom") {
          return (
            <a href={image.link} key={index}><img src={image.src} alt={image.altText}/></a>
          )
        }
      })}
      

    </div>
  )
}
