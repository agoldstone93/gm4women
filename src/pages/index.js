import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Graph from "../components/graph"

const FullWidthColor = styled.div`
  margin: 0 -9999rem;
  padding: 0.25rem 9999rem;
  background: lightgrey;
`
const TopFullWidthColor = styled(FullWidthColor)`
  height: 90vh;
`
const BigText = styled.h1`
  display: inline;
  font-size: 10vh;
`
const StyledBigText = styled(BigText)`
  text-decoration: underline;
  text-decoration-color: green;
`

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <TopFullWidthColor>
          <BigText>
            We want <StyledBigText>gender equality</StyledBigText> by the
            centenary of women getting the vote,{" "}
            <StyledBigText>2028</StyledBigText>
          </BigText>
        </TopFullWidthColor>

        <h1>
          We collect data to produce our annual scorecard, which shows how equal
          society is for women in Greater Manchester
        </h1>
        <h1 style={{fontSize: `20px`}}>
          We focus collecting and reporting in 5 main areas: education, society,
          health and culture, participation and employment.
        </h1>
        <h1 style={{fontSize: `20px`}}>
          We recruit local women's organisations to participate so we have
          accurate information.
        </h1>
        <h1>Who we are</h1>
        <p>
          Led by Helen Pankhurst, we are a coalition of change-makers committed
          to seeing a better future for the women of Manchester. ​​
        </p>
        <p>
          As a region that has always led the way and flown the flag for women’s
          rights, our first initiative, the Pankhurst-Fawcett Scorecard will
          once again see Greater Manchester leading the charge to bring progress
          and accountability for women’s rights.
        </p>

        <FullWidthColor>
          <h1>Scorecard</h1>
          <p>
            Our scorecard is named after Emmeline Pankhurst and Millicent
            Fawcett, two iconic figures who were among the first leaders of the
            campaign for women’s suffrage. ​
          </p>
          <p>
            The scorecard will be used to conduct annual reviews of gender
            equality data with the goal of achieving equality across all areas
            by 2028 - the centenary of equal franchise. ​
          </p>
          <Graph />
        </FullWidthColor>
        {/* Flickity or siema - carousel with quotes */}
        {/* Add supporters list */}
      </Layout>
    )
  }
}

export default IndexPage
