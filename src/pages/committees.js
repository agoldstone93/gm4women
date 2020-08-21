import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Person from "../components/person"
import pic from "../../content/assets/profile-pic.jpg"

const userData = [
  {
    id: 1,
    name: "Reet Dhallu",
    image: pic,
    subtitle: "Greater Manchester Chamber of Commerce",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  },
  {
    id: 2,
    name: "Gail Heath",
    image: pic,
    subtitle: "CEO Pankhurst Trust",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  },
  {
    id: 3,
    name: "Prof Francesca Gains",
    image: pic,
    subtitle: "University of Manchester",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  },
  {
    id: 4,
    name: "Sofia Higgins",
    image: pic,
    subtitle: "Greater Manchester BAME Women's Third Sector Network",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  },
  {
    id: 5,
    name: "Eve Holt",
    image: pic,
    subtitle: "Councillor Manchester City Council, GMMoving Strategic Director",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  },
  {
    id: 6,
    name: "Gemma Nash",
    image: pic,
    subtitle: "Artist & Community Co-Investigator",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  },
  {
    id: 7,
    name: "Caroline Pankhurst",
    image: pic,
    subtitle: "Founder of Be Braver",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  },
  {
    id: 8,
    name: "Claire Pattison",
    image: pic,
    subtitle: "Sylvia Pankhurst Gender & Diversity Research Centre, MMU",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  },
  {
    id: 9,
    name: "Dr Helen Pankhurst",
    image: pic,
    subtitle: "Activist, Author, MMU",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  },
  {
    id: 10,
    name: "Dr Sarah Mohammad-Qureshi",
    image: pic,
    subtitle:
      "Charter Marks' Coordinator (Gender and Race) EDI Advisor, University of Manchester",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  },
  {
    id: 11,
    name: "Francesca Raine",
    image: pic,
    subtitle:
      "Fundraising & Development Manager, Pankhurst Trust",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  },
  {
    id: 12,
    name: "Prof Jill Rubery",
    image: pic,
    subtitle:
      "University of Manchester & British Academy Fellow",
    links: {
      twitter: "http://www.twitter.com",
      linkedin: "http://www.linkedin.com",
      website: "http://www.google.com",
    },
  }
]

class CommitteePage extends React.Component {
  render() {
    const committeeMembers = userData.map(user => (
      <Person
        key={user.id}
        name={user.name}
        subtitle={user.subtitle}
        image={user.image}
        twitter={user.links.twitter}
        linkedin={user.links.linkedin}
      />
    ))
    const siteTitle = "GM4Women"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
        //   title="Home"
        //   keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Steering Committee</h1>
        <p>
          Our steering committee oversees all of the work that we do at
          GM4Women. They are responsible for x, y and z.
        </p>
        <div
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-evenly`,
          }}
        >
          {committeeMembers}
        </div>
      </Layout>
    )
  }
}

export default CommitteePage
