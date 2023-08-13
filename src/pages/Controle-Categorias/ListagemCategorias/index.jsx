import { toast } from 'react-toastify';
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

export function ListagemCategorias() {
  const { page, setPage } = usePage();
  const [categories, setCategories] = useState([""]);

  const navigate = useNavigate();

  function handleSetPage() {
    setPage("Editar");
    return;
  }

  async function handleDelete(id){
    try {
      await api.delete(`/category/${id}`);
      setCategories(categories.filter(categorie => categorie.id !== id));

      return toast.success('Categoria excluida com sucesso !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    } catch (error) {
      return toast.error(error, {
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

  useEffect(() => {
    async function fetchBrands() {
      const response = await api.get(`/category`);
      setCategories(response.data);
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
            {categories.map((categorie, index) => (
              <tr key={index}>
                <td>{categorie.title}</td>
                <td>
                  <div className="action">
                    <Button
                      title="Excluir"
                      style={{ fontSize: "10px" }}
                      onClick={() => handleDelete(categorie.id)}
                    />
                    <Link to={`/editar-categoria/${categorie.id}`}>Editar</Link>
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
