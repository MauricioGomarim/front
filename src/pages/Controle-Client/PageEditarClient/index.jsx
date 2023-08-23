


import { toast } from 'react-toastify';
import { ContentForm, Content , Form, Foto, Container } from "./styles";
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

export function PageEditarClient() {
  const { page, setPage } = usePage();
  const { id } = useParams();

  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cpf, setCPF] = useState("");
  const [bairro, setBairro] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");


  const navigate = useNavigate();

  

  async function handleEditar() {


    await api
      .put(`/client/${id}`, {name, whatsapp, cpf, bairro, endereco, numero})
      .catch((error) => {
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
          toast.error("Erro ao editar o produto!", {
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
      })
      .then(toast.success("Produto editado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }));
        navigate("/clientes")

    return;
  }

  async function handleExcluir() {
    try {
      await api.delete(`/products/${id}`);

      toast.success("Produto excluído com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      navigate("/produtos")
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
        toast.warning(error.response.data.message, {
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
        alert("");
        toast.warning("Erro ao excluir o produto!", {
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


  useEffect(() => {
    async function buscarDadosClientes() {
      const response = await api.get(`/client/${id}`);
      setData(response.data);

      const {
        name,
        whatsapp,
        cpf,
        bairro,
        endereco,
        numero
      } = response.data;


      setName(name);
      setWhatsapp(whatsapp);
      setCPF(cpf);
      setBairro(bairro);
      setEndereco(endereco);
      setNumero(numero);
      
    }
    buscarDadosClientes();

    async function fetchCategorys() {
      const responseBrand = await api.get(`/brand`);
      setBrands(responseBrand.data);

      const responseCategory = await api.get(`/category`);
      setCategories(responseCategory.data);
    }
    fetchCategorys();
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
            fontSize: "30px"
          }}
        >
          Editar cliente
        </h1>
        <ContentForm>

          <Form>
            <div className="row3">
            <div className="w-50">
            <InputField            
                title="Nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="w-50">
            
            <InputField
                mask="(00)00000-0000"
                title="Whatsapp"
                onChange={(e) => setWhatsapp(e.target.value)}
                value={whatsapp}
              />
            </div>           
                    
          
            </div>
            <div className="row3">

            <div className="w-50">
            <InputField
                mask="000.000.000-00"
                title="CPF"
                onChange={(e) => setCPF(e.target.value)}
                value={cpf}
              />
            </div>
                     
              <div className="w-50">
              <InputField
                
                title="Bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
              </div>
                        
            </div>


            <div className="row3">

            <div className="w-100">
              <InputField
              
                title="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
              </div>
                     
              <div className="w-30">
              <InputField
                mask="0000000"
                title="Numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
              </div>
             
             
            </div>
            <div className="row4">
          <Button title="Excluir" onClick={handleExcluir} />
          <Button title="Confirmar" type="button" onClick={handleEditar} />
          </div>

    
          </Form>

          
        </ContentForm>
      </Content>

      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
