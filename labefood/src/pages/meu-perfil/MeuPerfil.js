import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToEditarCadastro } from '../../rotas/Coordinator';
import { goToEditarEndereco } from '../../rotas/Coordinator';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import { useEffect, useState } from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage/useProtected';
import {  Tela, Rectangle, Endereco } from './styled';


export const MeuPerfil = () => {
    const navigate = useNavigate()

    useProtectedPage()

    const [informacoes, setInformacoes] = useState({});

        const getInfos = () => { 
        axios
          .get(`${BASE_URL}profile`, {
            headers: { auth: localStorage.getItem("token") },
          })
          .then((response) => {
            setInformacoes(response.data.user);
          })
          .catch((error) => console.log(error.message));
      }; 

    useEffect(() => {
        getInfos()
    }, [])

    const [pedidos, setPedidos] = useState({});

    const historicoDePedidos = () => { 
        axios
          .get(`${BASE_URL}orders/history`, {
            headers: { auth: localStorage.getItem("token")},
          })
          .then((response) => {
            setPedidos(response.data);
          })
          .catch((error) => console.log(error.message));
      }; 

    useEffect(() => {
        historicoDePedidos()
    }, [])



    return (
        <Tela>
            <h2>Meu Perfil</h2>
                <img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/CC94162C-8ED7-463F-A334-C9DEFFBA9211.svg" alt="ícone de alteração" onClick={() => {goToEditarCadastro(navigate)}} /> 
                <p> {informacoes && informacoes.name} </p>
                <p> {informacoes && informacoes.email} </p>
                <p> {informacoes && informacoes.cpf} </p>               
                    <Rectangle>
                        <Endereco> Endereço Cadastrado </Endereco>                  
                        <p> {informacoes && informacoes.address} </p>      
                        <img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/CC94162C-8ED7-463F-A334-C9DEFFBA9211.svg" alt="ícone de alteração" onClick={() => {goToEditarEndereco(navigate)}}/>   
                    </Rectangle>              
            <h3>Histórico de Pedidos</h3>
        </Tela>
    )
}
