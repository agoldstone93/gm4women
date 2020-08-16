import React from "react"
import styled from "styled-components"

export default function Supporters () {
    const supportersItems = supportersList.map((supporter) =>
        <li key >
            <a href={supporter.link}>
                <img src={supporter.image} alt={supporter.name}/>
            </a>
        </li>
    );
    return (
        <div style={{BackgroundColor: `grey`}}>
            {supportersItems}
        </div>
    )
}

const supportersList = [
    {
        id: '1',
        name: "Google",
        image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        link: 'http://www.google.com'
    }
]