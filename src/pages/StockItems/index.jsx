import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Table from "../../Components/Table";
import useStock from "../../hooks/useStock";
import styles from "./styles.module.scss";
import ButtonBlue from "../../Components/Button/ButtonsVariant/ButtonBlue";
import ButtonRed from "../../Components/Button/ButtonsVariant/ButtonRed";

function StockItems() {
    const { items, removeItem } = useStock()

    return (
        <div className={styles.stockItems}>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Estoque</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.category}</td>
                                <td className={styles.buttons}>
                                    <Link to={`item/${item.id}`}><ButtonBlue buttonDescription={"Detalhes"} /></Link>
                                    <Link to={`editar/${item.id}`}><Button buttonDescription={"Atualizar"} /></Link>
                                    <ButtonRed buttonDescription={"Excluir"} func={() => removeItem({ itemId: item.id })} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default StockItems