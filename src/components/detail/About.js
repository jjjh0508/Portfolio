import "../css/About.css"
import { forwardRef } from "react";
const About = forwardRef((props, ref) => {

    return (
        <>
            <section ref={reviewRef => (ref.current[0] = reviewRef)} id="about" className="about page about-section">
                <div className="about-board">
                    <div class="about-intro">
                        <div className="about-pageTitle">About Me</div>
                        <h1>안녕하세요. <br />
                            끈기 있고 꾸준히 발전하는 신입 개발자  <br />
                            전지환입니다.</h1>
                        <div className="keyword">
                            <h3>키워드</h3>
                            <div>
                                <h4>#끈기</h4>
                                <h4>#꾸준히</h4>
                                <h4>#발전</h4>
                                <h4>#할 수 있다!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
});

export default About;