import React from "react"

const user = {
    name: 'Joe Bloggs',
    image: './assets/',
    subtitle: 'CEO of Cool Company'
}

export default function Committee(user) {
    return (
        <div>
            <img src={user.image}/>
            <h1>{user.name}</h1>
            <p>{user.subtitle}</p>
        </div>
    )
}