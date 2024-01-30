import Button from "../.."
import styles from "./styles.module.scss"

function ButtonRed({ type, buttonDescription, func }) {
    return (
        <div className={styles.buttonBlue}>
            <Button type={type} buttonDescription={buttonDescription} func={func}/>
        </div>
    )
}

export default ButtonRed