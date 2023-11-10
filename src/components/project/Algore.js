import { NavLink } from "react-router-dom";


import algorelTitle from "../images/algoreTitle.png";
import java from "../images/java.png";
import spring from "../images/spring.png";
import security from "../images/security.png"
import mybatis from "../images/back-mybatis.png"
import thymeleaf from "../images/back-thymeleaf.png"
import oracle from "../images/data-oracle.png"

import css from "../images/css.png"
import html from "../images/html.png"
import js from "../images/js.png"
import intellij from "../images/intellij.png"

import figma from "../images/figma.png"
import github from "../images/github.png"
import notion from "../images/col-notion.png"
import algoreConfiguration from "../images/algoreConfiguration.png"
import algoreERD from "../images/algoreERD.png"
import toegeungilGit from "../images/toegeungilGit.png"
import "../css/project/project.css"

import { useEffect } from "react";
const Algore = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="algore-section projectnout page">
                <div className="project-header">
                    <div className="header_wrap">
                        <img src={algorelTitle} alt="알고레" />
                        <div className="headertext">
                            <div className="headerdiv">
                                <h1>알고레(알고 먹는 레시피)</h1>
                                <h2>공공데이터를 활용한 요리 레시피에 따른 물가 정보 제공 플랫폼</h2>
                                <ul className="geadertext-ul">
                                    <li>
                                        2023.07.06 - 2023.07.23
                                    </li>
                                    <li>
                                        팀프로젝트(90%)
                                    </li>
                                </ul>
                                <div class="viewbtn right-flex">
                                    <a href="https://github.com/Teddybear-6/.github/files/12897588/-.__.pdf" target="_blank">Presentation</a>
                                    <a href="https://github.com/jjjh0508/project_algore-refactoring" target="_blank">View github</a>
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
                                    {/* <a href="http://toegeungil.shop/hobby" target="_blank" className="left-flex"> */}
                                    <p>레시피(Recipe)</p>
                                    {/* <div className="project-veiw">
                                            <a href="http://toegeungil.shop/hobby" target="_blank">Click</a>
                                        </div>
                                    </a> */}
                                </li>
                                <li>
                                    기여도
                                    <div className="project-border">100%</div>
                                </li>
                                <li>프로젝트 소개
                                    <p>
                                        물가 급등으로 인한 소비 심리 위축 속에서 요리에 경험이 없거나 숙련되지 않은 사용자들에게 합리적인 소비 방법을 제안하며,
                                        사용자에게 신뢰감을 줄 수 있는 공공데이터를 활용하여 정확한 물가 정보를 제공하고자 하였습니다.
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
                                        <img src={mybatis}></img>
                                        <img src={thymeleaf}></img>
                                    </p>
                                    <p><br /><strong>Database</strong></p>
                                    <p>
                                        <img src={oracle}></img>
                                    </p>
                                    <p><br /><strong>Front-End</strong></p>
                                    <p>
                                        <img src={js}></img>
                                        <img src={html}></img>
                                        <img src={css}></img>
                                    </p>
                                    <p><strong>Dev-Tool</strong></p>
                                    <p>
                                        <img src={intellij} />
                                    </p>
                                    <p><strong>Collabo-Tool</strong></p>
                                    <p>
                                        <img src={figma} />
                                        <img src={github} />
                                        <img src={notion} />
                                    </p>
                                    <p>
                                        - Spring Security<br />
                                        Spring Security와 session을 이용하여 로그인 및 권한을 체크하였습니다.
                                    </p>
                                    <p>
                                        - Mybatis<br />
                                        Sql 쿼리를 작성 후 XML 방식으로 데이터를 매핑하여 SQL을 별도의 파일로 분리하여 관리하였습니다.
                                    </p>
                                    <p>
                                        - Thymeleaf<br />
                                        Thymeleaf를 활용하여 컨트롤러가 전달하는 데이터를 이용하여 동적으로 화면을 구성하였습니다.
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
                                    <p><img src={algoreConfiguration} /></p>
                                    <p>[ <strong>로그인 및 마이페이지</strong> ]<br /> - Spring security 세션 방식의  로그인 기능 구현</p>
                                    <p>[ <strong>레시피</strong> ]<br /> -  공공데이터를 활용하여 재료 가격과 함께 레시피를 제공</p>
                                    <p>[ <strong>키친가이드</strong> ]<br /> - 재료를 손질하고 보관하는 방법을 관리자가 작성</p>
                                    <br />
                                </li>
                                <li class="dot">ERD
                                    <p><img src={algoreERD} /></p>
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
                                <li>1. 추가 버튼 문제
                                    <p>
                                        추가 버튼을 누르면 숨겨져 있든 div가 복사 되어 추가되는 형식으로 구현하였지만 숨겨져있는 value 값이 인식해서  계속해서 빈 값이 추가 되는 문제가 있었습니다.
                                    </p>
                                    <p>
                                        이를 해결하기 위해 버튼을 누르면 innerHTML+="<div></div>" 로 추가하는 방식으로 변경 하여 문제를 해결했습니다.
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
                                        팀원 끝까지 포기하지 않았고 노력하였습니다.<br />
                                        프로젝트가 끝나고 부족한 부분을 채워나가며 개선해 나갔습니다.
                                    </p>
                                </li>
                                <li class="dot">아쉬운 점
                                    <p>
                                        데이터베이스를 각자의 로컬 환경에서 구성하였기 때문에 변경사항이 있을 때 마다 팀원 전원이 각자 변경 해야하는 문제가 있었고, 공공데이터를 제대로 활용하지 못한 점이 아쉬움을 남습니다.
                                    </p>
                                    <p>

                                    </p>
                                </li>
                                <li class="dot">프로젝트 완료 리뷰
                                    <p> 아쉬움이 많이 남는 프로젝트   </p>
                                    <p>
                                        기간내에 완성하지 못한 프로젝트라 아쉬움이 많이 남는 프로젝트 입니다.
                                        처음 협업을 통한 프로젝트였다보니 의사소통이 부족하였고 문제가 발생 했을 때 팀원의 성장을 위해 기다렸다보니 시간이 많이 소요 되었습니다.
                                        프로젝트를 진행 함에 따라 의사소통하여 서로 맞춰 나가는것이 중요하다는 걸 알게 되었습니다.

                                    </p>

                                    <p>
                                        로컬 환경에서 각자 DB를 구성하여 사용하였기 때문에 변경 사항이 있을 때 마다 팀원 모두 변경해야만 했습니다.
                                        수정 사항이 있을 때 마다 바로 공유하고 서로 의사소통했기에 큰 문제 없이 마무리 되었다고 생각합니다.
                                    </p>

                                    <p>
                                        프로젝트를 통해 의사소통이 중요하다는걸 알게되었습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <footer>
                    <ul class="footer_ul">
                        <li><a href="https://github.com/jjjh0508/project_algore-refactoring" target="_blank">View github</a></li>
                        <li>
                            <NavLink to="/toegeungil">
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

export default Algore;