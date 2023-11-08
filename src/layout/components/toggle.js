import "../css/Toggle.css"
function Toggle({ onClickToggle }) {


    return (
        <>
            <div id="titleBar">
                <a className="toggle" onClick={onClickToggle}></a>
                <span className="title">
                    <div>jeon ji hwan</div>
                </span>
            </div>
        </>
    )
}

export default Toggle;