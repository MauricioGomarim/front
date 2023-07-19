import { Container, Form } from "./styles";
import { InputField } from "../../../components/InputField/index";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

import { useState, useEffect } from "react";

export function PageCadastroMarca() {
  const [marca, setMarca] = useState("");

  const navigate = useNavigate();

  async function handleCadastrar() {

    try {
      await api
      .post("/brand", { marca });
     
      alert("Marca cadastrada com sucesso!");
      return
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Erro ao cadastrar essa marca!");
      }
    }
  }

  return (
    <>
      <h1
        style={{
          paddingLeft: "30px",
          marginTop: "20px",
          color: "black",
          fontSize: "30px",
        }}
      >
        Cadastrar marcas
      </h1>
      <Container>
        <Form>
          <div className="row2">
            <InputField
              placeholder="Marca"
              title="Marca"
              onChange={(e) => setMarca(e.target.value)}
            />
            <Button
              title="Cadastrar"
              onClick={handleCadastrar}
              type="button"
              style={{ marginTop: "auto" }}
            />
          </div>
        </Form>
      </Container>
    </>
  );
}
