import { useContext } from "react"
import Input from "./Input"
import SelectCategory from "./SelectCategory"
import TextareaDescription from "./TextareaDescription"
import styles from "./styles.module.scss"
import formContext from "../../contexts/formContext"
import ButtonBlue from "../Button/ButtonsVariant/ButtonBlue"

function FormItem() {
    const { name, setName, quantity, setQuantity, price, setPrice, submit } = useContext(formContext)

    return (
        <form className={styles.form} onSubmit={submit}>
            <div className={styles.inputs}>
                <Input 
                id={"nameItem"} 
                type={"text"} 
                label={"Nome"} 
                value={name} 
                onChange={setName}/>

                <Input 
                id={"quantityItem"} 
                type={"number"} 
                label={"Quantidade"} 
                value={quantity} 
                onChange={setQuantity} />

                <Input 
                id={"priceItem"} 
                type={"number"} 
                label={"Preço"} 
                value={price} 
                onChange={setPrice} />

                <SelectCategory />
            </div>
            <TextareaDescription />
            <ButtonBlue buttonDescription={"Salvar"} type={"submit"} />
        </form>
    )
}

export default FormItem