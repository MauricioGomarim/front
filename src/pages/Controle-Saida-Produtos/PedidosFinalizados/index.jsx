import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

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

export function PedidosFinalizados() {
  const [pedidos, setPedidos] = useState([""]);
  const [search, setSearch] = useState([""]);

  useEffect(() => {
    async function fetchPedidos() {
      const response = await api.get(`/pedidos-finalizados?title=${search}`);
      setPedidos(response.data);
    }
    fetchPedidos();
  }, [search]);

  return (
    <Container>
      <Menu />
      <Header />
      <Brand />
      <Search
        placeholder="Procurar por pedido"
        title="Pedidos finalizados"
        icon={<BiSearchAlt2 />}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Content>
        <table>
          <thead>
            <tr>
              <th style={{ width: "60px" }}>ID</th>
              <th style={{ width: "100px" }}>Nome</th>
              <th style={{ width: "100px" }}>Tipo pagamento</th>
              <th style={{ width: "100px" }}>Valor</th>
              <th style={{ width: "100px" }}>Data</th>
              <th style={{ width: "150px" }}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.length > 0 ? (
              pedidos.map((pedido, index) => {
                let createdAtDate;

                if (pedido.data instanceof Date) {
                  createdAtDate = pedido.data;
                } else if (typeof pedido.data === "string") {
                  // Tente analisar a string em uma data
                  const parsedDate = Date.parse(pedido.data);

                  if (!isNaN(parsedDate)) {
                    createdAtDate = new Date(parsedDate);
                  }
                }

                const formattedDate = createdAtDate
                  ? format(createdAtDate, "dd/MM/yyyy HH:mm", { locale: ptBR })
                  : "--"; // Data inválida ou não definida

                return (
                  <tr key={index}>
                    <td>{pedido.id}</td>
                    <td>{pedido.name}</td>
                    <td>
                      {pedido.tipo_pagamento ? pedido.tipo_pagamento : "--"}
                    </td>
                    <td>{pedido.valor > 0 ? pedido.valor : "--"}</td>
                    <td>{formattedDate}</td>
                    <td>
                      <Link to={`/ver-pedido/${pedido.id}`}>Ver pedido</Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>Nenhum pedido encontrado.</div>
            )}
          </tbody>
        </table>
      </Content>
      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
