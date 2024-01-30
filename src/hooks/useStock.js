import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function useStock() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [items, setItems] = useState(() => {
        const rawData = localStorage.getItem("database")
        if (!rawData) return []
        const data = JSON.parse(rawData)
        return data
    })

    const totalItems = items.reduce((previousValue, item) => item.quantity + previousValue, 0)
    const itemsRunningOut = items.filter(item => item.quantity <= 10)
    const recentItems = items.filter(item => {
        const currentDate = new Date()
        const itemDate = new Date(item.createdAt)
        const difference = currentDate - itemDate
        const tenDays = 10 * 24 * 60 * 60 * 1000; // convertendo 10 dias em milisegundos!!!

        return difference < tenDays
    })

    const saveListItems = ({ listUpdate }) => {
        localStorage.setItem("database", JSON.stringify(listUpdate))
    }

    const addItem = ({ item }) => {
        setItems(list => {
            const listUpdate = [...list, item]
            saveListItems({ listUpdate })
            return listUpdate
        })
    }

    const removeItem = ({ itemId }) => {
        setItems(list => {
            const listUpdate = list.filter(item => item.id !== itemId)
            saveListItems({ listUpdate })

            if (pathname === `/estoque/item/${itemId}`) {
                navigate("/estoque")
            }

            return listUpdate
        })
    }

    const updateItem = ({ newItem, itemId }) => {
        setItems(list => {
            const listUpdate = list.map(item => item.id === itemId ? newItem : item)
            saveListItems({ listUpdate })
            return listUpdate
        })
    }

    const getItem = ({ itemId }) => {
        return items.find(item => item.id === itemId)
    }

    return { items, totalItems, itemsRunningOut, recentItems, addItem, removeItem, updateItem, getItem }
}

export default useStock