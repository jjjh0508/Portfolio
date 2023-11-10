import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import toegeungilImg from "../images/toegeungil.png"
import algore from "../images/algore.png"
import "../css/Project.css"
const Project = forwardRef((props, ref) => {


    return (

        <section ref={projectRef => { ref.current[2] = projectRef }} id="project" className="page project-section">
            <div className="skillTitle">Project</div>
            <div className='project-board'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="project-no">
                            <div className="project-sec1">1.</div>
                            <div className="project-sec2">퇴근길</div>
                            <div className="project-sec3">퇴근 후, 직장인들의 취미 클래스 </div>
                            <div className="project-sec4">
                                <div>React</div>
                                <div>JPA</div>
                                <div>RestAPI</div>
                            </div>
                            <NavLink to='/toegeungil'>
                                <div className="project-view">
                                    View More
                                </div>
                            </NavLink>
                        </div>
                        <div className="project-img">
                            <img src={toegeungilImg}></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-no">
                            <div className="project-sec1">2.</div>
                            <div className="project-sec2">알고레</div>
                            <div className="project-sec3">요리 레시피에 따른 물가 정보 제공</div>
                            <div className="project-sec4">
                                <div>공공데이터</div>
                                <div>Thymeleaf</div>
                            </div>
                            <NavLink to='/Algore'>
                                <div className="project-view">
                                    View More
                                </div>
                            </NavLink>
                        </div>
                        <div className="project-img">
                            <img src={algore}></img>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
})

export default Project;