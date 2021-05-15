import { useState, useEffect } from "react";

import api from "../../services/api";

import "./styles.css";

export default function Lista() {
  const [clients, setclients] = useState([]);

  useEffect(() => {
    api.get("/?page1&total=2").then((response) => {
      setclients(response.data.clientes);
    });
  }, []);

  return (
    <div className="body center">
      <ul className="list">
        {clients.map((client) => (
          <div className="item" key={client.cpf}>
            <div>
              <p className="label">Nome:</p>
              <p className="date">{`${client.nome} ${client.sobrenome}`}</p>
            </div>
            <div className="espaco"></div>

            <div>
              <p className="label">CPF:</p>
              <p className="date">{client.cpf}</p>
            </div>
            <div className="espaco"></div>

            <div>
              <p className="label">Telefone:</p>
              <p className="date">{client.telefone}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
