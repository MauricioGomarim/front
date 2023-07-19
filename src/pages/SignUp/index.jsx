import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, Form, Content } from "./styles";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { api } from "../../services/api"

import {useState} from "react"

import logo from "../../assets/logo-cortada.png";

export function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function handleSignUp() {
    // if(!name || !email || !password){
    //   return alert("Preencha todos os campos!")
    // }

    api.post("/users", {name, email, password}).then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/");
    }).catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar")
      }
    })
  }



  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} />
        </Logo>
        <Form>
          <h1>Faça seu cadastro</h1>
          <InputField placeholder="Nome" widthField={{width: "100%"}} type="text" onChange={(e) => setName(e.target.value)}/>
          <InputField placeholder="Email" widthField={{width: "100%"}} type="email" onChange={(e) => setEmail(e.target.value)}/>
          <InputField placeholder="Senha" widthField={{width: "100%"}} type="password" onChange={(e) => setPassword(e.target.value)}/>
          <Button title="Entrar" colorButton="#052E59" colorFont="#052E59" onClick={handleSignUp} type="button"/>
        </Form>
      </Content>
    </Container>
  );
}
