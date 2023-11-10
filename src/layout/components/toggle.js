import "../css/Toggle.css"
import { NavLink } from "react-router-dom";
function Toggle({ onClickToggle }) {


    return (
        <>
            <div id="titleBar">
                <a className="toggle" onClick={onClickToggle}></a>
                <span className="title">
                    <NavLink to="/">
                        <div className="myname">jeon ji hwan</div>
                    </NavLink>
                </span>
            </div>
        </>
    )
}

export default Toggle;