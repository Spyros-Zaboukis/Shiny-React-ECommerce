import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const preventQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt -1;
    const nextQuestionNumber = questionNumberInt +1;
    
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <p> La question numéro : {questionNumber}</p>
            <p>
                <Link to={`/Survey/${preventQuestionNumber}`}>
                    <button>Précédent</button>
                </Link>

               {questionNumberInt === 10 ? 
               (
                <Link to='/Result'>Résultats</Link> 
               )
               :
               ( 
                <Link to={`/Survey/${nextQuestionNumber}`}>
                <button>Suivant</button>
            </Link>
               )}

            </p>
        </div>
    )
}

export default Survey;