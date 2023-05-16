import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSuccessful = () => {
    const navigate = useNavigate();

    function logout(){
        navigate("/");
    }

    return ( 
    <div>
        <h1>Login Success!</h1>
        <button onClick={logout}>Logout</button>
    </div> 
    );
}
 
export default LoginSuccessful;