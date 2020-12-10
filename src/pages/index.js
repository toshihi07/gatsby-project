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
          frontmatter{
            title,
            date,
          }
        }
      }
    }
  }
  `)
  console.log('data:',data);
  return (
    <Layout>
    <Kv />
    <Container>
      <Row>
        {
          data.allMarkdownRemark.edges.map((edge,index) => {
            return (
              <Col sm={4} ley={index}>
              <BlogItem 
                title = {edge.node.frontmatter.title}
                date = {edge.node.frontmatter.date}
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
