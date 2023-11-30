import { useState } from "react";
import LoginForm from "./components/login-form/loginform";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";

interface Props {    
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const LoginPage = ({setIsLoggedIn} : Props) => {

    return(
        <div className = "container">
            <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
        </div>
    );
}

export default LoginPage;