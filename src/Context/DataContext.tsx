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
    inicio: string;
    final: string;
    setInicio: React.Dispatch<React.SetStateAction<string>>;
    setFinal: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = React.createContext<IDataContext | null>(null);

const baseUrl = "https://data.origamid.dev/vendas/";

const errorMessage = "useData precisa estar em DataContextProvider";

export const useData = () => {
    const context = React.useContext(DataContext);
    if (!context) throw new Error(errorMessage);
    return context;
}

function getDate(n: number) {
    const date = new Date();
    date.setDate(date.getDate() - n);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = String(date.getFullYear());
    return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = (
    { children }: React.PropsWithChildren
) => {
    const [inicio, setInicio] = React.useState(getDate(30));
    const [final, setFinal] = React.useState(getDate(0));
    const { data, loading, error } = useFetch<IVenda[]>(baseUrl + `?inicio=${inicio}&final=${final}`);
    return (
        <DataContext.Provider value={{ 
            data, 
            loading, 
            error,
            inicio,
            setInicio,
            final, 
            setFinal
        }}>
            {children}
        </DataContext.Provider>
    )
}