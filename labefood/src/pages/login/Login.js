import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToFeed, goToSignUp } from '../../Routes/Coordinator';

export const Login = () => {
    const navigate = useNavigate()

    return (
        <div>
            <>Login</>
            <button onClick={() => {goToFeed(navigate)}}>Feed</button>
            <button onClick={() => {goToSignUp(navigate)}}>Signup</button>
        </div>

    )


}