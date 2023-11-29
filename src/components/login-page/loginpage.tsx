import { useState } from "react";
import LoginForm from "./components/login-form/loginform";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";

export default function LoginPage() {

    return(
        <div className = "container">
            <LoginForm></LoginForm>
        </div>
    );
}