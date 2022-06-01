import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import Textfield from '@material-ui/core/TextField';
import './register.css'
import Button from '@mui/material/Button';
import axios from '../Login/servicesLogin/api'



const validationSchema = yup.object().shape({
    name: yup.string().min(2, "O nome precisa ter ao menos 2 caracteres").required("O nome é obrigatório"),
    lastname: yup.string().min(2, "O sobrenome precisa ter ao menos 2 caracteres").required("O sobrenome é obrigatório"),
    email: yup.string().email("Hmmmm.. esse email não parece válido").required("O email é obrigatório"),
    confirmEmail: yup.string().email("Hmmmm.. esse email não parece válido").required("").oneOf([yup.ref('email'), null], "Os emails não coincidem"),
    password: yup.string().min(6, "A senha precisa ter 6 ou mais caracteres").required("A senha é obrigatória"),
    confirmPassword: yup.string().required("").oneOf([yup.ref('password'), null], 'As senhas não coincidem'),
});


export default function Register() {

    const formik = useFormik({
        initialValues: {
            name: "",
            lastname: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: (values, {resetForm}) => {
            axios.post('/v1/users', {
                name: values.name,
                lastname: values.lastname,
                email: values.email,
                password: values.password
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              resetForm({values:''});
        },
        validationSchema: validationSchema
    })

    return (
        <div className="container-register">
            <h1 className="register-title">Criar Conta</h1>
            <form className="register-form" onSubmit={formik.handleSubmit}>
                <div id="nameandlastname">
                    <Textfield
                        id="name"
                        name="name"
                        label="Nome"
                        margin="normal"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        onBlur={formik.handleBlur} 
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <Textfield
                        id="lastname"
                        name="lastname"
                        label="Sobrenome"
                        margin="normal"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                        onBlur={formik.handleBlur} 
                        helperText={formik.touched.lastname && formik.errors.lastname}
                    />
                </div>

                <Textfield
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    margin="normal"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    onBlur={formik.handleBlur} 
                    helperText={formik.touched.email && formik.errors.email}
                />

                <Textfield
                    id="confirmEmail"
                    name="confirmEmail"
                    label="Confirmar Email"
                    margin="normal"
                    value={formik.values.confirmEmail}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmEmail && Boolean(formik.errors.confirmEmail)}
                    onBlur={formik.handleBlur} 
                    helperText={formik.touched.confirmEmail && formik.errors.confirmEmail}
                />

                <Textfield
                    id="password"
                    name="password"
                    label="Senha"
                    type="password" 
                    margin="normal"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    onBlur={formik.handleBlur} 
                    helperText={formik.touched.password && formik.errors.password}
                />

                <Textfield
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirmar Senha"
                    type="password"
                    margin="normal"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    onBlur={formik.handleBlur} 
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />

                <Button type="submit" className="button-register" variant="contained">Criar conta</Button>
                <p className="link-login">Já tem uma conta? <Link to="/Login">Iniciar sessão</Link></p>
            </form>
        </div>
    );
}

