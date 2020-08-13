import React from "react"
import styled from "styled-components"
import {LinkedinSquare} from '@styled-icons/boxicons-logos/'
import {Twitter} from '@styled-icons/boxicons-logos/'

const CommitteeMember = styled.div `
    background: lightgrey;
    display: grid;
    justify-items: center;
    padding: 10px;
    max-width: 300px;
    margin: 10px;
`
const ProfilePic = styled.img `
    object-fit: cover;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
`
const PersonName = styled.h3 `
    margin: 5px 0px;
`
const PersonTitle = styled.p `
    margin: 5px 0px;
`
const LinksDiv = styled.div `
    display: flex;
`
const LinkUrl = styled.a `
    text-decoration: none;
`
const StyledLinkedin = styled(LinkedinSquare)`
    color: purple;
    height: 30px;
    text-decoration: none;
`
const StyledTwitter = styled(Twitter) `
    color: purple;
    height: 30px;
`

export default function Person (props) {
    return (  
        <CommitteeMember>
            <ProfilePic src={props.image} alt="Committee Member"/>
            <PersonName>{props.name}</PersonName>
            <PersonTitle>{props.subtitle}</PersonTitle>
            <LinksDiv>
                <LinkUrl href={props.linkedin}>
                    <StyledLinkedin />
                </LinkUrl>
                <LinkUrl href={props.twitter}>
                    <StyledTwitter />
                </LinkUrl>
            </LinksDiv>
        </CommitteeMember>
    )
}