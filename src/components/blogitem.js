import React from "react"
import { Card } from "react-bootstrap"
import SampleImage from "../images/image_002.jpg"
import { Link } from "gatsby"

function BlogItem() {
  return (
    <Card>
      <Card.Img variant="top" src={SampleImage} />
      <Card.Title>ブログタイトル</Card.Title>
      <Card.Text>2020/04/01</Card.Text>
      <Link to="">see more</Link>
    </Card>
  )
}

export default BlogItem
