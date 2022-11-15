import page404 from '../../assets/404.svg' 
import styled from 'styled-components'
import Colors from './../../utils/style/Colors'


const StyledImage= styled.img`
margin-left : 18rem;
`
const StyledP = styled.p`
text-align: center;
font-size: 3rem;
margin-bottom: 2rem;
margin-top: -8rem;
padding-top: 2rem;
`
const StyledP2 = styled.p`
text-align: center;
font-size: 1.8rem;
margin-bottom: 1.2rem;
`

const StyledBody= styled.div`
background-color: ${Colors.backgroundLight};
padding-bottom: 2rem;
`


function Error() {
    return (
        <StyledBody>
            <StyledP>Oups...</StyledP>
            <StyledImage src={page404} alt='photo page 404'/>
            <StyledP2>Il semblerait qu’il y ait un problème</StyledP2>
        </StyledBody>
    )
}
 
export default Error