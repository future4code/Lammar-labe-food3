import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/login/Login';
import { CadastroEndereco } from '../pages/cadastro-endereco/CadastroEndereco';
import { Feed } from '../pages/feed/Feed';
import { MeuCarrinho } from '../pages/meu-carrinho/MeuCarrinho';
import { Signup } from '../pages/signup/Signup';
import { Restaurante } from '../pages/restaurante/Restaurante';
import { EditarCadastro } from '../pages/editar-cadastro/EditarCadastro';


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <Login/> }/>
            <Route path="/signup" element={ <Signup/> }/>
            <Route path="/cadastro-endereco" element={ <CadastroEndereco/> }/>
            <Route path="/feed" element={ <Feed/> }/>
            <Route path="/carrinho" element={ <MeuCarrinho/> }/>
            <Route path="/restaurante" element={ <Restaurante/> }/>
            <Route path="/editar-cadastro" element={ <EditarCadastro/> }/>
            
           
        </Routes>
    </BrowserRouter>
  );
}


