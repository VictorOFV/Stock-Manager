import styles from "./styles.module.scss";

function MiniBoxInfo({ children }) {
    return (
        <div className={styles.box}>
            {children}
        </div>
    )
}

export default MiniBoxInfo