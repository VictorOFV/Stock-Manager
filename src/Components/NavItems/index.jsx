import { Link, useLocation } from "react-router-dom"
import styles from "./styles.module.scss"

function NavItems() {
    const { pathname } = useLocation()
    return (
        <div className={styles.navItems}>
            <nav>
                <Link style={{borderBottomColor: pathname === "/estoque" ? "#fff" : "transparent"}} to={"/estoque"}>Todos os Itens</Link>
                <Link style={{borderBottomColor: pathname === "/estoque/novoItem" ? "#fff" : "transparent"}} to={"/estoque/novoItem"}>Novo Item</Link>
                <Link>Nova Categoria</Link>
            </nav>
            <hr />
        </div>
    )
}

export default NavItems