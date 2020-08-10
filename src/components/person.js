import React from "react"
import styled from "styled-components"

const CommitteeMember = styled.div `
    background: grey;
    display: grid;
`
const ProfilePic = styled.img `
    object-fit: cover;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin-bottom: 0px;
`
const PersonName = styled.h3 `
    margin: 5px 0px;
`
const PersonTitle = styled.p `
    margin: 5px 0px;
`
const SocialMedia = styled.div``

export default function Person (props) {
    return (
        <CommitteeMember>
            <ProfilePic src={props.image} alt="Committee Member"/>
            <PersonName>{props.name}</PersonName>
            <PersonTitle>{props.subtitle}</PersonTitle>
            <SocialMedia></SocialMedia>
        </CommitteeMember>
    )
}