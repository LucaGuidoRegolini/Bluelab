import "./styles.css";

export default function Sidebar() {
  return (
    <header className="header-sidebar">
      <div className="espaco"></div>
      <button type="button" className="botao-sidebar">
        Home
      </button>
      <button type="button" className="botao-sidebar">
        Lista
      </button>
      <button type="button" className="botao-sidebar">
        Busca
      </button>
    </header>
  );
}
