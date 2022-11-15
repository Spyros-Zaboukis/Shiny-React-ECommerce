import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'

const StyledLink = styled(Link)`
padding: 15px;
color: #8186a0;
text-decoration: none;
font-size: 18px;
${(props) => 
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${Colors.primary};`
}`


 
function Header() {

    return (
        <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/Survey/08">Questionnaire</StyledLink>
            <StyledLink to="/Freelances">Freelances</StyledLink>
            <StyledLink to="/Freelances2" $isFullLink>Freelances2</StyledLink>
        </nav>
    )
}

export default Header