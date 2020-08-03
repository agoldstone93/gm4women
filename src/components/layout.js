import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    
    return (
      <Wrapper>
        <div style={{ margin: `3rem auto`, maxWidth: rhythm(24), padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`}}>
          <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <h3 style={{ display: `inline` }}>{title}</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/blog/">Blog</ListLink>
            </ul>
          </header>
          <main>{children}</main>
        </div>
        <Footer>
          <small>&copy; {new Date().getFullYear()}, GM4Women. Built by Adam</small>
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
