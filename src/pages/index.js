import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopSection from "../components/main-page/top-section"
import Services from "../components/main-page/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopSection />
    <Services />
  </Layout>
)

export default IndexPage
