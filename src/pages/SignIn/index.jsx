import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Logo, Form, Content } from "./styles";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";

import { useAuth } from "../../hook/auth"

import {useState} from "react"

import logo from "../../assets/logo-cortada.png";

export function SignIn() {

const [email, setEmail] = useState();
const [password, setPassword] = useState();

const { signIn } = useAuth();


function handleSignIn() {
  signIn({email, password});
}

  
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} />
        </Logo>

        <Form>
          <h1>Faça login</h1>
          <InputField placeholder="Email" type="text" widthField={{width: "100%"}} onChange={ (e) => setEmail(e.target.value)} />
          <InputField placeholder="Senha" type="password" widthField={{width: "100%"}} onChange={ (e) => setPassword(e.target.value)}/>
          <Button title="Entrar" colorButton="white" colorFont="052E59" type="button" onClick={handleSignIn}/>
        </Form>
      </Content>
      <ToastContainer />
    </Container>
  );
}
