import React from "react";
import { useData } from "../Context/DataContext";

function nomeMes (n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n)
    const nome = new Intl.DateTimeFormat('pt-BR', {month: "long"}).format(date);
    return nome;
}

function formatDate(date: Date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = String(date.getFullYear());
    return `${yyyy}-${mm}-${dd}`;
}

const styleButton: React.CSSProperties = {
    padding: "var(--gap) var(--gap-s)",
    backgroundColor: "var(--color-3)",
    border: "none",
    borderRadius: "var(--gap)",
    color: "var(--color-2)",
    fontWeight: "600",
    textTransform: "capitalize",
}

const MesBtn = ({n}: {n:number}) => { 
    const {setInicio, setFinal} = useData();
    function setMes (n: number) {
        const date = new Date();
        date.setMonth(date.getMonth() + n);

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        setInicio(formatDate(firstDay))
        setFinal(formatDate(lastDay))
    }
    return (
        <button style={styleButton} onClick={() => setMes(n)}>
          {nomeMes(n)}  
        </button>
    )
}

export default MesBtn;