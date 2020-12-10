import React from "react"
import { Card } from "react-bootstrap"
import SampleImage from "../images/image_002.jpg"
import { Link } from "gatsby"

function BlogItem({title, date}) {
  return (
    <Card>
      <Card.Img variant="top" src={SampleImage} />
      <Card.Title>{title}</Card.Title>
      <Card.Text>{date}</Card.Text>
      <Link to="">see more</Link>
    </Card>
  )
}

export default BlogItem
