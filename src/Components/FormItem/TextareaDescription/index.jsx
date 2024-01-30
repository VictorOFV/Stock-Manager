import { useContext } from "react"
import styles from "./styles.module.scss"
import formContext from "../../../contexts/formContext"

function TextareaDescription() {
    const { description, setDescription } = useContext(formContext)

    return (
        <div className={styles.textareaContainer}>
            <label htmlFor="description">Descrição</label>
            <textarea value={description} onChange={ev => setDescription(ev.target.value)} name="description" id="description" required></textarea>
        </div>
    )
}

export default TextareaDescription