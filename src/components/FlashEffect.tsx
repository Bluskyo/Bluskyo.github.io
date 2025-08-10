import './FlashEffect.css'

type text = {
  text: string
}

export default function FlashEffect(props: text) {
  return (
    <div className="effect-container">
        <span className={props.text === "" ? "" : "flash-text"}>
            {props.text}
        </span>
    </div>
  )
}
