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
        subtitle: 'CEO of Cool Company'
    }
]

class CommitteePage extends React.Component {
  render() {
    const committeeMembers = userData.map((user) => 
        <Person 
            key={user.id} 
            name={user.name}
            subtitle={user.subtitle}
            image={user.image}/>
    )
    const siteTitle = "GM4Women"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
        //   title="Home"
        //   keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {committeeMembers}
      </Layout>
    )
  }
}

export default CommitteePage
