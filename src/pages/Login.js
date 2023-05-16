import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    function goodLogin(){
        navigate("/login/success");
    }

    function badLogin(){
        navigate("/login/failed");
    }

    return ( 
    <div>
        <h1>Login</h1>
        <button onClick={goodLogin}>Good Login</button>
        <button onClick={badLogin}>Bad Login</button>
    </div> 
    );
}
 
export default Login;