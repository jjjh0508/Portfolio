import { Outlet } from "react-router-dom"
import Profile from "./components/Profile"
import Navber from "./components/Navbar"
import Homebar from "./components/Homebar"
import "./css/Layout.css"
function Layout({ scrollRef, projectset, setProjectSet }) {

    return (
        <>
            <div className="container">
                <div id="header">
                    <header>
                        <Profile />
                        <Navber scrollRef={scrollRef} projectset={projectset} />
                        <Homebar projectset={projectset} setProjectSet={setProjectSet} />
                    </header>

                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;