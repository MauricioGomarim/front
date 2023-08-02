import { Menu } from "../../../components/Menu";
import { Brand } from "../../../components/Brand";
import { Header } from "../../../components/Header";
import { Caixa } from "../../../components/Caixa";
import { DesenvolvidoPor } from "../../../components/DesenvolvidoPor";

import { Link } from "react-router-dom";

import { ContentForm, Container } from "./styles";
import foto from "../../../assets/brand.jpeg";
import { Button } from "../../../components/Button";
import { usePage } from "../../../hook/pages";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function ListagemMarcas() {
  const { page, setPage } = usePage();
  const [brands, setBrands] = useState([""]);

  const navigate = useNavigate();

  function handleSetPage() {
    setPage("Editar");
    return;
  }

  async function handleDelete(id){
    try {
      await api.delete(`/brand/${id}`);
      setBrands(brands.filter(brand => brand.id !== id));
      alert("Cadastrado !")
      return
    } catch (error) {
      alert(error)
    }
 
    return
  }

  useEffect(() => {
    async function fetchBrands() {
      const response = await api.get(`/brand?title=`);
      setBrands(response.data);
    }
    fetchBrands();
  }, []);

  return (
    <Container>
      <Brand />
      <Menu />
      <Header />
      <ContentForm>
        <table>
          <thead>
            <tr>
              <th style={{ width: "100px" }}>Marcas</th>
              <th style={{ width: "100px" }}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => (
              <tr key={index}>
                <td>{brand.title}</td>
                <td>
                  <div className="action">
                    <Button
                      title="Excluir"
                      style={{ fontSize: "10px" }}
                      onClick={() => handleDelete(brand.id)}
                    />
                    <Link to={`/editar-marca/${brand.id}`}>Editar</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentForm>

      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
