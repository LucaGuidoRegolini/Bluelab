/* eslint-disable no-restricted-globals */
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import InputMask from "react-input-mask";

import api from "../../services/api";

import "./styles.css";

export default function Busca() {
  const [cpf, setcpf] = useState("");
  const [nome, setnome] = useState("");
  const [sobrenome, setsobrenome] = useState("");
  const [telefone, settelefone] = useState("");

  if (localStorage.getItem("cpf") !== null) {
    const cpf = localStorage.getItem("cpf");
    setcpf(cpf);
    localStorage.removeItem("cpf");
    api.get("/" + cpf).then((response) => {
      const { nome, sobrenome, telefone } = response.data.cliente[0];
      setnome(nome);
      setsobrenome(sobrenome);
      settelefone(telefone);
    });
  }

  async function mudaCliente(e) {
    e.preventDefault();

    const data = {
      nome,
      sobrenome,
      telefone,
    };

    if (cpf !== "" && nome !== "") {
      if (confirm(`Quer alterar o registro de ${nome}?`)) {
        api
          .put("/" + cpf, data)
          .then((response) => {
            alert(`Registro do ${nome} modificado`);
            setcpf("");
            setnome("");
            setsobrenome("");
            settelefone("");
          })
          .catch((error) => {
            alert(error.response.data.msg);
          });
      }
    }
  }

  async function pesquisa(e) {
    e.preventDefault();
    if (cpf !== "") {
      api
        .get("/" + cpf)
        .then((response) => {
          const { nome, sobrenome, telefone } = response.data.cliente[0];
          setnome(nome);
          setsobrenome(sobrenome);
          settelefone(telefone);
          alert(`Registro do ${nome} encontrado`);
        })
        .catch((error) => {
          alert(error.response.data.msg);
        });
    }
  }
  async function deleta(e) {
    e.preventDefault();
    if (cpf !== "" && nome !== "") {
      if (confirm(`Quer deletar o registro de ${nome}?`)) {
        api
          .delete("/" + cpf)
          .then((response) => {
            alert(`${nome} deletado`);
            setcpf("");
            setnome("");
            setsobrenome("");
            settelefone("");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      alert("Cliente não encontrado");
    }
  }

  return (
    <div className="body center">
      <div className="card center">
        <div className="cpf"></div>
        <div className="form-form">
          <div className="cpf">
            <label className="label-form">CPF</label>
            <div className=" center">
              <input
                className="input-form"
                placeholder="86741190007"
                value={cpf}
                onChange={(e) => setcpf(e.target.value)}
              ></input>
              <button className="pesquisa" onClick={pesquisa} type="button">
                <FiSearch size={18} color="FFF" />
              </button>
            </div>
          </div>

          <form className="" onSubmit={mudaCliente}>
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
            <div className="botoes">
              <button
                type="button"
                onClick={deleta}
                className="botao-form delete"
              >
                Deletar
              </button>
              <button type="submit" className="botao-form update">
                Modificar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
