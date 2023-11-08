import Layout from "../layout/Layout";
import About from "../components/detail/About";
import Skill from "../components/detail/Skill";
import Project from "../components/detail/Project";
import { useRef } from "react";
function MainPage() {
    const scrollRef = useRef([]);

    return (
        <>
            <Layout scrollRef={scrollRef} />
            <div className="container">
                <About ref={scrollRef} />
                <Skill ref={scrollRef} />
                <Project ref={scrollRef} />
            </div>
        </>
    )
}

export default MainPage;