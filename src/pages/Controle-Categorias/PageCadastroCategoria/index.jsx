import { toast } from 'react-toastify';
import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { Caixa } from "../../../components/Caixa";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";

import { ContentForm, Form, Container } from "./styles";
import { InputField } from "../../../components/InputField/index";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

import { useState, useEffect } from "react";

export function PageCadastroCategoria() {
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  async function handleCadastrar() {
    try {
      await api.post("/category", { category });
      toast.success('Categoria cadastrada com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigate('/categorias');
      return;
    } catch (error) {
      if (error.response) {
        return toast.warn(error.response.data.message, {
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
        return toast.error('Erro ao cadastrar essa categoria!', {
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
          Cadastrar categoria
        </h1>
        <Form>
          <div className="row2">
            <InputField
              title="Categoria"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Button
              title="Cadastrar"
              onClick={handleCadastrar}
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
