import styles from "./styles.module.scss"

function Button({buttonDescription, type, func}) {
    return (
        <button onClick={func} className={styles.button} type={type}>{buttonDescription}</button>
    )
}

export default Button