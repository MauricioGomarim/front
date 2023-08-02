import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { Caixa } from "../../../components/Caixa";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";

import { ContentForm, Form, Container } from "./styles";
import { InputField } from "../../../components/InputField/index";
import { Button } from "../../../components/Button";
import { useNavigate, useParams  } from "react-router-dom";
import { api } from "../../../services/api";

import { useState, useEffect } from "react";

export function PageEditarCategoria() {
  const [categoria, setCategoria] = useState("");


  const { id } = useParams();
  const navigate = useNavigate();

  async function handleEditar() {
    try {
      await api.put(`/category/${id}`, { categoria });

      alert("Categoria cadastrada com sucesso!");
      return;
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Erro ao cadastrar essa categoria!");
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
