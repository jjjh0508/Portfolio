import profile from "../images/jihwan.jpg"
import "../css/Profile.css"
import "../css/Layout.css"
import github from "../images/github.png"
import Navber from "./Navbar"
import { useLocation, NavLink } from "react-router-dom";
function Profile({ scrollRef, isToggle }) {
    const NavLocation = useLocation().pathname;
    return (
        <>
            <aside className={isToggle ? "asideOn" : "aside"} id="aside">
                <object>
                    <img class="profile-img" src={profile} />
                    <h3>전지환</h3>
                    <div>
                        {/* github */}
                        <a href="https://github.com/jjjh0508" target="_blank">
                            <img src={github} />
                        </a>

                    </div>
                    {NavLocation === "/" && <Navber scrollRef={scrollRef} />}
                    {(NavLocation !== "/") &&
                        (

                            < NavLink to="/ " className="navUnActive" >
                                Home
                            </NavLink>
                        )}
                </object>
            </aside>
        </>
    )
}

export default Profile;