import { Link } from "react-router-dom";

import "./styles.css";

export default function Sidebar() {
  return (
    <header className="header-sidebar">
      <div className="espaco"></div>
      <Link to="/">
        <button type="button" className="botao-sidebar">
          Home
        </button>
      </Link>
      <Link to="/lista">
        <button type="button" className="botao-sidebar">
          Lista
        </button>
      </Link>
      <Link to="/busca">
        <button type="button" className="botao-sidebar">
          Busca
        </button>
      </Link>
    </header>
  );
}
