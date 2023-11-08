import profile from "../images/jihwan.jpg"
import "../css/Profile.css"
import "../css/Layout.css"
import github from "../images/github.png"
import Navber from "./Navbar"
function Profile({ scrollRef, isToggle }) {
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
                    <Navber scrollRef={scrollRef} />
                </object>
            </aside>
        </>
    )
}

export default Profile;