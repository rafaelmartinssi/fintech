import { Header } from "./Components/Header";
import { Sidenav } from "./Components/Sidnav";
import { Resumo } from "./Pages/Resumo";
import "./Style.css";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
  )
}

export default App
