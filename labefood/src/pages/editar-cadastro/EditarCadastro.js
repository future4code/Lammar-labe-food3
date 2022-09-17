import React from 'react'

export const EditarCadastro = () => {

    return (
        <div>
            <h1>Editar Cadastro</h1>
            <input
             name="name"
             id="name"
             type="name"
             placeholder="Nome"
             required
            ></input>
            <input
             name="email"
             id="email"
             type="email"
             placeholder="E-mail"
             required
            ></input>
            <input
             name="cpf"
             id="cpf"
             type="cpf"
             placeholder="CPF"
             required
            ></input>
            <button>salvar</button>
        </div>
    )
}