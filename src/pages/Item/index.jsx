import { Link, useParams } from "react-router-dom";
import style from "./styles.module.scss";
import useStock from "../../hooks/useStock";
import Button from "../../Components/Button";
import MiniBoxInfo from "../../Components/MiniBoxInfo";
import ButtonRed from "../../Components/Button/ButtonsVariant/ButtonRed";

function Item() {
    const { id } = useParams()
    const { getItem, removeItem } = useStock()
    const item = getItem({ itemId: id })

    return (
        <div className={style.item}>
            <div className={style.titleItemContainer}>
                <h2>{item.name}</h2>
                <div className={style.buttons}>
                    <Link to={`/estoque/editar/${item.id}`}><Button buttonDescription={"Atualizar"} /></Link>
                    <ButtonRed buttonDescription={"Excluir"} func={() => removeItem({ itemId: id })} />
                </div>
            </div>
            <div className={style.boxInfos}>
                <MiniBoxInfo>
                    Categoria: {item.category}
                </MiniBoxInfo>
                <MiniBoxInfo>
                    Quantidade em Estoque: {item.quantity}
                </MiniBoxInfo>
                <MiniBoxInfo>
                    Preço: {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </MiniBoxInfo>
            </div>
            <div>
                <h3>Sobre o Produto</h3>
                <p className={style.description}>{item.description}</p>
            </div>
            <div className={style.dates}>
                <p>Cadastrado em: {new Date(item.createdAt).toLocaleString()}</p>
                {item.updatedAt && (
                    <p>Atualizado em: {new Date(item.updatedAt).toLocaleString()}</p>
                )}
            </div>
        </div>
    )
}

export default Item