import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Kv from "../components/kv"
import {Container , Row, Col} from "react-bootstrap"
import BlogItem from '../components/blogItem'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          fields {
            slug
          }
          frontmatter{
            date
            title
          }
        }
      }
    }
  }
  `)
  return (
    <Layout>
    <Kv />
    <Container>
      <Row>
        {
          data.allMarkdownRemark.edges.map((edge,index) => {
            return (
              <Col sm={4} key={index}>
              <BlogItem 
                title = {edge.node.frontmatter.title}
                date = {edge.node.frontmatter.date}
                link = {`/blog/${edge.node.fields.slug}`}
              />
            </Col>
            )
          })
        }
      </Row>
    </Container>
  </Layout>
  )
}

export default IndexPage
