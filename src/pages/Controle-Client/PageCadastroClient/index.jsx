import { toast } from "react-toastify";
import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { Caixa } from "../../../components/Caixa";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";

import { ContentForm, Content, Form, Foto, Container } from "./styles";
import { InputField } from "../../../components/InputField";
import { Button } from "../../../components/Button";
import foto from "../../../assets/placeholder-img.jpg";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

import { useState, useEffect } from "react";

export function PageCadastroClient() {
  const [nameClient, setNameClient] = useState();
  const [whatsClient, setWhatsClient] = useState();
  const [cpfClient, setCpfClient] = useState();
  const [enderecoClient, setEnderecoClient] = useState();
  const [bairroClient, setBairroClient] = useState();
  const [numeroClient, setNumeroClient] = useState();

  const navigate = useNavigate();

  async function handleCadastrar() {
    // if (!codigo) {
    //   return toast.warn("Campo de código obrigatorio!", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }

    // if (!price) {
    //   return toast.warn("Campo de preço obrigatorio!", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }

    try {
      await api.post("/client", {
        name: nameClient,
        whatsapp: whatsClient,
        cpf: cpfClient,
        bairro: bairroClient,
        numero: numeroClient,
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

      navigate("/clientes");
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

    return;
  }

  return (
    <Container>
      <Brand />
      <Header />
      <Menu />
      <Content>
        <h1
          style={{
            paddingLeft: "50px",
            color: "black",
            fontSize: "30px",
          }}
        >
          Cadastrar cliente
        </h1>
        <ContentForm>
          <Form>
            <div className="row1">
              <div className="w-30">
                <InputField
                  title="Nome"
                  onChange={(e) => setNameClient(e.target.value)}
                />
              </div>
              <div className="w-30">
                <InputField
                  mask="(00) 00000-0000"
                  title="Whatsapp"
                  onChange={(e) => setWhatsClient(e.target.value)}
                />
              </div>
              <div className="w-30">
                <InputField
                  mask="000.000.000-00"
                  title="CPF"
                  onChange={(e) => setCpfClient(e.target.value)}
                />
              </div>
            </div>
            <div className="row1">
              <div className="w-30">
                <InputField
                  title="Bairro"
                  onChange={(e) => setBairroClient(e.target.value)}
                />
              </div>

              <div className="w-30">
                <InputField
                  title="Endereço"
                  onChange={(e) => setEnderecoClient(e.target.value)}
                />
              </div>

              <div className="w-30">
                <InputField
                mask="000000"
                  title="Numero"
                  onChange={(e) => setNumeroClient(e.target.value)}
                />
              </div>
            </div>

            <div className="row1">
              <div className="w-100 button">
                <Button
                  title="Cadastrar"
                  type="button"
                  onClick={handleCadastrar}
                />
              </div>
            </div>
          </Form>
        </ContentForm>
      </Content>
      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
