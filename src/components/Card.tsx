import type { FormEvent } from 'react';
import './Card.css'
import type { color, image, inputField } from './Content';
import Carousel from './Carousel';
import { toast } from 'sonner'

type ContentProps = {
  title: string
  content: string
  color: color[]
  gradientAngle: number
  inputData?: inputField[]
  image?: image[]
  carousel?: boolean
}

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  formData.append("access_key", "cdb30b76-3cf2-46b3-941d-ba93d6c6cf80");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  toast.promise(res, {
    loading: 'Sending...',
    success: 'Message has been sent!',
    error: 'Failed to send message! Please try again!',
  });
}


export default function Card(props: ContentProps) {
  const gradientString = props.color
  .map(stop => stop.stop !== undefined ? `${stop.color} ${stop.stop}%` : stop.color)
  .join(', ');

  const styles: React.CSSProperties = {
    background: `linear-gradient(${props.gradientAngle}deg, ${gradientString})`
  };

  return (
    <div className='card' id={props.title} style={styles}>
      <span className='title'>
        {props.title}
      </span>

      {props.image?.map((image: image, index: number) => {
        if (image.pos === "top") {
          return (          
            <img className='headshot' key={index} src={image.src} alt={image.altText}/>
          )
        }
      })}

      <p className='text-content'>
        {props.content}
      </p>

      {props.carousel &&
        <div className='carousel'>
          <Carousel
            baseWidth={300}
            autoplay={true}
            autoplayDelay={4000}
            pauseOnHover={true}
            loop={false}
            round={false}
          />
        </div>
      }

      {props.inputData && 
        <form onSubmit={handleSubmit} id='contact-form'>
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
                  cols={20}
                  placeholder={input.placeholder}
                  />
                </label>
              )
              } else {
                return (
                  <div className='input-field' key={index}>
                    <label htmlFor={input.name} key={index}>{input.name}
                      <input
                      key={index}
                      type={input.type}
                      id={input.name}
                      name={input.name}
                      required={input.required}
                      placeholder={input.placeholder}
                      />
                    </label>
                  </div>

                )
              }
            }
          )}
          <div className='submit-container'>
            <button className="submit-button">Send in</button>
          </div>

        </form>
      }

      {props.image && <div className='logos'>
      {props.image?.map((image: image, index: number) => {
        if (image.pos === "bottom") {
          return (
            <a href={image.link} key={index} target="_blank"><img className='logo-picture' src={image.src} alt={image.altText}/></a>
          )
        }
      })}
    </div>}

    </div>
  )
}
