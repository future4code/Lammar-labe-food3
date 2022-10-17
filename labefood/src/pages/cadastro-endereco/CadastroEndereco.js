import * as React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../rotas/Coordinator";
import { useForm } from "../../hooks/useForm/useForm";
import axios from "axios";
/* import Box from "@mui/material/Box"; */
/* import TextField from "@mui/material/TextField"; */
/* import Button from '@mui/material/Button'; */
import { BASE_URL } from "../../constants/constants";

export const CadastroEndereco = () => {
  const navigate = useNavigate();
  const [form, onChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  });



  const cadastro = (event) => {
    event.preventDefault();

    axios
      .put(
        `${BASE_URL}address`,
        form, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));

  };
  console.log(form);

  return (
    <div>
      <h2>Meu endereço</h2>
      <form onSubmit={cadastro}>
        <div>
          <input
            name={"street"}
            label={"Logradouro"}
            value={form.street}
            onChange={onChange}
            placeholder="Rua/ Av."
            type={"logradouro"}
            required
          /*   variant="outlined"
            fullWidth
            margin="normal" */
          />
        </div>
        <div>
          <input
            name={"number"}
            label={"Numero"}
            value={form.number}
            onChange={onChange}
            placeholder="numero"
            type={"numero"}
            required
          /*  variant="outlined"
           fullWidth
           margin="normal" */
          />
        </div>
        <div>
          <input
            name={"complement"}
            label={"Complemento"}
            value={form.complement}
            onChange={onChange}
            placeholder="Apto./ Bloco"
            type={"complemento"}
          /* variant="outlined"
          fullWidth
          margin="normal" */
          />
        </div>
        <div>
          <input
            name={"neighbourhood"}
            label={"Bairro"}
            value={form.neighbourhood}
            onChange={onChange}
            placeholder="Bairro"
            type={"bairro"}
            required
          /*  variant="outlined"
           fullWidth
           margin="normal" */
          />
        </div>
        <div>
          <input
            name={"city"}
            label={"Cidade"}
            value={form.city}
            onChange={onChange}
            placeholder="Cidade"
            type={"cidade"}
            required
          /*    variant="outlined"
             fullWidth
             margin="normal" */
          />
        </div>
        <div>
          <input
            name={"state"}
            label={"Estado"}
            value={form.state}
            onChange={onChange}
            placeholder="Estado"
            type={"estado"}
            required
          /*  variant="outlined"
           fullWidth
           margin="normal" */
          />
        </div>

        <button type="submit" variant="contained" color="error">Salvar</button>


      </form>
      <br />
      <button
        onClick={() => {
          goToFeed(navigate);
        }}
      >
        Feed
      </button>
      <button
        onClick={() => {
          goToSignUp(navigate);
        }}
      >
        Signup
      </button>
    </div>
  );
};
