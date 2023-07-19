import { Container } from "./styles";
import foto from "../../../assets/brand.jpeg";
import { Button } from "../../../components/Button";
import { usePage } from "../../../hook/pages";
import { api } from "../../../services/api";

import { useEffect, useState } from "react";

export function ListagemProdutos() {
  const { page, setPage } = usePage();
  const [produtos, setProducts] = useState([""]);

  console.log(produtos);
  function handleSetPage() {
    setPage("Editar");
    return;
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products?title=`);
      setProducts(response.data);
    }
    fetchProducts();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th style={{ width: "100px" }}>Imagem</th>
            <th style={{ width: "100px" }}>Código</th>
            <th>Nome</th>
            <th style={{ width: "150px" }}>Preço</th>
            <th style={{ width: "100px" }}>Tamanho</th>
            <th style={{ width: "150px" }}>Quantidade</th>
            <th style={{ width: "150px" }}>Ação</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr>
              <td>
                <div>
                  {produto.image ? (
                    <img src={`${api.defaults.baseURL}/files/${produto.image}`} />
                  ) : (
                    <img src={foto} />
                  )}
                </div>
              </td>
              <td>000{produto.id}</td>
              <td>{produto.title}</td>
              <td>R$ {produto.price}</td>
              <td>{produto.size}</td>
              <td>{produto.amount}</td>
              <td>
                <Button
                  title="Editar"
                  style={{ fontSize: "15px" }}
                  onClick={handleSetPage}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
