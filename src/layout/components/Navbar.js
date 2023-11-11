
import "../css/Navbar.css"
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const DETAIL_NAV = [
    { idx: 0, name: 'About' },
    { idx: 1, name: 'SkillSet' },
    { idx: 2, name: 'Project' }
]

const Navber = ({ scrollRef }) => {
    const [navIndex, setNavIndex] = useState(0);
    const navRef = useRef([]);
    const NavLocation = useLocation().pathname;

    useEffect(() => {
        if (NavLocation === "/") {
            scrollRef.current[navIndex]?.scrollIntoView({ behavior: 'smooth' });
            // setNavIndex(null)
        }
    }, [navIndex, NavLocation])
    const wheelHandler = (e) => {
        console.log(e.deltaY)
        e.preventDefault();
        console.log(navIndex)
        if (e.deltaY > 0) {
            let num = navIndex + 1;
            setNavIndex(num);
        } else if (e.deltaY < 0) {
            let num = navIndex - 1;
            setNavIndex(num);
        }
        if (navIndex < 0) {
            setNavIndex(0);
        } else if (navIndex > 2) {
            setNavIndex(2);
        }

    }

    useEffect(() => {
        if (NavLocation === "/") {

            window.addEventListener('wheel', wheelHandler, { passive: false });

            return () => {
                window.removeEventListener('wheel', wheelHandler, { passive: false });
            }
        } else {
            return () => {
                window.removeEventListener('wheel', wheelHandler, { passive: false });
            }
        }
    }, [scrollRef, navIndex, NavLocation])
    useEffect(() => {
        if (NavLocation === "/") {
            const changeNavBtnStyle = () => {
                scrollRef.current.forEach((ref, idx) => {
                    if (ref.offsetTop - 180 < window.scrollY) {
                        navRef.current.forEach(ref => {
                            ref.className = ref.className = ('navUnActive');
                        });

                        navRef.current[idx].className = 'navActive'
                    }

                });
            }
            window.addEventListener('scroll', changeNavBtnStyle);
            return () => {
                window.removeEventListener('scroll', changeNavBtnStyle);
            }
        }

    }, [scrollRef, NavLocation])
    return (
        <nav id="nav">
            {(NavLocation === "/") && DETAIL_NAV.map(({ idx, name }) => (
                <a className="navUnActive" key={idx}
                    ref={ref => (navRef.current[idx] = ref)}
                    onClick={() => { setNavIndex(idx) }}>{name}</a>
            ))}




        </nav>
    );
};


export default Navber;