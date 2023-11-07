import "../css/Skill.css";
import { forwardRef } from "react";
const Skill = forwardRef((props, ref) => {

    return (
        <>
            <section ref={reviewRef => (ref.current[1] = reviewRef)} id="skill" className="skill page project-section">
                <div className="skill skill-section">
                    <div>
                        <div className="skillTitle">SkillSet</div>
                        <ul className="skill-list">
                            <li className="skill-flex">
                                <div>
                                    <h4>JAVA</h4>
                                    <h5>Spring, JPA, JSP, Thymeleaf, Rest Api</h5>
                                </div>
                                <span className="hover-text">
                                    <p>Java 기본 문법 이해, Spring Framework를 활용한 웹사이트 개발</p>
                                    <p>mvc패턴을 사용하여 사용자 인터페이스로부터 비즈니스 로직을 분리 </p>
                                    <p>Thymeleaf를 활용하여 백엔드 서버에서 HTML을 동적 렌더링한 알고레 프로젝트</p>
                                    <p>Rest  Api 디자인규칙을 적용하여 Api설계 퇴근길 프로젝트 </p>
                                </span>
                            </li>
                            <li className="skill-flex">
                                <div>
                                    <h4>Database</h4>
                                    <h5>Oracle, MySql,(java- JDBC, MyBatis)</h5>
                                </div>
                                <span className="hover-text">
                                    <p>JDBC 및 Mybatis를 통한 db연결 및 데이터 전달</p>
                                    <p>ANSI SQL을 활용하여 데이터베이스 접근</p>
                                </span>
                            </li>
                            <li className="skill-flex">
                                <div>
                                    <h4>React</h4>
                                    <h5>JavaScript, HTML, CSS</h5>
                                </div>
                                <span class="hover-text">
                                    <p>Thymeleaf 템플릿 엔진 표현식을 이용해서 데이터를 원하는 위치에 삽입</p>
                                    <p>JavaScript 라이브러리인 React를 사용한 [퇴근길] 프로젝트</p>
                                </span>
                            </li>
                            <li className="skill-flex">
                                <h4>GitHub, Figma, miro</h4>
                                <span class="hover-text">
                                    <p>GitHub Organizations를 통한 협업 및 Git Flow 전략 사용</p>
                                    <p>Figma를 이용한 레이아웃 UI 설계 및 웹 디자인</p>
                                    <p>miro를 활용한 Domain Driven Design 설계 경험</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>

    )
});

export default Skill;