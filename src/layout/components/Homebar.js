import home from "../images/home.png"
import "../css/Navbar.css"
function Homebar({ setProjectSet }) {

    const onClick = () => {
        setProjectSet(0);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <nav>
                {/* {projectset !== 0 && (<div className="nav-bottom" onClick={onClick}>
                    <img src={home} />
                </div>)} */}

                {(<div className="arrowbtn" onClick={scrollToTop}>
                    <a className="abtn">⇡</a>
                </div>)}
            </nav>
        </>
    )
}

export default Homebar;