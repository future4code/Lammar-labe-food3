import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToEditarCadastro } from '../../rotas/Coordinator';
import { goToEditarEndereco } from '../../rotas/Coordinator';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import { useEffect, useState } from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage/useProtected';
import {  Tela, Rectangle, Endereco, Informacoes} from './styled';


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
              <Informacoes>               
                <div>
                  <p> {informacoes && informacoes.name} </p>
                  <p> {informacoes && informacoes.email} </p>
                  <p> {informacoes && informacoes.cpf} </p>                   
                </div> 
                <img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/CC94162C-8ED7-463F-A334-C9DEFFBA9211.svg" alt="ícone de alteração" onClick={() => {goToEditarCadastro(navigate)}} /> 
              </Informacoes>             
              <Rectangle>
                  <Endereco> 
                  <h3>Endereço Cadastrado </h3>      
                    <p> {informacoes && informacoes.address} </p>   
                  </Endereco>      
                    <img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/CC94162C-8ED7-463F-A334-C9DEFFBA9211.svg" alt="ícone de alteração" onClick={() => {goToEditarEndereco(navigate)}}/>   
              </Rectangle>              
            <h4>Histórico de Pedidos</h4>
        </Tela>
    )
}
