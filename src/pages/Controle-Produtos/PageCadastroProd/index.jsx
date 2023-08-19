
import { toast } from 'react-toastify';
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

export function PageCadastroProd() {
  const [codigo, setCod] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  async function handleCadastrar() {
    if (!codigo) {
      return toast.warn('Campo de código obrigatorio!', {
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

    if (!price) {
      return toast.warn('Campo de preço obrigatorio!', {
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

    const formData = new FormData();
    formData.append("codigo", codigo);
    formData.append("title", name);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("description", description);
    formData.append("size", size);
    formData.append("amount", amount);
    formData.append("price", price);
    formData.append("image", image);

    try {
      await api.post("/products", formData);
      toast.success('Produto cadastrado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

      navigate("/produtos");
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
        toast.error('Erro ao cadastrar o produto!', {
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

  async function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setImage(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  useEffect(() => {
    async function fetch() {
      const responseBrand = await api.get(`/brand`);
      setBrands(responseBrand.data);

      const responseCategory = await api.get(`/category`);
      setCategories(responseCategory.data);
    }
    fetch();
  }, []);

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
          Cadastrar produtos
        </h1>
        <ContentForm>
          <Foto>
            <label htmlFor="avatar">
              Foto produto
              <img src={avatar ? avatar : foto} />
              <input
                id="avatar"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChangeAvatar}
              />
            </label>
          </Foto>
          <Form>
            <div className="row1">
              <div className="w-30">
              <InputField
                placeholder="Código"
                title="Código"
                onChange={(e) => setCod(e.target.value)}
              />
              </div>
              <div className="w-30">
              <InputField
                placeholder="Nome"
                title="Nome"
                onChange={(e) => setName(e.target.value)}
              />
              </div>

              
              <div className="selectField w-30">
                <h1>Categoria</h1>
                <select
                  name="select"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option disabled selected>
                    Selecione...
                  </option>
                  {categories.map((categorie) => (
                    <option value={categorie.title}>{categorie.title}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row3">
              <div className="selectField">
                <h1>Marca</h1>
                <select
                  name="select"
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option disabled selected>
                    Selecione...
                  </option>
                  {brands.map((brand) => (
                    <option value={brand.title}>{brand.title}</option>
                  ))}
                </select>
              </div>
              <div className="selectField">
                <h1>Tamanho</h1>
                <select name="select" onChange={(e) => setSize(e.target.value)}>
                  <option disabled selected>
                    Selecione...
                  </option>
                  <option value="P">P</option>
                  <option value="M">M</option>
                  <option value="G">G</option>
                  <option value="GG">GG</option>
                </select>
              </div>
              <div className="w-30">
              <InputField
                placeholder="teste"
                title="Qtd"
                onChange={(e) => setAmount(e.target.value)}
              />
              </div>
              <div className="w-30">
              <InputField
                placeholder="teste"
                title="Valor p/und"

                onChange={(e) => setPrice(e.target.value)}
              />
              </div>
            
            </div>
            <div className="row2">
              <h1>Descrição</h1>
              <textarea
                placeholder="Descrição"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </Form>

          <div className="row4">
            <Button title="Cadastrar" onClick={handleCadastrar} />
          </div>
        </ContentForm>
      </Content>
      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
