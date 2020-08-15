import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link
      to={props.to}
      style={{ color: `black`, boxShadow: `none`, fontFamily: `Montserrat`, fontWeight: `900`}}
      activeStyle={{
        boxShadow: `0 2.5px 0 indigo`
      }}
    >
      {props.children}
    </Link>
  </li>
)

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <div style={{ margin: `2rem auto`, maxWidth: rhythm(30) }}>
          <header style={{ marginBottom: `0rem` }}>
            <Link
              to="/"
              style={{ textShadow: `none`, backgroundImage: `none` }}
            >
              <h3 style={{ display: `inline` }}>GM4Women</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/committees">Committees</ListLink>
              <ListLink to="/blog/">Blog</ListLink>
            </ul>
          </header>
        </div>
        <main>{children}</main>
        <Footer>
          <small>
            &copy; {new Date().getFullYear()}, GM4Women. Built by Adam
          </small>
          {/* Add privacy policy */}
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
