import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import {DesenvolvidoPor} from "../../../components/DesenvolvidoPor"
import { Caixa } from "../../../components/Caixa";

import { Link } from "react-router-dom";
import { Content, Container } from "./styles";
import foto from "../../../assets/placeholder-img.jpg";
import { Button } from "../../../components/Button";
import { usePage } from "../../../hook/pages";
import { api } from "../../../services/api";

import {Search} from "../../../components/Search"

import { useEffect, useState } from "react";

export function ListagemProdutos() {

  const [produtos, setProducts] = useState([""]);
  const [search, setSearch] = useState([""]);



  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products?title=${search}`);
      setProducts(response.data);
    }
    fetchProducts();
  }, [search]);

  return (
    <Container>
      <Menu />
      <Header />
      <Brand />
      <Search onChange={(e) => setSearch(e.target.value)}/>
      <Content>

        <table>
          <thead>
            <tr>
            <th style={{ width: "60px" }}>ID</th>
              <th style={{ width: "100px" }}>Imagem</th>
              <th style={{ width: "100px" }}>Código</th>
              <th>Nome</th>
              <th style={{ width: "300px" }}>Descrição</th>

              <th style={{ width: "100px" }}>Preço</th>
              <th style={{ width: "10px" }}>Tamanho</th>
              <th style={{ width: "10px" }}>Quantidade</th>
              <th style={{ width: "150px" }}>Ação</th>
            </tr>
          </thead>
          <tbody>
      
            {produtos.length > 0 ? produtos.map((produto, index) => (
              <tr key={index}>
                <td>00{produto.id}</td>
                <td>
                  <div className="foto">
                    {produto.image ? (
                      <img
                        src={`${api.defaults.baseURL}/files/${produto.image}`}
                      />
                    ) : (
                      <img src={foto} />
                    )}
                  </div>
                </td>
                <td>{produto.codigo}</td>
                <td>{produto.title}</td>
                <td>{produto.description}</td>
                <td>R$ {produto.price}</td>
                <td>{produto.size}</td>
                <td>{produto.amount}</td>
                <td>
                  <Link to={`/editar-prod/${produto.id}`}>Editar</Link>

                </td>
              </tr>
            )) : (
              <div>Nenhum produto encontrado.</div>
            )}
          </tbody>
        </table>
      </Content>
      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
