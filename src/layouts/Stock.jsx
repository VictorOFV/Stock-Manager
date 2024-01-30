import { Outlet } from "react-router-dom"
import NavItems from "../Components/NavItems"

function Stock() {
    return (
        <div>
            <h1>Estoque</h1>
            <NavItems />
            <Outlet />
        </div>
    )
}

export default Stock