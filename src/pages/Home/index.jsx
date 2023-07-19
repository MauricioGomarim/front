import {  Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Brand } from "../../components/Brand";
import { Menu } from "../../components/Menu";
import { ButtonAddProd } from "../../components/ButtonAddProd";
import { Dashboard } from "../../components/Dashboard";
import { useState, useEffect } from "react"
import { PageCadastroProd } from "../Controle-Produtos/PageCadastroProd"
import { PageCadastroMarca } from "../Controle-Marcas/PageCadastroMarca"


import { ListagemProdutos } from "../Controle-Produtos/ListagemProdutos"
import { PageEditarProd } from "../Controle-Produtos/PageEditarProd"

import { ListagemMarcas } from "../Controle-Marcas/ListagemMarcas"



import { usePage } from "../../hook/pages"


export function Home() {

  const {page , setPage} = usePage()

  const renderContent = () => {

    if (page === 'cadastroProduto') {
      return <PageCadastroProd />;
    } 
    if (page === 'cadastroMarca') {
      return <PageCadastroMarca />;
    } 
    if (page === 'VerProd') {
      return <ListagemProdutos />;
    }

    if (page === 'VerMarca') {
      return <ListagemMarcas />;
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
