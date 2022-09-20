import React from 'react';
import logo from '../../img/Rappi4.svg'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm/useForm';
import { goToCadastroEndereco } from '../../rotas/Coordinator';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';

export const Signup = () => {
    const navigate = useNavigate()

    const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "", password: "" });

    const cadastraUsuario = (event, email, password) => {
        event.preventDefault();

        if (form.password !== form.password2) {
            alert("Senha não confere com anterior")
        } else {
            axios.post(`${BASE_URL}signup`, form)
                .then((response) => {
                    console.log(response.data);
                    alert("Conta criada com sucesso!")
                }).catch((e) => {
                    console.log(e.message);
                    alert("E-mail ou CPF já cadastrado!")
                })
            clear();
        }
    }

    return (
        <div>
            <img src={logo} alt="Logo Rappi4" />
            <h2>Cadastrar</h2>
            <form onSubmit={cadastraUsuario}>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome e sobrenome"
                    value={form.nome}
                    onChange={onChange}
                    pattern="^.{3,}$"
                    title="Mínimo 3 caracteres"
                    required
                />
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@email.com"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <label htmlFor="cpf">CPF</label>
                <input
                    name="cpf"
                    id="cpf"
                    placeholder="000.000.000-00"
                    value={form.cpf}
                    onChange={onChange}
                    pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}"
                    title="Digite seu CPF com 11 dígitos"
                    required
                />
                <label htmlFor="senha">Senha</label>
                <input
                    type="password"
                    name="password"
                    id="senha"
                    placeholder="Mínimo 6 caracteres"
                    value={form.password}
                    onChange={onChange}
                    pattern="^.{6,}$"
                    title="Mínimo 6 caracteres"
                    required
                />
                <label htmlFor="password2">Confirmar</label>
                <input
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="Confirme a senha anterior"
                    value={form.password2}
                    onChange={onChange}
                    pattern="^.{6,}$"
                    title="Mínimo 6 caracteres"
                    required
                />
                <button type='submit'>Criar</button>
            </form>
            <button onClick={() => { goToCadastroEndereco(navigate) }}>Cadastrar Endereço</button>

        </div>
    )


}