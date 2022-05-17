import React from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/Input/MyInput";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;

        signin(user, () => navigate(fromPage, {replace: true}));
    }

    return (
        <div>
            <h1>please enter the system</h1>
            <form onSubmit={handleSubmit}>
                <MyInput name="username" type="text" placeholder="login"/>
                <MyInput type="password" placeholder="password"/>
                <MyButton >enter</MyButton>
            </form>
        </div>
    );
};

export default Login;