import type { FormEvent } from 'react';
import './Card.css'

import type { colors, inputField } from './Content';

type ContentProps = {
  title: string
  secondTitle?: string
  content: string
  colors: colors[]
  angle: number
  inputData?: inputField[]
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
  const gradientString = props.colors
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
      
      <p className='text-content'>
        {props.content}
      </p>

      <form onSubmit={handleSubmit}>
        {props.inputData?.map((input: inputField, index: number) => {
          switch (input.type) {
            case "email":
              return (
                <input
                type={input.type}
                id={input.name}
                name={input.name}
                required={input.required}
                size={12}
                placeholder={input.placeholder}
                />
              )
            case "textarea":
              return (
                <textarea
                id={input.name}
                name={input.name}
                required={input.required}
                rows={5}
                cols={33}
                placeholder={input.placeholder}
                />
              )
          }
        })}

        {props.inputData && <button>Submit</button>}
      </form>

    </div>
  )
}
