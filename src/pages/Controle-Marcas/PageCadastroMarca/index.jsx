import React from 'react';
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

export function PageCadastroMarca() {
  const [marca, setMarca] = useState("");

  const navigate = useNavigate();

  async function handleCadastrar() {
    try {
      await api.post("/brand", { marca });
      toast.success('Marca cadastrada com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigate("/marcas");
      return;
    } catch (error) {
      if (error.response) {
        toast.warn(error.response.data.message, {
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
        return toast.error("Erro ao cadastrar essa marca!", {
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
          Cadastrar marca
        </h1>
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
      </ContentForm>
      <Caixa />

      <DesenvolvidoPor />
    </Container>
  );
}
