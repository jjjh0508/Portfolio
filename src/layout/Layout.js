import { Outlet } from "react-router-dom"
import Profile from "./components/Profile"
import Homebar from "./components/Homebar"
import "./css/Layout.css"
import Toggle from "./components/toggle"
import { useEffect, useState } from "react"


function Layout({ scrollRef, setProjectSet, isToggle, setIsToggle, outsideToggle }) {

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
            <Toggle onClickToggle={onClickToggle} />
            <div className="container" onClick={outsideToggle}>
                <Profile scrollRef={scrollRef} isToggle={isToggle} />
                <Homebar setProjectSet={setProjectSet} />
                <Outlet />
            </div>

        </>
    )
}

export default Layout;