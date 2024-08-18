import { useData } from "../Context/DataContext"

export const Resumo = () => {
    const {data} = useData();

    if (!data) return null; 
    return (
        <section>
            <div className="resumo flex mb">
                <div className="box">
                    <h2>Vendas</h2>
                    <span>
                        {   
                            data
                            .filter((i) => i.status !== 'falha')
                            .reduce(
                                (acc, item) => acc + item.preco, 0
                            )
                            .toLocaleString(
                                "pt-br", 
                                { style: "currency", currency: "BRL" }
                            )
                        }
                    </span>
                </div>
                <div className="box">
                    <h2>Recebidos</h2>
                    <span>
                        {   
                            data
                            .filter((i) => i.status === 'pago')
                            .reduce((acc, i) => acc + i.preco, 0)
                            .toLocaleString(
                                "pt-br", 
                                { style: "currency", currency: "BRL" }
                            )
                        }
                    </span>
                </div>
                <div className="box">
                    <h2>Processando</h2>
                    <span>
                        {   
                            data
                            .filter((i) => i.status === 'processando')
                            .reduce((acc, i) => acc + i.preco, 0)
                            .toLocaleString(
                                "pt-br", 
                                { style: "currency", currency: "BRL" }
                            )
                        }
                    </span>
                </div>
            </div>
            <div className="box">Gráficos</div>
        </section>
    )
}

export default Resumo;