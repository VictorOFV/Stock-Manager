import { useState } from "react";
import { nanoid } from 'nanoid'
import useStock from "./useStock";
import Item from "../entities/Item";

function useFormItem(initialItem = null) { // Se o hook receber um parametro então os valores iniciais vão ser os valores do item recebido, se não váo ser os valores padrão.
    const [name, setName] = useState(initialItem?.name ?? "")
    const [price, setPrice] = useState(initialItem?.price ?? 0)
    const [quantity, setQuantity] = useState(initialItem?.quantity ?? 0)
    const [category, setCategory] = useState(initialItem?.category ?? "default")
    const [description, setDescription] = useState(initialItem?.description ?? "")
    const { addItem, updateItem, getItem } = useStock()

    const generateId = () => {
        const id = nanoid()
        const idExist = getItem({ id })

        if (idExist) {
            return generateId()
        }

        return id
    }

    const resetForm = () => {
        setName("")
        setPrice(0)
        setQuantity(0)
        setCategory("default")
        setDescription("")
    }

    const submit = (ev) => {
        ev.preventDefault()

        try {
            const id = generateId()
            const item = new Item({ name, description, price, quantity, category, id })

            if (initialItem) {
                item.createdAt = initialItem.createdAt
                item.id = initialItem.id
                item.updatedAt = new Date()
                updateItem({ newItem: item, itemId: initialItem.id })
            } else {
                addItem({ item })
                resetForm()
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    return { name, setName, price, setPrice, quantity, setQuantity, category, setCategory, description, setDescription, submit }
}

export default useFormItem