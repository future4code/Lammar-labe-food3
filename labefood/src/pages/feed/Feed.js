import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToRestaurante } from '../../rotas/Coordinator';


export const Feed = () => {
    const navigate = useNavigate()

    return (
        <div>
            <>Feed</>
            <button onClick={() => { goToRestaurante(navigate) }}>Restaurante</button>

        </div>

    )


}