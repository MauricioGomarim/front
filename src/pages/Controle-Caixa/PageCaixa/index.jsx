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
  const [searchCodigo, setSearchCodigo] = useState([""]);

  const [searchNome, setSearchNome] = useState([""]);
  const [produtosName, setSearchNomeModal] = useState([""]);

  const [total, setTotal] = useState(0);

  async function fetchProducts() {
    try {
      const response = await api.get(`/products?codigo=${searchCodigo}`);

      updateProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  function updateProducts(newProducts) {
    console.log(newProducts)
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

  const handleInsertProduto = (produto) => {
    updateProducts(produto.data);
    setSearchNome("");
  }

  const handleKeyPressCodigo = (event) => {
    if (event.key === "Enter") {
      fetchProducts();
      setSearchCodigo("");
    }
  };

  useEffect(() => {
    async function fetchProductsName() {
      try {
        const response = await api.get(`/caixa?title=${searchNome}`);

        setSearchNomeModal(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProductsName();
  }, [searchNome]);

  return (
    <Container>
      <Menu />
      <Header />
      <Brand />

      <Content>
        <div className="content-2">
          <div className="busca">
            <div className="barra-cod">
              <Search
                placeholder="Código"
                onChange={(e) => setSearchCodigo(e.target.value)}
                onKeyPress={handleKeyPressCodigo}
                value={searchCodigo}
              />
            </div>
            <div className="barra-name">
              <Search
                placeholder="Nome do produto"
                onChange={(e) => setSearchNome(e.target.value)}
                value={searchNome}
              />

              {produtosName.length && (
                <div className="result-search">
                  {produtosName.length ? (
                    produtosName.map((produto) => (
                      <a onClick={() => handleInsertProduto(produto)}>
                        <div class="img">
                          <img src={foto} />
                        </div>
                        <div className="name-prod">
                          <h1>{produto.title}</h1>
                        </div>
                      </a>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              )}
            </div>
          </div>

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
              <div className="nenhum-produto">
                <h1>Nenhum produto por aqui...</h1>
              </div>
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
