import toegeungilTitle from "../images/toegeungilTitle.png";
import java from "../images/java.png";
import spring from "../images/spring.png";
import security from "../images/security.png"
import jpa from "../images/jpa.png"
import nodejs from "../images/nodejs.png"
import mysql from "../images/mysql.png"
import react from "../images/react.png"
import css from "../images/css.png"
import html from "../images/html.png"
import js from "../images/js.png"
import intellij from "../images/intellij.png"
import vscode from "../images/vscode.png"
import figma from "../images/figma.png"
import miro from "../images/miro.png"
import github from "../images/github.png"
import toegeungilConfiguration from "../images/toegeungilConfiguration.png"
import toegeungilArchitecture from "../images/toegeungilArchitecture.png"
import toegeungilGit from "../images/toegeungilGit.png"
import "../css/project/project.css"

import { useEffect } from "react";
const Toegeungil = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="algore-section projectnout page">
                <div className="project-header">
                    <div className="header_wrap">
                        <img src={toegeungilTitle} alt="퇴근길" />
                        <div className="headertext">
                            <div className="headerdiv">
                                <h1>퇴근길(Toegeungil)</h1>
                                <h2>직장인들을 위한 취미강의 플랫폼</h2>
                                <ul className="geadertext-ul">
                                    <li>
                                        2023.09.01 - 2023.09.24
                                    </li>
                                    <li>
                                        팀프로젝트(100%)
                                    </li>
                                </ul>
                                <div class="viewbtn right-flex">
                                    <a href="https://github.com/Teddybear-6/.github/files/12898340/PPT.pdf" target="_blank">Presentation</a>
                                    <a href="https://github.com/Teddybear-6" target="_blank">github</a>
                                    <a href="http://toegeungil.shop/" target="_blank">toegeungil.shop</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after">Overview</h1>
                        <div class="overview_text">
                            <ul class="overview_text_ul">
                                <li>
                                    작업기간
                                    <p>2023.09.01 - 2023.09.24</p>
                                </li>
                                <li>
                                    역할
                                    <a href="http://toegeungil.shop/hobby" target="_blank" className="left-flex">
                                        <p>취미(Hobby)</p>
                                        <div className="project-veiw">
                                            <a href="http://toegeungil.shop/hobby" target="_blank">Click</a>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    기여도
                                    <div className="project-border">100%</div>
                                </li>
                                <li>프로젝트 소개
                                    <p>
                                        취미생활을 하고 싶은 직장인들에게 다양한 취미와 여가생활을 제시하고
                                        취미가 비슷하거나 같은 사용자들끼리 모임 형성 및 참여와 취미에 대한 고민을 나눌 수 있는
                                        커미니티 형성을 제공하고자 하였습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div class="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after2">Project</h1>
                        <div class="overview_text skill-images">
                            <ul class="overview_text_ul">
                                <li>기술 스택 및 개발 환경
                                    <p><br /><strong>Back-End</strong></p>
                                    <p>
                                        <img src={java}></img>
                                        <img src={spring}></img>
                                        <img src={security}></img>
                                        <img src={jpa}></img>
                                        <img src={nodejs}></img>
                                    </p>
                                    <p><br /><strong>Database</strong></p>
                                    <p>
                                        <img src={mysql}></img>
                                    </p>
                                    <p><br /><strong>Front-End</strong></p>
                                    <p>
                                        <img src={react}></img>
                                        <img src={js}></img>
                                        <img src={html}></img>
                                        <img src={css}></img>
                                    </p>
                                    <p><strong>Dev-Tool</strong></p>
                                    <p>
                                        <img src={intellij} />
                                        <img src={vscode} />
                                    </p>
                                    <p><strong>Collabo-Tool</strong></p>
                                    <p>
                                        <img src={figma} />
                                        <img src={github} />
                                        <img src={miro} />
                                    </p>
                                    <p>
                                        - Spring Security+JWT<br />
                                        클라이언트의 요청 시마다 사용자의 자격 증명 정보를 보내는 Token 방식을 사용하였습니다.
                                    </p>
                                    <p>
                                        - JPA<br />
                                        유지보수와 생산성을 높이기 위해
                                        객체와 관계형 데이터베이스 간의 매핑을 통해
                                        자동으로 테이블을 만들어주고 쿼리를 작성해주는 인터페이스인
                                        JPA를 활용하였습니다.
                                    </p>
                                    <p>
                                        - Node.js<br />
                                        node.js로 이미지 서버를 구축하여
                                        취미 및 소셜에 등록되는 이미지를
                                        별도의 이미지 서버에 저장하여 호출하는 방식으로 사용하였습니다.
                                    </p>
                                    <p>
                                        - React<br />
                                        자바스크립트의 라이브러리인 react를 활용하여 컴포넌트를 조합, 그리고
                                        fetch API를 활용하여 json 형식의 데이터를 호출하여 프론트를 구성하였습니다.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/* composition */}
                <div class="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after">Composition</h1>
                        <div class="overview_text">
                            <ul class="overview_text_ul pro-config">
                                <li class="dot">메뉴 구조도
                                    <p><img src={toegeungilConfiguration} /></p>
                                    <p>[ <strong>로그인 및 마이페이지</strong> ]<br /> - Spring security+ jwt를 사용하여 토큰 방식의 로그인 기능 구현</p>
                                    <p>[ <strong>취미_Hobby</strong> ]<br /> -  강사가 강의하는 다양한 취미 클래스 참여</p>
                                    <p>[ <strong>소셜_Social</strong> ]<br /> - 취미가 비슷하거나 같은 사용자들끼리의 모임형성 및 참여</p>
                                    <br />
                                </li>
                                <li class="dot">시스템 아키텍처
                                    <p><img src={toegeungilArchitecture} /></p>
                                    <br />
                                </li>
                                <li class="dot">Branch 관리
                                    <p><img src={toegeungilGit} /></p>
                                    <p>[ <strong>main</strong> ]<br /> - 실제 배포를 위한 main 브랜치</p>
                                    <p>[ <strong>develop</strong> ]<br /> - main 브랜치에 영향을 주지 않으면서 개발하기 위해서 사용</p>
                                    <p>[ <strong>feature</strong> ]<br /> - 기능 단위로 develop 서버에 영향을 주지 않기 위해서 사용</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Toegeungil;