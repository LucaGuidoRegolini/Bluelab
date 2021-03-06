import { useState } from "react";
import InputMask from "react-input-mask";

import api from "../../services/api";

import "./styles.css";

export default function Home() {
  const [cpf, setcpf] = useState("");
  const [nome, setnome] = useState("");
  const [sobrenome, setsobrenome] = useState("");
  const [telefone, settelefone] = useState("");

  async function novoCliente(e) {
    e.preventDefault();

    const data = {
      cpf,
      nome,
      sobrenome,
      telefone,
    };

    api
      .post("/", data)
      .then((response) => {
        alert(`${nome} registrado`);
        setcpf("");
        setnome("");
        setsobrenome("");
        settelefone("");
      })
      .catch((error) => {
        console.error(error.response.data);
        alert(error.response.data.msg);
      });
  }

  return (
    <div className="body center">
      <div className="card center">
        <form className="form-form" onSubmit={novoCliente}>
          <label className="label-form">CPF</label>
          <InputMask
            mask="99999999999"
            className="input-form"
            placeholder="86741190007"
            value={cpf}
            onChange={(e) => setcpf(e.target.value)}
          ></InputMask>
          <label className="label-form">Nome</label>
          <input
            className="input-form"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setnome(e.target.value)}
          ></input>
          <label className="label-form">Sobrenome</label>
          <input
            className="input-form"
            placeholder="Sobrenome"
            value={sobrenome}
            onChange={(e) => setsobrenome(e.target.value)}
          ></input>
          <label className="label-form">Telefone</label>
          <InputMask
            mask="(99)999999999"
            className="input-form"
            placeholder="(11)999999999"
            value={telefone}
            onChange={(e) => settelefone(e.target.value)}
          ></InputMask>
          <button type="submit" className="botao-form ">
            Criar
          </button>
        </form>
      </div>
    </div>
  );
}
