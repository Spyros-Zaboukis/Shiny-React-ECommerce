import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'


const CardLabel = styled.span`
color: #5843e4;
font-size: 1.6rem;
font-weight: bold;
margin-top: 0.8rem;
margin-bottom: 2rem;
`

const CardImage = styled.img`
height: 60%;
width: 60%;
border-radius: 50%;
margin-left: 4.1rem;
`


const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${Colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
const StyledSpan= styled.span`
font-size: 1.2rem;
text-align: center;
margin-top: 1.4rem;
`

function Card({ label, title, picture }) {

    return (
            <CardWrapper>
                <CardLabel>{label}</CardLabel>
                <CardImage src={picture} alt="freelance" />
                <StyledSpan>{title}</StyledSpan>
            </CardWrapper>
    )
}


Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired ,
    picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
}

export default Card