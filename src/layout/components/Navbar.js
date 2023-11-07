
import "../css/Navbar.css"
import { useState, useRef, useEffect } from "react";

const DETAIL_NAV = [
    { idx: 0, name: 'About' },
    { idx: 1, name: 'SkillSet' },
    { idx: 2, name: 'Project' }
]

const Navber = ({ scrollRef }) => {
    const [navIndex, setNavIndex] = useState(null);
    const navRef = useRef([]);

    useEffect(() => {
        scrollRef.current[navIndex]?.scrollIntoView({ behavior: 'smooth' });
        setNavIndex(null)
    }, [scrollRef, navIndex])


    useEffect(() => {
        const changeNavBtnStyle = () => {
            scrollRef.current.forEach((ref, idx) => {
                if (ref.offsetTop - 180 < window.scrollY) {
                    navRef.current.forEach(ref => {
                        ref.className = ref.className.replace(' navActive', '');
                    });

                    navRef.current[idx].className += ' navActive'
                }

            });
        };
        window.addEventListener('scroll', changeNavBtnStyle);
        return () => {
            window.removeEventListener('scroll', changeNavBtnStyle);
        }
    }, [scrollRef])
    return (
        <nav id="nav">
            {DETAIL_NAV.map(({ idx, name }) => (
                <a className="navUnActive" key={idx}
                    ref={ref => (navRef.current[idx] = ref)}
                    onClick={() => { setNavIndex(idx) }}>{name}</a>
            ))}
        </nav>
    );
};


export default Navber;