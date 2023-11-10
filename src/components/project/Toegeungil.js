import { NavLink } from "react-router-dom";

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
const Toegeungil = ({ outsideToggle }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="algore-section projectnout page"  >
                <div className="project-header" onClick={outsideToggle}>
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
                                        유지보수성과 생산성을 높이기 위해
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
                {/* problem & solution */}
                <div class="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after2">Problem<br />& Solution</h1>
                        <div class="overview_text">
                            <ul class="overview_text_ul">
                                {/* <li class="dot">문제 및 해결 */}
                                <li> 공통 서버 이슈 & 이미지 관리 문제
                                    <p>
                                        강사의 개인 PC를 빌려 DB 서버와 config 서버 환경을 구축하였지만
                                        저번 프로젝트에서 스프링 빌드 이후 업로드 되는 이미지를 바로 못 읽어오는 문제가 있어
                                        Byte 데이터를 DB에 바로 저장하는 방식의 이미지 업로드와 다운로드를 구현하였지만
                                        계속된 이미지 축척으로 용량이 과부하되어 이미지가 로딩이 길어지는 등 DB서버가 다운되는 문제가 발생했습니다.
                                    </p>
                                    <p>
                                        이를 보완하기 위해 학원 측의 양해를 구해 학원 PC에 공통 서버를 구성하고 Node.js 이미지 스트리밍 서버를 구축하여 이미지 서버에 이미지를 저장하고
                                        DB에 이미지 URL을 입력하여 Node.js가 이미지를 응답해줄 수 있도록 구성하였고,

                                        port forwarding을 통해 외부 접속을 허용하여  DB서버, 이미지 스트리밍 서버, config 서버를 구축하여 실행시키고
                                        퇴근길 사이트를 배포하였으며, 현재까지도 퇴근길 서비스가 배포될 수 있도록 서버가 실행 중에 있습니다.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/* review */}
                <div class="overview">
                    <hr />
                    <div class="common_wrap">
                        <h1 className="line_after">Review</h1>
                        <div class="overview_text">
                            <ul class="overview_text_ul">
                                <li class="dot">잘한 점
                                    <p>
                                        팀원과의 의사소통이 문제없이 이루어졌으며 팀원 노력했습니다. <br />
                                        협업이 문제없이 진행되었으며 팀원들끼리 서로 소통하며 먼저 겪었던 문제들을 도와가며 해결하였습니다.

                                        저번 프로젝트에서 로컬환경의 불편함을 느끼고 공통환경을 구성하였습니다.
                                    </p>
                                </li>
                                <li class="dot">아쉬운 점
                                    <p>
                                        처음 화면 디자인을 할 때 전체적인 레이아웃을 잘못 구성하여 레이아웃을 구성 스타일을 모두 px 값으로 주어 해상도에 따라 레이아웃을 벗어나게 되는 아쉬움이 있었습니다.
                                    </p>
                                    <p>
                                        @media 쿼리를 이용하여 해상도에 따른 html font-size를 줄이고, px 값을 모두 rem 크기로 변경해 주었지만 배포된 사이트인 만큼 전체적인 레이아웃을 잘못 잡았었다는 점이 아쉬움으로 남았습니다.
                                    </p>
                                </li>
                                <li class="dot">프로젝트 완료 리뷰
                                    <p> 기획부터 배포까지 큰 문제 없이 재미있게 진행하였으며 잘 마무리 되었다고 생각합니다.   </p>
                                    <p>
                                        첫번째 프로젝트를 기간내에 끝내지 못한 경험이 있었습니다. 그 때는 문제가 발생하면 기다려주기만 했었는데 이번 프로젝트에서는
                                        팀원들 끼리 서로 소통하며 먼저 겪었던 문제들을 도와가며 해결하였기 때문에 생각했던 기능들을 구현할 수 있었다고 생각합니다.
                                        팀원 모두 포기하지 않고 노력했기 때문에 나온 결과라고 생각합니다.

                                        현재도 배포된 사이트를 계속 개선해 나가고 있으며 관리하고 있습니다.

                                    </p>
                                    <p>
                                        이번 프로젝트가 개인적으로 좋았던 점은 제가 격었던 문제를 팀원들에게 설명해주고 해결해주는 과정에서 저 자신이 더 성장 했다고 느꼈습니다.
                                    </p>
                                    <p>
                                        팀원 모두 포기하지 않고 노력해주었기 때문에 좋은 결과가 나왔다고 생각하고 팀원 모두 발전할 수 있는 계기가 되었다고 생각합니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <footer>
                    <ul class="footer_ul">
                        <li><a href="https://github.com/Teddybear-6" target="_blank">View github</a></li>
                        <li>
                            <NavLink to="/algore">
                                Next project
                            </NavLink>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                                <path
                                    d="M686-450H190q-13 0-21.5-8.5T160-480q0-13 8.5-21.5T190-510h496L459-737q-9-9-9-21t9-21q9-9 21-9t21 9l278 278q5 5 7 10t2 11q0 6-2 11t-7 10L501-181q-9 9-21 9t-21-9q-9-9-9-21t9-21l227-227Z" />
                            </svg>
                        </li>
                    </ul>
                </footer>
            </div>



        </>
    )
}

export default Toegeungil;