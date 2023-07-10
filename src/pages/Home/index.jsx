import {  Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Brand } from "../../components/Brand";
import { Menu } from "../../components/Menu";
import { ButtonAddProd } from "../../components/ButtonAddProd";
import { Dashboard } from "../../components/Dashboard";
import { VerProd } from "../../components/VerProd";
import { useState, useEffect } from "react"

export function Home() {

  const [page, setPage] = useState('dashboard')

  const renderContent = () => {

    if (page === 'VerProd') {
      return <VerProd />;
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
       {renderContent()}
      </Content>
      <ButtonAddProd />
    </Container>
  );
}
