import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import css from "./masseuses.module.scss"

export default ({ data }) => {
  const { edges } = data.allMasseusesJson

  return (
    <section className={`container ${css.container_masseuses}`}>
      <h2>NURU MASSAGE BODY RUBS AVAILABLE TODAY</h2>
      <ul className={css.wrapper}>
        {edges.map(({ node }) => (
          <li key={node.key}>
            <Link to={node.fields.slug}>
              <Img
                objectFit="cover"
                objectPosition="10% 10%"
                alt={node.name}
                fluid={node.image.childImageSharp.fluid}
              />
              <div>
                <p>{node.name}</p>
                <p>Visit page</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
