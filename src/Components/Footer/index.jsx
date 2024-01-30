import { FaGithub, FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";
import styles from "./styles.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialMedia}>
                <a href="" target="_blank">
                    <FaGithub />
                </a>
                <a href="" target="_blank">
                    <FaFacebook  />
                </a>
                <a href="" target="_blank">
                    <FaInstagram  />
                </a>
                <a href="" target="_blank">
                    <FaDiscord />
                </a>
            </div>
            <hr />
            <p>Desenvolvido por <a href="">@VictorManoel</a> ❤️</p>
        </footer>
    )
}

export default Footer