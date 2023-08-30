import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { Caixa } from "../../../components/Caixa";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";

import { ContentForm, Form, Container } from "./styles";
import { InputField } from "../../../components/InputField/index";
import { Button } from "../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

import { useState, useEffect } from "react";

export function PageEditarCategoria() {
  const [categoria, setCategoria] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  async function handleEditar() {
    try {
      await api.put(`/category/${id}`, { categoria });

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
      navigate("/categorias");
      return;
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
        return;
      } else {
        toast.warning("Erro ao cadastrar essa categoria!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
    }
  }

  useEffect(() => {
    async function fetchBrands() {
      const response = await api.get(`/category/${id}`);
      setCategoria(response.data);
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
              placeholder="Marca"
              title="Marca"
              value={categoria.title}
              onChange={(e) => setCategoria(e.target.value)}
            />
            <Button
              title="Editar"
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
