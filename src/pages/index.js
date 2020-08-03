import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Graph from "../components/graph"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "GM4Women"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> this is a picture*/}
        <h1>
          We want gender equality by the centenary of women getting the vote, 2028
        </h1>
        <h3>
          We collect data to produce our annual scorecard, which shows how equal society is for women in Greater Manchester
        </h3>
        <p>
          We focus collecting and reporting in 5 main areas: Education, society, health and culture, participation and employment.
        </p>
        <p>We recruit local women's organisations to participate so we accurate information.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
        <Graph/>
      </Layout>
    )
  }
}

export default IndexPage
