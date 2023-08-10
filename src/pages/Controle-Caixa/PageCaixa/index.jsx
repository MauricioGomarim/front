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

  const [searchNome, setSearchNome] = useState("");
  const [produtosName, setSearchNomeModal] = useState([""]);

  const [total, setTotal] = useState(0);

  async function fetchProducts(codigo) {
    console.log(produtosName);
    try {
      let response;

      if (searchCodigo != "") {
        response = await api.get(`/products?codigo=${searchCodigo}`);
      }

      if (searchNome != "") {
        response = await api.get(`/products?codigo=${codigo}`);
      }

      updateProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  function updateProducts(newProduct) {
    console.log(newProduct);
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      newProduct.forEach((newProductItem) => {
        const existingProductIndex = updatedProducts.findIndex(
          (product) => product.codigo === newProductItem.codigo
        );

        if (existingProductIndex === -1) {
          updatedProducts.push({ ...newProductItem, vezes: 1 });
        } else {
          updatedProducts[existingProductIndex].vezes += 1;
        }
      });

      const newTotal = updatedProducts.reduce((accumulator, product) => {
        const productPrice = parseFloat(product.price);
        return accumulator + productPrice * product.vezes;
      }, 0);

      setTotal(newTotal);
      return updatedProducts;
    });
  }

  const handleInsertProduto = (produto) => {
    fetchProducts(produto.codigo);
    setSearchNome("");
  };

  function handleKeyPressCodigo(event) {
    if (event.key === "Enter") {
      fetchProducts();
      setSearchCodigo("");
    }
  }

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
                    produtosName.map((produto, index) => (
                      <a
                        key={index}
                        onClick={() => handleInsertProduto(produto)}
                      >
                        <div className="img">
                          <img src={foto} />
                        </div>
                        <div className="name-prod">
                          <h1>{produto.title}</h1>
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="hidden"></div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="table-prod">
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
                {produtos.length ? (
                  produtos.map((produto, index) => (
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
                  ))
                ) : (
                  <tr className="nenhum-produto">
                    <></>
                  </tr>
                )}
              </tbody>
            </table>
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
