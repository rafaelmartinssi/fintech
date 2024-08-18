import React from "react";
import useFetch from "../Hooks/useFetch";

interface IVenda {
    id: number;
    nome: string;
    preco: number;
    status: "pago" | "processando" | "falha";
    pagamento: "boleto" | "pix" | "cartao";
    data: string;
    parcelas: number | null;
}

interface IDataContext {
    data: IVenda[] | null;
    loading: boolean;
    error: string | null;
}

const DataContext = React.createContext<IDataContext | null>(null);

const baseUrl = "https://data.origamid.dev/vendas/";

const errorMessage = "useData precisa estar em DataContextProvider";

export const useData = () => {
    const context = React.useContext(DataContext);
    if (!context) throw new Error(errorMessage);
    return context;
}

export const DataContextProvider = (
    { children }: React.PropsWithChildren
) => {
    const { data, loading, error } = useFetch<IVenda[]>(baseUrl);
    return (
        <DataContext.Provider value={{ data, loading, error }}>
            {children}
        </DataContext.Provider>
    )
}