import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Graph from "../components/graph"
interface IChartJsPluginBarchartBackgroundOptions {
  color: #f3f3f3;
  mode: 'odd';
  axis: 'category';
}
const StyledText = styled.h1 `
  text-decoration: underline;
  text-decoration-color: green;
  display: inline;
  font-size: 10vh;
`
const GraphTitles = styled.h3 `
  font-size: 20px;
  margin-top: 5px;
  padding-bottom: 20px;
`

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div style={{height: `80vh`, width: `100vh`, margin: `0`, padding: `0`, backgroundColor: `lightgrey`}}>
          <h1 style={{fontSize: `10vh`}}>
            We want <StyledText>gender equality</StyledText> by the centenary of women getting the vote, <StyledText>2028</StyledText>
          </h1>
        </div>
        <h3>
          We collect data to produce our annual scorecard, which shows how equal society is for women in Greater Manchester
        </h3>
        <p>
          We focus collecting and reporting in 5 main areas: education, society, health and culture, participation and employment.
        </p>
        <p>We recruit local women's organisations to participate so we have accurate information.
        </p>
        <div >
          <h1>Scorecard</h1>
          <p>Our scorecard is the collection of data in each area, measured each year. The data is shown below.</p>
          <div style={{display: `grid`,  gridTemplateColumns: `1fr 1fr 1fr 1fr 1fr`, justifyItems: `center`}}>
            <GraphTitles>Employment</GraphTitles>
            <GraphTitles>Safety</GraphTitles>
            <GraphTitles>Participation</GraphTitles>
            <GraphTitles>Education</GraphTitles>
            <GraphTitles>Culture</GraphTitles>
          </div>
          <Graph />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
