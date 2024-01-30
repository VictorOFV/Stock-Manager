import styles from "./styles.module.scss";

function Input({ id, type, label, value, onChange }) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{label}</label>
            <input value={value} onChange={ev => onChange(ev.target.value)} type={type} id={id} name={id} autoComplete="off" required/>
        </div>
    )
}

export default Input