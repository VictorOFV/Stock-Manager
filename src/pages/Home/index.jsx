import BoxInfo from "../../Components/BoxInfo"
import styles from "./styles.module.scss"
import Table from "../../Components/Table"
import Button from "../../Components/Button"
import useStock from "../../hooks/useStock"
import { Link } from "react-router-dom"

function Home() {

    const { items, itemsRunningOut, recentItems, totalItems } = useStock()

    return (
        <div className={styles.home}>
            <h1>Dashboard</h1>
            <div className={styles.boxInfos}>
                <BoxInfo title={"Diversidade de Itens"} value={items.length} />
                <BoxInfo title={"Inventário Total"} value={totalItems} />
                <BoxInfo title={"Itens Recentes"} value={recentItems.length} />
                <BoxInfo title={"Itens Acabando"} value={itemsRunningOut.length} />
            </div>
            <div className={styles.tables}>
                <Table>
                    <thead>
                        <tr>
                            <th>Itens Recentes</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={`estoque/item/${item.id}`}><Button buttonDescription={"Detalhes"} /></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Table>
                    <thead>
                        <tr>
                            <th>Itens Acabando</th>
                            <th>Qtd.</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsRunningOut.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <Link to={`estoque/item/${item.id}`}><Button buttonDescription={"Detalhes"} /></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Home