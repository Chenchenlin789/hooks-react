import { Link } from "react-router-dom"
import "../App.css"
const Home = () => {
    return (
        <section className="Home">
            <h1>ReactJS: Hooks</h1>

            <div>
                <Link to="/lev1-1">Lev1_1: Counter</Link>
                <Link to="/lev1-2">Lev1_2: State - FAQ</Link>
                <Link to="/lev1-3">Lev1_3: Day-Night-Change</Link>
                <Link to="/lev1-4">Lev1_4: Change-Mood</Link>

            </div>
        </section>
    );
}

export default Home;