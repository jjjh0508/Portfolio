import Layout from "../layout/Layout";
import About from "../components/detail/About";
import Skill from "../components/detail/Skill";
import Project from "../components/detail/Project";
import Toegeungil from "../components/project/Toegeungil";
import { useRef, useState, useEffect } from "react";
function MainPage() {
    const scrollRef = useRef([]);
    const [projectset, setProjectSet] = useState(0);

    useEffect(() => {

    })
    return (
        <>
            <Layout scrollRef={scrollRef} projectset={projectset} setProjectSet={setProjectSet} />
            <div className="container">
                {projectset === 0 &&
                    (<>
                        <About ref={scrollRef} />
                        <Skill ref={scrollRef} />
                        <Project ref={scrollRef} setProjectSet={setProjectSet} />
                    </>
                    )
                }
                {(projectset === 1) && <Toegeungil />}
            </div>
        </>
    )
}

export default MainPage;