import profile from "../images/jihwan.jpg"
import "../css/Profile.css"
import github from "../images/github.png"
function Profile() {

    return (
        <>
            <span class="image profile">
                <img className="profileImage" src={profile} />
            </span>
            <h1>
                전지환
            </h1>
            <a href="https://github.com/jjjh0508" target="_blank">
                <img className="icon" src={github} />
            </a>
        </>
    )
}

export default Profile;