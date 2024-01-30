import styles from "./styles.module.scss";

function Table({ children }) {
    return (
        <table className={styles.table}>
            {children}
        </table>
    )
}

export default Table