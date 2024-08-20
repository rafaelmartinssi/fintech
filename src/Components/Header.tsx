import React from "react"
import DateRange from "./DateRange"
import Meses from "./Meses"
import { useLocation } from "react-router-dom";

const Header = () => {
    const [title, setTitle] = React.useState("Resumo");
    const location = useLocation();

    React.useEffect(() => {
        if (location.pathname === "/") {
            setTitle("Resumo");
            document.title = "Fintech | Resumo";
        }
        if (location.pathname === "/vendas") {
            setTitle("Vendas");
            document.title = "Fintech | Vendas";
        }
    }, [location])

    return (
        <div className="mb">
            <div className="daterange mb">
                <DateRange />
                <h1 className="box bg-3"> { title } </h1>
            </div>
            <Meses />
        </div>
    )
}

export default Header;