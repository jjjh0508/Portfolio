import { Outlet } from "react-router-dom"
import Profile from "./components/Profile"
import Navber from "./components/Navbar"
import Homebar from "./components/Homebar"
import "./css/Layout.css"
import Toggle from "./components/toggle"
import { useEffect, useState } from "react"

function Layout({ scrollRef, setProjectSet }) {
    const [isToggle, setIsToggle] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const onClickToggle = () => {
        isToggle ? setIsToggle(false) : setIsToggle(true)
    }
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
            setIsToggle(false)
        };

    }, [width])
    return (
        <>
            <div className="container">
                <Toggle onClickToggle={onClickToggle} />
                <Profile scrollRef={scrollRef} isToggle={isToggle} />
                <Homebar setProjectSet={setProjectSet} />
                <Outlet />
            </div>

        </>
    )
}

export default Layout;