import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Phone from "../svg/phone.svg"
import css from "./header.module.scss"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <header className={css.header}>
      <div>
        <Link to="/">
          <Img fluid={data.logo.childImageSharp.fluid} />
        </Link>

        <nav className={css.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <div className={css.phone}>
          <Phone />
          <a href="tel:+9492326088">+1(949)-232-6088</a>
        </div>
      </div>
    </header>
  )
}
