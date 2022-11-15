import Card from '../../components/Card'
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`
const StyledBody= styled.div`
width:60%;
margin-left: 20%;
`

const StyledH1= styled.h1`
text-align: center;
margin-top: -6rem;
margin-bottom: 3rem;
font-size: 2.4rem;
`

const StyledP= styled.p`
font-size: 1.2rem;
text-align: center;
color: ${Colors.secondary};
margin-bottom: 4rem;
`


function Freelances(){
 
const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },    {
        name: 'Cedric Binche',
        jobTitle: 'Développeur Fullstack',
    },
]
return (
    <StyledBody>
        <StyledH1>Trouvez votre prestataire</StyledH1>
        <StyledP>Chez Shiny nous réunissons les meilleurs profils pour vous.</StyledP>
        <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
            <Card
                key={`${profile.name}-${index}`}
                label={profile.jobTitle}
                picture={profile.picture}
                title={profile.name}
            />
        ))}
        </CardsContainer>
    </StyledBody>
)
}

export default Freelances