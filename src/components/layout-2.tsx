/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import './layout.css';

//import Header from "./header"
//import "./layout.css"

const Layout = ({ children }) => {
  // eslint-disable-next-line
  const data = useStaticQuery(graphql`
    query SiteTitleNewQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <div
        style={{
          margin: 0,
          padding: 0
        }}
      >
        <main>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Jamal Dahbur
        </footer>
      </div>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout