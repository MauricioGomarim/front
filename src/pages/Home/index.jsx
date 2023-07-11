import {  Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Brand } from "../../components/Brand";
import { Menu } from "../../components/Menu";
import { ButtonAddProd } from "../../components/ButtonAddProd";
import { Dashboard } from "../../components/Dashboard";
import { useState, useEffect } from "react"
import { PageCadastroProd } from "../../components/PageCadastroProd"
import { ListagemProdutos } from "../../components/ListagemProdutos"


export function Home() {

  const [page, setPage] = useState('dashboard')

  const renderContent = () => {

    if (page === 'cadastroProduto') {
      return <PageCadastroProd />;
    } 
    if (page === 'dashboard') {
      return <Dashboard />;
    }

    if (page === 'Cadastro') {
      return 'Cadastro';
    }
  };
  
  useEffect(() => {

  }, []);

  return (
    <Container>
      <Brand />
      <Header />
      <Menu page={page} setPage={setPage} />
      <Content>
      <ListagemProdutos />
       {/* {renderContent()} */}
      </Content>
      <ButtonAddProd />
    </Container>
  );
}
