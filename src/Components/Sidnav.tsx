import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import contato from "../assets/icons/contato.svg";
import configuracoes from "../assets/icons/configuracoes.svg";
import sair from "../assets/icons/sair.svg";
import FintechSVG from "../assets/FintechSVG";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
    return (
        <nav className="sidenav box bg-3">
            <FintechSVG title="Fintech Logo" />
            <ul>
                <li className="">
                    <span>
                        <img src={resumo} /> 
                    </span>
                    <NavLink to={"/"}>Resumo</NavLink> 
                </li>
                <li className="">
                    <span>
                        <img src={vendas} /> 
                    </span>
                    <NavLink to={"/vendas"}>Vendas</NavLink> 
                </li>
                <li className="">
                    <span>
                        <img src={webhooks} /> 
                    </span>
                    <a>WebHooks</a>
                </li>
                <li className="">
                    <span>
                        <img src={contato} /> 
                    </span>
                    <a>Contato</a>
                </li>
                <li className="">
                    <span>
                        <img src={configuracoes} /> 
                    </span>
                    <a>Configurações</a>
                </li>
                <li className="">
                    <span>
                        <img src={sair} /> 
                    </span>
                    <a>Sair</a>
                </li>
            </ul>
        </nav>
    )
}

export default Sidenav;