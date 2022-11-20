import Illustration from './../../assets/home-illustration.svg'
import styled from 'styled-components'
import colors from './../../utils/style/colors'

const FirstBlockHome = styled.div`
display: flex;
background-color: ${colors.backgroundLight};
padding-top: 8rem;
margin-top: -8rem;
padding-bottom: 3rem;
`
const StyledImage= styled.img`
width: 36rem;
margin-left : 8rem;
`
const StyledTitle= styled.h1`
margin-left: 6rem;
margin-top: 8rem;
font-size: 3rem;
`
const StyledButton = styled.button`
padding: 15px;
color: #8186a0;
text-decoration: none;
font-size: 18px;
color: white; 
border-radius: 30px; 
background-color: ${colors.primary};
margin-left: 9rem;
margin-top: 2rem;
`

function Home() {
  return (

      <FirstBlockHome>

      <StyledTitle>
        Repérez vos besoins,<br/> 
        on s’occupe du reste,<br/> 
        avec les meilleurs <br/>
        talents
        <br/>
        <StyledButton>Faire le test</StyledButton>
      </StyledTitle>
      
      
      <StyledImage src={Illustration} alt="image de fond Shiny"/>

    </FirstBlockHome>
  );
}

export default Home;