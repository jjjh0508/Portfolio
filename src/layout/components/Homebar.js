import home from "../images/home.png"
import "../css/Navbar.css"
function Homebar({ projectset, setProjectSet }) {

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
                {projectset !== 0 && (<div className="nav-bottom" onClick={onClick}>
                    <img src={home} />
                </div>)}

                {projectset === 0 && (<div className="arrowbtn" onClick={scrollToTop}>
                    <a>⇡</a>
                </div>)}
            </nav>
        </>
    )
}

export default Homebar;