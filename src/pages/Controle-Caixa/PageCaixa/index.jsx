import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";
import { Caixa } from "../../../components/Caixa";

import { Link } from "react-router-dom";
import { Content, Container } from "./styles";
import foto from "../../../assets/placeholder-img.jpg";
import { Button } from "../../../components/Button";
import { usePage } from "../../../hook/pages";
import { api } from "../../../services/api";

import { Search } from "../../../components/Search";

import { useEffect, useState } from "react";

export function PageCaixa() {
  const { page, setPage } = usePage();
  const [produtos, setProducts] = useState([]);
  const [search, setSearch] = useState([""]);

  async function fetchProducts() {
    try {
      const response = await api.get(`/products?codigo=${search}`);
  
      const existingProduct = produtos.find((produto) => produto.codigo === response.data.codigo);

      if (!existingProduct) {
        // Adiciona o novo produto apenas se não existir no array
        setProducts((prevProducts) => [...prevProducts, ...response.data]);
      }
   
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setSearch(event.target.value);
      fetchProducts();
    }
  };

  useEffect(() => {


  }, []);

  return (
    <Container>
      <Menu />
      <Header />
      <Brand />

      <Content>
        <div className="content-2">
          <Search placeholder="Digite o código do produto" onChange={(e) => setSearch(e.target.value)} 
          onKeyPress={handleKeyPress}/>
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
            
            {
              produtos.length ? (
                produtos.map((produto, index) => (
                <tr key={index}>
                    <td>1x</td>
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
                <h1>Nenhum produto bipado</h1>
              )
            
            }

            </tbody>
          </table>
        </div>
        <div className="content-1">
          <div className="finalize">
            <h1>Total: R$ 400,00</h1>
            <Button title="Finalizar pedido" />
          </div>
        </div>
      </Content>
      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
