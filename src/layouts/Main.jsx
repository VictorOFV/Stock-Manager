import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

function Main() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <Header />
            <main style={{flex: "1", padding: "0 2rem"}}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Main