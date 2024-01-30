import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

function Header() {
    return (
        <header className={styles.header} >
            <h2>REACT STOCK</h2>
            <nav>
                <Link to={"/"}>Início</Link>
                <Link to={"/estoque"}>Itens</Link>
            </nav>
        </header>
    )
}

export default Header