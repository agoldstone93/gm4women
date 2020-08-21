import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import logo from "../../content/assets/GM4women2028_Logo.png"
import { Twitter } from '@styled-icons/boxicons-logos/'
import { Mail } from '@styled-icons/ionicons-sharp/'

const GlobalStyle = createGlobalStyle`
  body, html {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`
const StyledTwitter = styled(Twitter) `
  color: black;
  height: 28px;
`
const StyledMail = styled(Mail)`
  height: 25px;
  color: black;
`
const ListLink = props => (
  <li style={{ margin: `0` }}>
    <Link
      to={props.to}
      style={{
        color: `black`,
        boxShadow: `none`,
        fontFamily: `Montserrat`,
        fontWeight: `900`,
      }}
      activeStyle={{
        boxShadow: `0 2.5px 0 indigo`,
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
        <GlobalStyle />
        <div style={{ margin: `0.5rem auto`, padding: `0 20px`, maxWidth: `1000px` }}>
          <header style={{ marginBottom: `0.5rem` }}>
            <ul style={{ listStyle: `none`, margin: `0`, display: `grid`, gridTemplateColumns: `1fr repeat(5, fit-content(20px))`, gap: `20px`, alignItems: `center`}}>
              <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, boxShadow: `none` }}>
                <img src={logo} alt={"GM4Women logo"} style={{ display: `inline`, width: `150px`, padding: `0`, margin: `0` }} />
              </Link>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/committees">Committees</ListLink>
              <ListLink to="/blog/">Blog</ListLink>
              <li style={{ margin: `0` }}><a href={"http://www.twitter.com/gm4women2028"} aria-label="Twitter" style={{ boxShadow: `none` }}><StyledTwitter /></a></li>
              <li style={{ margin: `0` }}><a href={"mailto:gm4women2028@gmail.com"} aria-label="Email" style={{ boxShadow: `none` }}><StyledMail /></a></li>
            </ul>
          </header>
          <main>{children}</main>
        </div>

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

export default Layout
