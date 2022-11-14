import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Survey/42">Questionnaire</Link>
        </nav>
    )
}

export default Header