import { toast } from "react-toastify";
import { ContentForm, Content, Form, Foto, Container } from "./styles";
import { InputField } from "../../../components/InputField";
import { Button } from "../../../components/Button";
import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { Caixa } from "../../../components/Caixa";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";

import { api } from "../../../services/api";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import foto from "../../../assets/placeholder-img.jpg";
import { usePage } from "../../../hook/pages";
import { BiFontSize } from "react-icons/bi";

export function VerPedido() {
  const { page, setPage } = usePage();
  const { id } = useParams();

  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [valor, setValor] = useState("");
  const [tipoPagamento, setTipoPagamento] = useState("");
  const [horaPagamento, setHoraPagamento] = useState("");


  console.log(valor)
  const navigate = useNavigate();



  useEffect(() => {
    async function buscarDadosCliente() {
      const response = await api.get(`/pedidos-finalizados/${id}`);
      console.log("response", response.data)


      setData(response.data);
      
      const { name, valor, tipo_pagamento, hora} = response.data;
      
      
      setName(name);
      setValor(valor);
      setTipoPagamento(tipo_pagamento);
      setHoraPagamento(hora);
      

    }

    buscarDadosCliente();

    async function buscarProdutosCliente() {
      const response = await api.get(`/client/${id}`);
      setData(response.data);

      const { name, whatsapp, cpf, bairro, endereco, numero } = response.data;

      setName(name);
      setWhatsapp(whatsapp);
      setCPF(cpf);
      setBairro(bairro);
      setEndereco(endereco);
      setNumero(numero);
    }

    async function fetchCategorys() {
      const responseBrand = await api.get(`/brand`);
      setBrands(responseBrand.data);

      const responseCategory = await api.get(`/category`);
      setCategories(responseCategory.data);
    }
 
  }, []);

  return (
    <Container>
      <Brand />
      <Header />
      <Menu page={page} setPage={setPage} />
      <Content>
        <h1
          style={{
            paddingLeft: "50px",
            color: "black",
            fontSize: "30px",
          }}
        >
          Pedido finalizado
        </h1>
        <ContentForm>
          <Form>
            <div className="row1">
              <div className="w-100">
                <InputField
                  title="Nome"
                  readOnly
                  value={name}
                />
              </div>

              
              <div className="w-100">
                <InputField
                  title="Tipo pagamento"
                  readOnly
                  value={tipoPagamento}
                />
              </div>
              

              <div className="w-100">
                <InputField
                  title="Valor"
                  readOnly
                  value={valor}
                />
              </div>

              <div className="w-100">
                <InputField
                  title="Data"
                  readOnly
                  value={horaPagamento}
                />
              </div>
            </div>

          </Form>
          <div class="listagem-produtos">

          </div>
        </ContentForm>
      </Content>

      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
