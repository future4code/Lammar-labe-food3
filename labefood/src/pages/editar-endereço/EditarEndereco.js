import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../rotas/Coordinator";
import { BASE_URL } from "../../constants/constants";
import { useForm } from "../../hooks/useForm/useForm";
import { Div } from "./styled";

export const EditarEndereco = () => {
  const navigate = useNavigate();
  const [form, onChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const editAdress = (event) => {
    event.preventDefault();
    axios
      .put(`${BASE_URL}address`, form, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
        alert("Endereço editado com sucesso!");
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
      <form onSubmit={editAdress}>
        <label htmlFor="logradouro">Logradouro: </label>
        <input
          type="text"
          name="logradouro"
          id="street"
          placeholder="Logradouro"
          value={form.street}
          onChange={onChange}
          required
        />
        <label htmlFor="numero">Número: </label>
        <input
          type="number"
          name="numero"
          id="number"
          placeholder="Número"
          value={form.number}
          onChange={onChange}
          required
        ></input>
        <label htmlFor="complement">Complemento: </label>
        <input
          name="complemento"
          id="complement"
          placeholder="Complemento"
          value={form.complement}
          onChange={onChange}
        ></input>
        <label htmlFor="neighbourhood">Bairro: </label>
        <input
          name="bairro"
          id="neighbourhood"
          placeholder="Bairro"
          value={form.neighbourhood}
          onChange={onChange}
          required
        ></input>
        <label htmlFor="city">Cidade: </label>
        <input
          name="cidade"
          id="city"
          placeholder="Cidade"
          value={form.city}
          onChange={onChange}
          required
        ></input>
        <label htmlFor="state">Estado: </label>
        <input
          name="estado"
          id="state"
          placeholder="Estado"
          value={form.state}
          onChange={onChange}
          required
        ></input>
        <button type="submit">salvar</button>
      </form>
    </Div>
  );
};
