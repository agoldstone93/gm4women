import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Person from "../components/person"
import pic from '../../content/assets/profile-pic.jpg'

const userData = [
    {
        id: 1,
        name: 'Joe Bloggs',
        image: pic,
        subtitle: 'CEO of Cool Company',
        links: {
          twitter: "http://www.twitter.com",
          linkedin: "http://www.linkedin.com",
          website: "http://www.google.com"
        }
    }
]

class CommitteePage extends React.Component {
  render() {
    const committeeMembers = userData.map((user) => 
        <Person 
            key={user.id} 
            name={user.name}
            subtitle={user.subtitle}
            image={user.image}
            twitter={user.links.twitter}
            linkedin={user.links.linkedin}/>
    )
    const siteTitle = "GM4Women"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
        //   title="Home"
        //   keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Steering Committee</h1>
        <p>Our steering committee oversees all of the work that we do at GM4Women. They are responsible for x, y and z.</p>
        {committeeMembers}
      </Layout>
    )
  }
}

export default CommitteePage
