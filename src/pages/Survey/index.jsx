import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'


const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

function Survey() {

    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt -1;
    const nextQuestionNumber = questionNumberInt +1;
    const [surveyData , setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    

        //FUNCTION WITH ASYNCH / AWAIT

        async function fetchData() {
            try {
              setDataLoading(true)

              const response = await fetch(`http://localhost:8000/survey`)
              const { surveyData } = await response.json()
              setSurveyData(surveyData)

              setDataLoading(false)
            } catch (error) {
          console.log('===== error =====', error)
            }
          }    


          useEffect(() => {
            fetchData()
            }, [])

            
            
     return (
        <SurveyContainer>
          <QuestionTitle>Question {questionNumber}</QuestionTitle>
          {isDataLoading ? (
              <Loader />
          ) : (
              <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
          )}      
          <LinkWrapper>
              <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>

              {surveyData[questionNumberInt + 1] ? (
                  
                  <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
              ) : (
                  <Link to="/results">Résultats</Link>
              )}
          </LinkWrapper>

        </SurveyContainer>
    )
}

export default Survey