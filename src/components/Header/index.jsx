import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Survey/08">Questionnaire</Link>
            <Link to="/Freelances">Freelances</Link>
        </nav>
    )
}

export default Header