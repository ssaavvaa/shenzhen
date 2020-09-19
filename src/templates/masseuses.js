import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function masseusePage({ data }) {
  console.log(data)
  const masseuse = data.masseusesJson
  return (
    <Layout>
      <div>
        <h1>{masseuse.name}</h1>
      </div>
    </Layout>
  )
}
export const masseuseQuery = graphql`
  query($slug: String!) {
    masseusesJson(fields: { slug: { eq: $slug } }) {
      name
    }
  }
`
