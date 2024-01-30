import styles from "./styles.module.scss";

function BoxInfo({ title, value }) {
    return (
        <div className={styles.boxInfo}>
            <span className={styles.title}>{title}</span>
            <span className={styles.value}>{value}</span>
        </div>
    )
}

export default BoxInfo