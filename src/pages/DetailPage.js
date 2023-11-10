
import About from "../components/detail/About";
import Skill from "../components/detail/Skill";
import Project from "../components/detail/Project";
function DetailPage({ scrollRef, setProjectSet, outsideToggle }) {

    return (
        <>
            <div className="container" onClick={outsideToggle}>
                <About ref={scrollRef} />
                <Skill ref={scrollRef} />
                <Project ref={scrollRef} setProjectSet={setProjectSet} />
            </div>
        </>
    )
}

export default DetailPage;