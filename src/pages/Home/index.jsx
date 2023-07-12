import {  Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Brand } from "../../components/Brand";
import { Menu } from "../../components/Menu";
import { ButtonAddProd } from "../../components/ButtonAddProd";
import { Dashboard } from "../../components/Dashboard";
import { useState, useEffect } from "react"
import { PageCadastroProd } from "../../components/PageCadastroProd"
import { ListagemProdutos } from "../../components/ListagemProdutos"
import { PageEditarProd } from "../../components/PageEditarProd"


import { usePage } from "../../hook/pages"


export function Home() {

  const {page , setPage} = usePage()

  const renderContent = () => {

    if (page === 'cadastroProduto') {
      return <PageCadastroProd />;
    } 
    if (page === 'VerProd') {
      return <ListagemProdutos />;
    }
    if (page === 'Editar') {
      return <PageEditarProd />;
    }
    else {
      return <Dashboard />
    }
  };
  
  console.log(page)
  useEffect(() => {

  }, []);

  return (
    <Container>
      <Brand onClick={() => setPage('Dashboard')} />
      <Header />
      <Menu page={page} setPage={setPage} />
      <Content>
       {renderContent()}
      </Content>
      <ButtonAddProd />
    </Container>
  );
}
