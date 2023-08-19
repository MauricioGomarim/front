import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Brand } from "../../components/Brand";
import { Menu } from "../../components/Menu";
import { Caixa } from "../../components/Caixa";
import { DesenvolvidoPor } from "../../components/DesenvolvidoPor";
import Swal from 'sweetalert2'
import { Dashboard } from "../../components/Dashboard";
import { useState, useEffect } from "react";



import { usePage } from "../../hook/pages";

export function Home() {
  const { page, setPage } = usePage();

  useEffect(() => {}, []);

  return (
    <Container>
      <Brand onClick={() => setPage("Dashboard")} />
      <Header />
      <Menu page={page} setPage={setPage} />
      <Content>Dash</Content>
      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
