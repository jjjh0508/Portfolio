
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
            setNavIndex(null)
        }

    }, [scrollRef, navIndex, NavLocation])


    useEffect(() => {
        if (NavLocation === "/") {
            const changeNavBtnStyle = () => {
                scrollRef.current.forEach((ref, idx) => {
                    if (ref.offsetTop - 180 < window.scrollY) {
                        navRef.current.forEach(ref => {
                            ref.className = ref.className.replace(' navActive', '');
                        });

                        navRef.current[idx].className += ' navActive'
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