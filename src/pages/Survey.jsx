import { useParams } from "react-router-dom";

function Survey() {
    const { questionNumber } = useParams();
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <p> La question est le nombre {questionNumber}</p>
        </div>
    )
}

export default Survey;