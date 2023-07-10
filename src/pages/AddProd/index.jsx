import { Container, Form, Content } from "./styles"

import { Header } from "../../components/Header";
import { Brand } from "../../components/Brand";
import { Menu } from "../../components/Menu";
import { ButtonAddProd } from "../../components/ButtonAddProd";

export function AddProd(){
    return(
        <Container>
        <Brand />
        <Header />
        <Menu />
        <Content>
          <h1>Cadastrar Produto</h1>
        </Content>
        <ButtonAddProd />
      </Container>
    )
}