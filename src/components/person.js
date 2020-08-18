import React from "react"
import styled from "styled-components"
import {LinkedinSquare} from '@styled-icons/boxicons-logos/'
import {Twitter} from '@styled-icons/boxicons-logos/'

const CommitteeMember = styled.div `
    background: lightgrey;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4fr 1fr 1fr 1fr;
    padding: 10px;
    width: 300px;
    border: solid 1px;
    justify-items: center;
`
const ProfilePic = styled.img `
    object-fit: cover;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin-bottom: 1em;
`
const PersonName = styled.h3 `
    font-size: 1em;
    padding: 0;
    margin: 0;
`
const PersonTitle = styled.p `
    font-size: 0.8em;
    padding: 0;
    margin: 0;
`
const LinksDiv = styled.div `
    display: flex;
    padding: 0;
    margin: 0;
`
const LinkUrl = styled.a `
    box-shadow: none; 
`
const StyledLinkedin = styled(LinkedinSquare)`
    color: indigo;
    height: 30px;
`
const StyledTwitter = styled(Twitter) `
    color: indigo;
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