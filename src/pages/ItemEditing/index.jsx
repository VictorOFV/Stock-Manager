import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import useFormItem from "../../hooks/useFormItem";
import formContext from "../../contexts/formContext";
import FormItem from "../../Components/FormItem";
import useStock from "../../hooks/useStock";

function ItemEditing() {
    const { id } = useParams()
    const { getItem } = useStock()
    const item = getItem({ itemId: id })
    const { name, price, category, description, quantity, setCategory, setDescription, setName, setPrice, setQuantity, submit } = useFormItem(item)

    const formState = {
        name,
        description,
        category,
        price,
        quantity,
        setCategory,
        setDescription,
        setName,
        setPrice,
        setQuantity,
        submit
    };

    return (
        <div className={styles.itemEditing}>
            <h2 className={styles.title}>{item.name}</h2>
            <formContext.Provider value={formState}>
                <div className={styles.form}>
                    <FormItem />
                </div>
            </formContext.Provider>
        </div>
    )
}

export default ItemEditing