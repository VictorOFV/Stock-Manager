import FormItem from "../../Components/FormItem";
import styles from "./styles.module.scss";
import formContext from "../../contexts/formContext";
import useFormItem from "../../hooks/useFormItem";

function ItemEntry() {
    const { name, description, category, price, quantity, setCategory, setDescription, setName, setPrice, setQuantity, submit } = useFormItem()
    
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
        <div className={styles.itemEntry}>
            <div className={styles.form}>
                <formContext.Provider value={formState}>
                    <FormItem />
                </formContext.Provider>
            </div>
        </div>
    )
}

export default ItemEntry