import { useParams } from "react-router-dom";
import { IVenda, useData } from "../Context/DataContext";
import useFetch from "../Hooks/useFetch";
import Loading from "../Components/Loading";

const baseUrl = "https://data.origamid.dev/vendas/";

type IPartialVenda = Omit<IVenda, "data">

const Venda = () => {
    const {id} = useParams();

    const { data, loading, error } = useFetch<IPartialVenda>(baseUrl + `${id}`);

    if(loading) return <Loading />
    if(!data) return null;

    return (
        <div>
            <div className="box mb">{data.id}</div>
            <div className="box mb">{data.nome}</div>
            <div className="box mb">{
                data.preco.toLocaleString(
                    'pt-br', 
                    { style: 'currency', currency: 'BRL' }
                )}
            </div>
            <div className="box mb">{data.status}</div>
            <div className="box mb">{data.pagamento}</div>
        </div>
    )
}

export default Venda;