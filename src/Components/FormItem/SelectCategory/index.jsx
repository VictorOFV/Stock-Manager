import { useContext } from "react"
import styles from "./styles.module.scss"
import formContext from "../../../contexts/formContext"


function SelectCategory() {
    const {category, setCategory} = useContext(formContext)

    return (
        <div className={styles.selectContainer}>
            <label htmlFor="category">Categoria</label>
            <select id="category" required name="category" value={category} onChange={ev => setCategory(ev.target.value)}>
                <option value={"default"} disabled>Selecione uma categoria...</option>
                <option value="Jogos">Jogos</option>
                <option value="Livros">Livros</option>
                <option value="Filmes">Filmes</option>
                <option value="Posters">Posters</option>
                <option value="Canecas">Canecas</option>
            </select>
        </div>
    )
}

export default SelectCategory