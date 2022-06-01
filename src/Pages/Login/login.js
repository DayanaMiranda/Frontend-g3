import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Link, useNavigate  } from 'react-router-dom';
import Textfield from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import './login.css';
import axios from './servicesLogin/api';
import useAuth from "../Login/hooks/useAuth";

const validationSchema = yup.object().shape({
  email: yup.string().email('Digite um email válido').required('*Campo obrigatório'),
  password: yup.string().min(6, 'A senha precisa ter 6 ou mais caracteres').required('*Campo obrigatório'),
});



export default function Login() {

  const { setIsLogin, setUser } = useAuth();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios.post('/login', {       
        email: values.email,
        password: values.password
      })
      .then(function (response) {
        localStorage.setItem("@token_user", response.data.token);
        setUser(response.data)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });

      setIsLogin(true)
      navigate(`../`, { replace: true })
    
    },
    validationSchema: validationSchema
  });

  return (

    <div className="container-login">

      
      <form className="login-form" onSubmit={formik.handleSubmit}>

      <h1 className="login-title">Iniciar Sessão</h1>
      
        <Textfield
          id="email"          
          name="email"
          label="Email"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.email && formik.errors.email}          
        />

        <Textfield
          id="password"
          type="password"
          name="password"
          label="Senha"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button type="submit" className="btn-login" variant="contained">Enviar</Button>
        
        <p className="link-register">Ainda não tem conta? <Link to="/Register">Registre-se</Link></p>
      </form>
    </div>

    

  );
}
