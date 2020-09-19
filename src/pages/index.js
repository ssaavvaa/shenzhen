import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopSection from "../components/main-page/top-section"
import Services from "../components/main-page/services"
import Masseuses from "../components/main-page/masseuses"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <TopSection />
    <Services />
    <Masseuses data={data} />
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    allMasseusesJson {
      edges {
        node {
          fields {
            slug
          }
          key
          name
          height
          image {
            childImageSharp {
              fluid(srcSetBreakpoints: [300, 500, 800]) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
