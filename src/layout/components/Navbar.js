import "../css/Navbar.css"
import { useLocation } from "react-router-dom";
function Navber() {
    const location = useLocation();
    return (
        <nav id="nav">
            <ul>
                <li>
                    <a href='#about' className={(location.hash) == "#about" ? "navActive" : "navUnActive"}>
                        About
                    </a>
                </li>
                <li>
                    <a href='#skill' className={(location.hash) == "#skill" ? "navActive" : "navUnActive"}>
                        SkillSet
                    </a>
                </li>
                <li>
                    <a href='#project' className={(location.hash) == "#project" ? "navActive" : "navUnActive"}>
                        Project
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navber;