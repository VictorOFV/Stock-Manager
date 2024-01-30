import Button from "../.."
import styles from "./styles.module.scss"

function ButtonBlue({ type, buttonDescription, func }) {
    return (
        <div className={styles.buttonBlue}>
            <Button type={type} buttonDescription={buttonDescription} func={func}/>
        </div>
    )
}

export default ButtonBlue