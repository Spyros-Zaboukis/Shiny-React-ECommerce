import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Logo from './../../assets/dark-logo.png'

const StyledLink = styled(Link)`
padding: 15px;
color: #8186a0;
text-decoration: none;
font-size: 18px;
${(props) => 
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`
}`


const StyledNav = styled.nav`
height : 3rem;
margin-top: 2rem;
text-align: right;
margin-left: 48rem;
`

const StyledLogo = styled.img`
transform: rotate(-90deg);
padding-left: 10rem

`

const StyledTestClass = styled.div`
display: flex;
`
function Header() {

    return (
        <StyledTestClass>
            <StyledLogo src={Logo} alt="logo dark"/>
            <StyledNav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/Survey/1">Questionnaire</StyledLink>
                <StyledLink to="/Freelances">Freelances</StyledLink>
                <StyledLink to="/error404" $isFullLink>Error 404</StyledLink>
            </StyledNav>
        </StyledTestClass>
    )
}

export default Header