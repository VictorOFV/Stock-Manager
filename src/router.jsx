import { createBrowserRouter } from "react-router-dom"
import Main from "./layouts/Main"
import Home from "./pages/Home"
import StockItems from "./pages/StockItems"
import ItemEntry from "./pages/ItemEntry"
import Stock from "./layouts/Stock"
import Item from "./pages/Item"
import ItemEditing from "./pages/ItemEditing"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/estoque",
                element: <Stock />,
                children: [
                    {
                        index: true,
                        element: <StockItems />
                    },
                    {
                        path: "novoItem",
                        element: <ItemEntry />,
                        
                    },
                    {
                        path: "editar/:id",
                        element: <ItemEditing />
                    },
                    {
                        path: "item/:id",
                        element: <Item />
                    }
                ]
            }
        ]
    }
])

export default router