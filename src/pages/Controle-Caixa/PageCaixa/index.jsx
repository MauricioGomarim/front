import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";
import { Caixa } from "../../../components/Caixa";
import { Content, Container } from "./styles";
import foto from "../../../assets/placeholder-img.jpg";
import { Button } from "../../../components/Button";

import { api } from "../../../services/api";

import { Search } from "../../../components/Search";

import { useEffect, useState } from "react";

export function PageCaixa() {
  const [produtos, setProducts] = useState([]);
  const [search, setSearch] = useState([""]);
  const [total, setTotal] = useState(0);

  async function fetchProducts() {
    try {
      const response = await api.get(`/products?codigo=${search}`);

      updateProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  function updateProducts(newProducts) {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];

      newProducts.forEach((newProduct) => {
        const existingProductIndex = updatedProducts.findIndex(
          (product) => product.codigo === newProduct.codigo
        );

        if (existingProductIndex === -1) {
          updatedProducts.push({ ...newProduct, vezes: 1 });
        } else {
          updatedProducts[existingProductIndex].vezes += 1;
        }
      });

      return updatedProducts;
    });

    setTotal((prevTotal) => {
      const newTotal = newProducts.reduce((accumulator, newProduct) => {
        const productPrice = parseFloat(newProduct.price); // Converte o preço para número
        return accumulator + productPrice;
      }, 0);

      return prevTotal + newTotal;
    });
  }

  function notify() {}

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchProducts();
      setSearch("");
    }
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <Menu />
      <Header />
      <Brand />

      <Content>
        <div className="content-2">
          <Search
            placeholder="Digite o código do produto"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}
            value={search}
          />

          <div className="table-prod">
          {produtos.length ? (
            produtos.map((produto, index) => (
              <table>
                <thead>
                  <tr>
                    <th> </th>
                    <th>Imagem</th>
                    <th>Código</th>
                    <th>Nome</th>

                    <th>Preço</th>
                    <th>Tamanho</th>
                    <th>Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={index}>
                    <td>{produto.vezes}x</td>
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
                    <td>{produto.price}</td>
                    <td>{produto.size}</td>
                    <td>{produto.amount}</td>
                  </tr>
                </tbody>
              </table>
            ))
          ) : (
            <div className="nenhum-produto"><h1>Nenhum produto por aqui...</h1></div>
          )}
          </div>


        </div>
        <div className="content-1">
          <div className="finalize">
            <h1>Total: R${total}</h1>
            <Button title="Finalizar pedido" />
          </div>
        </div>
      </Content>
      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
