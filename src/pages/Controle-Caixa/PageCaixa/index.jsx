import React from "react";
import Modal from "../../../components/Modal";

import { ContentForm, Form } from "../PageCaixa/styles";

import { BiSearchAlt2 } from "react-icons/bi";
import { RiCloseCircleFill } from "react-icons/ri";

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
import { InputField } from "../../../components/InputField";

import { api } from "../../../services/api";

import { Search } from "../../../components/Search";

import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

export function PageCaixa() {
  const [produtos, setProducts] = useState([]);
  const [clientes, setClientes] = useState([]);

  const [searchCodigo, setSearchCodigo] = useState([""]);

  const [nameClient, setNameClient] = useState();
  const [whatsClient, setWhatsClient] = useState();
  const [cpfClient, setCpfClient] = useState();
  const [enderecoClient, setEnderecoClient] = useState();
  const [bairroClient, setBairroClient] = useState();
  const [numeroClient, setNumeroClient] = useState();

  const [searchNome, setSearchNome] = useState("");
  const [produtosName, setSearchNomeModal] = useState([""]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [total, setTotal] = useState(0);

  const [selectedClient, setSelectedClient] = useState("");
  
  const navigate = useNavigate();


  const handleSelectChange = (event) => {
    const selectedName = event.target.value;
    const selectedClient = clientes.find(
      (client) => client.name === selectedName
    );
    setSelectedClient(selectedClient);
  };

  async function fetchClientes() {
    try {
      const response = await api.get(`/client`);

      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  }

  async function handleCadastrarClient() {
    try {
      await api.post("/client", {
        name: nameClient,
        whatsapp: whatsClient,
        cpf: cpfClient,
        bairro: "teste",
        numero: "test",
        endereco: enderecoClient,
      });
      toast.success("Cliente cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setModalIsOpen(false);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Erro ao cadastrar o cliente!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }

    
    fetchClientes();
    return;
  }

  async function fetchProducts(codigo) {
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

  function handleRemoveProduct(product) {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];

      const existingProductIndex = updatedProducts.findIndex(
        (productPrevious) => productPrevious.codigo === product.codigo
      );

      if (updatedProducts[existingProductIndex].vezes <= 1) {
        console.log("zerou");
        updatedProducts.splice(existingProductIndex, 1);
      } else {
        updatedProducts[existingProductIndex].vezes -= 1;
      }

      const newTotal = total - product.price;
      setTotal(newTotal);
      return updatedProducts;
    });
  }

  async function checkout(){

    if(!selectedClient){
      return toast.warning("Selecione um cliente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    try {
      await api.post("/checkout", {
        client: selectedClient,
        produtos,
        total
      });
      toast.success("Cliente cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setModalIsOpen(false);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Erro ao cadastrar o cliente!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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

    async function fetchClientes() {
      try {
        const response = await api.get(`/client`);

        setClientes(response.data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    }
    fetchClientes();
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
                icon={<BiSearchAlt2 />}
                placeholder="Código"
                onChange={(e) => setSearchCodigo(e.target.value)}
                onKeyPress={handleKeyPressCodigo}
                value={searchCodigo}
              />
            </div>
            <div className="barra-name">
              <Search
                icon={<BiSearchAlt2 />}
                placeholder="Nome do produto"
                onChange={(e) => setSearchNome(e.target.value)}
                value={searchNome}
              />

              <div
                className={`result-search ${
                  produtosName.length ? "" : "hidden"
                }`}
              >
                {produtosName.length ? (
                  produtosName.map((produto, index) => (
                    <a key={index} onClick={() => handleInsertProduto(produto)}>
                      <div className="img">
                        <img
                          src={
                            produto.image
                              ? `${api.defaults.baseURL}/files/${produto.image}`
                              : foto
                          }
                        />
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
            </div>
          </div>

          <div className="table-prod">
            <table>
              <thead>
                <tr>
                  <th>x</th>
                  <th>Estoque</th>
                  <th>Imagem</th>
                  <th>Código</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Tamanho</th>
                  <th>Exluir</th>
                </tr>
              </thead>
              <tbody>
                {produtos.length ? (
                  produtos.map((produto, index) => (
                    <tr key={index}>
                      <td>{produto.vezes}x</td>
                      <td>{produto.amount}</td>
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
                      <td>R$ {produto.price}</td>
                      <td>{produto.size}</td>

                      <td className="icon-excluir">
                        <button
                          type="button"
                          onClick={() => handleRemoveProduct(produto)}
                        >
                          <RiCloseCircleFill />
                        </button>
                      </td>
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
          <ContentForm>
            <h1>Checkout</h1>
            <p>Selecione o cliente</p>
            <Form>
              <div className="row1">
                <div className="selectField w-50">
                  <h1>Nome</h1>
                  <select id="select-nome" onChange={handleSelectChange}>
                    <option disabled selected>
                      Selecione...
                    </option>
                    {clientes.map((client) => (
                      <option value={client.name}>{client.name}</option>
                    ))}
                  </select>
                </div>

                <div className="w-50">
                  Whatsapp
                  <InputField readOnly value={selectedClient.whatsapp}/>
                </div>
                <div className="w-50">
                  CPF
                  <InputField readOnly value={selectedClient.cpf}/>
                </div>
                <div className="w-50">
                  Bairro
                  <InputField readOnly value={selectedClient.bairro}/>
                </div>
              </div>
              <div className="row3">
                <div className="w-100">
                  Bairro
                  <InputField readOnly value={selectedClient.bairro}/>
                </div>
                <div className="w-30">
                  Numero
                  <InputField readOnly value={selectedClient.numero}/>
                </div>
              </div>
            </Form>
          </ContentForm>
          <div className="finalize">
            <h1>Total: R${total}</h1>
            <div className="footer-checkout">
              <Button title="Cadastrar cliente" onClick={openModal} />
              <Button title="Finalizar pedido" onClick={checkout} />
            </div>
          </div>
        </div>
      </Content>
      <Caixa />
      <DesenvolvidoPor />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo de Modal"
      >
        <ContentForm>
          <Form>
            <h1>Cadastro de cliente</h1>
            <p>Preencha os dados do cliente</p>
            <div className="row1">
              <div className="w-50">
                Nome
                <InputField
                  onChange={(e) => setNameClient(e.target.value)}
                  value={nameClient}
                />
              </div>
              <div className="w-50">
                Whatsapp
                <InputField
                  type="number"
                  onChange={(e) => setWhatsClient(e.target.value)}
                  value={whatsClient}
                />
              </div>
              <div className="w-50">
                CPF
                <InputField
                  type="number"
                  onChange={(e) => setCpfClient(e.target.value)}
                  value={cpfClient}
                />
              </div>
              <div className="w-50">
                Endereço
                <InputField
                  onChange={(e) => setEnderecoClient(e.target.value)}
                  value={enderecoClient}
                />
              </div>

              <div className="w-50">
                Bairro
                <InputField
                  onChange={(e) => setBairroClient(e.target.value)}
                  value={bairroClient}
                />
              </div>

              <div className="w-50">
                Numero
                <InputField
                  type="number"
                  onChange={(e) => setNumeroClient(e.target.value)}
                  value={numeroClient}
                />
              </div>
            </div>
          </Form>

          <div className="footer-modal">
            <Button title="Fechar" onClick={closeModal} />
            <Button title="Cadastrar" onClick={handleCadastrarClient} />
          </div>
        </ContentForm>
      </Modal>
    </Container>
  );
}
