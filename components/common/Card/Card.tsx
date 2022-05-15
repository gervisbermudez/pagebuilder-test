import { Card as RB_Card } from "react-bootstrap";

type CardPropsType = {
    title: string,
    text: string,
    imgSrc?: string,
    children?: any
    style? : any,
}

export default function Card({children, style = { width: '18rem' }, text, title, imgSrc}: CardPropsType) {
  return (
    <RB_Card style={style}>
    {imgSrc ? <RB_Card.Img variant="top" src={imgSrc} /> : null}
    <RB_Card.Body>
        <RB_Card.Title>{title}</RB_Card.Title>
        <RB_Card.Text>
        {text}
        </RB_Card.Text>
        {children}
    </RB_Card.Body>
    </RB_Card>
  )
}
