import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { Caixa } from "../../../components/Caixa";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";
import { toast } from 'react-toastify';

import { ContentForm, Form, Container } from "./styles";
import { InputField } from "../../../components/InputField/index";
import { Button } from "../../../components/Button";
import { useNavigate, useParams  } from "react-router-dom";
import { api } from "../../../services/api";

import { useState, useEffect } from "react";

export function PageEditarMarca() {
  const [marca, setMarca] = useState("");


  const { id } = useParams();
  const navigate = useNavigate();

  async function handleEditar() {

    try {
      await api.put(`/brand/${id}`, { marca });

      toast.success("Produto editado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      navigate("/marcas")
      
    } catch (error) {
      if (error.response) {

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
          return
      } else {
        toast.warning("Erro ao editada essa marca!", {
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
    async function fetchBrands() {
      const response = await api.get(`/brand/${id}`);
      setMarca(response.data.title);
    }
    fetchBrands();
  }, []);

  return (
    <Container>
      <Brand />
      <Menu />
      <Header />

      <ContentForm>
        <h1
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            color: "black",
            fontSize: "30px",
          }}
        >
          Editar marca
        </h1>
        <Form>
          <div className="row2">
            <InputField
              title="Marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
            <Button
              title="Confirmar"
              onClick={handleEditar}
              type="button"
              style={{ marginTop: "auto" }}
            />
          </div>
        </Form>
      </ContentForm>
      <Caixa />

      <DesenvolvidoPor />
    </Container>
  );
}
