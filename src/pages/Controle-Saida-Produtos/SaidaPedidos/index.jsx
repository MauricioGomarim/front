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

export function SaidaPedidos() {
  const [saida, setSaida] = useState([""]);
  const [search, setSearch] = useState([""]);

  useEffect(() => {
    async function fetchClients() {
      const response = await api.get(`/saida-produtos?title=${search}`);
      setSaida(response.data);
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
              <th style={{ width: "100px" }}>ID Saida</th>
              <th style={{ width: "100px" }}>Nome</th>
              <th style={{ width: "100px" }}>Nome produto</th>
              <th style={{ width: "200px" }}>Preço</th>

              <th style={{ width: "200px" }}>Quantidade</th>
              <th style={{ width: "100px" }}>Data</th>
              <th style={{ width: "150px" }}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {saida.length > 0 ? (
              saida.map((client, index) => {

                let createdAtDate;

                if (client.created_at instanceof Date) {
                  createdAtDate = client.data;
                } else if (typeof client.data === 'string') {
                  // Tente analisar a string em uma data
                  const parsedDate = Date.parse(client.data);
            
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
                    <td>{client.historico_compra_id > 0 ? client.historico_compra_id : "--"}</td>
                    <td>{client.name}</td>
                    <td>{client.title}</td>
                    <td>{client.price > "" ? client.price : "--"}</td>
                    <td>{client.quantidade > "" ? client.quantidade : "--"}</td>
                    <td>{formattedDate}</td>
                    <td>
                      <Link to={`/editar-client/${client.id}`}>Ver</Link>
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
