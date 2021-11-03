import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <ul>
                <li>
                    <Link to="/Count">Lev1_1: Counter </Link>
                </li>
                <li>
                    <Link to="/Collaps">Lev1_2: State - FAQ</Link>
                </li>

                <li>
                    <Link to="/DarkLight">Lev1_3: Day-Night-Change</Link>
                </li>
                <li>
                    <Link to="/Mood">Lev1_4: Change Mood</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;