import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../rotas/Coordinator";
import { BASE_URL } from "../../constants/constants";
import { useForm } from "../../hooks/useForm/useForm";
import { Div } from "./styled"

export const EditarCadastro = () => {
  const navigate = useNavigate();
  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const editRegistration = (event) => {
    event.preventDefault();
    axios
      .put(`${BASE_URL}profile`, form, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
        alert("Cadastro editado com sucesso!");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Div>
      <button
        onClick={() => {
          goToBack(navigate);
        }}
      >
        ←
      </button>
      <h1>Editar</h1>
      <form onSubmit={editRegistration}>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
          value={form.nome}
          onChange={onChange}
          pattern="^.{3,}$"
          title="Mínimo 3 caracteres"
          required
        />
        <label htmlFor="email">E-mail: </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={onChange}
          required
        ></input>
        <label htmlFor="cpf">CPF: </label>
        <input
          title="Ex: 000.000.000-00"
          name="cpf"
          id="cpf"
          placeholder="CPF"
          value={form.cpf}
          onChange={onChange}
          pattern="([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"
          required
        ></input>
        <button type="submit">salvar</button>
      </form>
    </Div>
  );
};
