import React from "react"
import { rhythm } from "../utils/typography"

export default function Person (props) {
    const imageCropper = {
        width: 120,
        height: 120,
        position: "relative",
        overflow: "hidden",
        borderRadius: "50%"
    }
    return (
        <div>
            <div style={imageCropper}>
                <img src={props.image} alt="Committee Member"/>
            </div>
            <p style={{marginTop: rhythm(1 / 4), marginBottom: rhythm(1 / 4)}}>{props.name}</p>
            <p>{props.subtitle}</p>
        </div>
    )
}