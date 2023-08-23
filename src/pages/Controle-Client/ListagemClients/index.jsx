import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";
import { Caixa } from "../../../components/Caixa";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Content, Container } from "./styles";
import foto from "../../../assets/placeholder-img.jpg";
import { Button } from "../../../components/Button";
import { usePage } from "../../../hook/pages";
import { api } from "../../../services/api";

import { Search } from "../../../components/Search";

import { useEffect, useState } from "react";

export function ListagemClients() {
  const [clientes, setClientes] = useState([""]);
  const [search, setSearch] = useState([""]);

  useEffect(() => {
    async function fetchClients() {
      const response = await api.get(`/client?title=${search}`);
      setClientes(response.data);
    }
    fetchClients();
  }, [search]);

  return (
    <Container>
      <Menu />
      <Header />
      <Brand />
      <Search
        icon={<BiSearchAlt2 />}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Content>
        <table>
          <thead>
            <tr>
              <th style={{ width: "60px" }}>ID</th>
              <th style={{ width: "100px" }}>Nome</th>
              <th style={{ width: "100px" }}>Whatsapp</th>
              <th style={{ width: "100px" }}>CPF</th>
              <th style={{ width: "200px" }}>Bairro</th>

              <th style={{ width: "200px" }}>Endereço</th>
              <th style={{ width: "100px" }}>Numero</th>

              <th style={{ width: "150px" }}>Data cadastro</th>
              <th style={{ width: "150px" }}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length > 0 ? (
              clientes.map((client, index) => {

                let createdAtDate;

                if (client.created_at instanceof Date) {
                  createdAtDate = client.created_at;
                } else if (typeof client.created_at === 'string') {
                  // Tente analisar a string em uma data
                  const parsedDate = Date.parse(client.created_at);
            
                  if (!isNaN(parsedDate)) {
                    createdAtDate = new Date(parsedDate);
                  }
                }
            
                const formattedDate = createdAtDate
                  ? format(createdAtDate, "dd/MM/yyyy HH:mm", { locale: ptBR })
                  : '--'; // Data inválida ou não definida
            

                return (
                  <tr key={index}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.whatsapp > 0 ? client.whatsapp : "--"}</td>
                    <td>{client.cpf > 0 ? client.cpf : "--"}</td>
                    <td>{client.bairro}</td>
                    <td>{client.endereco > "" ? client.endereco : "--"}</td>
                    <td>{client.numero > "" ? client.numero : "--"}</td>
                    <td>{formattedDate}</td>
                    <td>
                      <Link to={`/editar-client/${client.id}`}>Editar</Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>Nenhum client encontrado.</div>
            )}
          </tbody>
        </table>
      </Content>
      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
