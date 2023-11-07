import { Outlet } from "react-router-dom"
import Profile from "./components/Profile"
import Navber from "./components/Navbar"
import "./css/Layout.css"
function Layout() {

    return (
        <>
            <div className="container">
                <div id="header">
                    <header>
                        <Profile />
                        <Navber />
                    </header>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;