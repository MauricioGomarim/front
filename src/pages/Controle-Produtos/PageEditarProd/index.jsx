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

export function PageEditarProd() {
  const { page, setPage } = usePage();
  const { id } = useParams();

  const [data, setData] = useState("");

  const [codigo, setCod] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [blob, setBlob] = useState(null);


  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();


  let urlFormated;
  if(avatar){
    urlFormated = `${api.defaults.baseURL}/files/${avatar}`
  } 
  if (blob) {
    urlFormated = blob;
  }
  if (!avatar && !blob) {
    urlFormated = foto;
  }

  

  async function handleCadastrar() {

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("description", description);
    formData.append("size", size);
    formData.append("amount", amount);
    formData.append("price", price);
    formData.append("image", image);

    await api
      .put(`/products/${id}`, formData)
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao editar o produto!");
        }
      })
      .then(alert("Produto editado com sucesso!"));

    navigate("/");
    return;
  }

  async function handleExcluir() {
    try {
      await api.delete(`/products/${id}`);
      alert("Produto excluído com sucesso!");
      navigate("/produtos")
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao excluir o produto!");
      }
    }
  }

  async function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setImage(file);

    const fileName = URL.createObjectURL(file);
    setBlob(fileName);
  }

  useEffect(() => {
    async function buscarDadosProduto() {
      const response = await api.get(`/products/${id}`);
      setData(response.data);

      const {
        codigo,
        title,
        category,
        brand,
        description,
        size,
        amount,
        price,
        image,
      } = response.data;


      setTitle(title);
      setCategory(category);
      setBrand(brand);
      setDescription(description);
      setSize(size);
      setAmount(amount);
      setPrice(price);
      setCod(codigo);


      if(image){
        setAvatar(image);
      }

      setPrice(price);
    }
    buscarDadosProduto();

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
          Editar produtos
        </h1>
        <ContentForm>
          <Foto>
            <label htmlFor="avatar">
              Foto produto
              <img src={urlFormated} />
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
            <InputField
                placeholder="Código"
                title="Código"
                onChange={(e) => setCod(e.target.value)}
                value={codigo}
              />
              <InputField
                placeholder="Nome"
                title="Nome"
                onChange={(e) => setName(e.target.value)}
                value={title}
              />
              <div className="selectField">
                <h1>Categoria</h1>
                <select
                  name="select"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
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
                  value={brand}
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
                <select name="select" onChange={(e) => setSize(e.target.value)} value={size}>
                  <option disabled selected>
                    Selecione...
                  </option>
                  <option value="P">P</option>
                  <option value="M">M</option>
                  <option value="G">G</option>
                  <option value="GG">GG</option>
                </select>
              </div>
              <InputField
                placeholder="teste"
                title="Qtd"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <InputField
                placeholder="teste"
                title="Valor p/und"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="row2">
            <h1>Descrição</h1>
              <textarea
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

    
          </Form>

          <div className="row4">
          <Button title="Excluir" onClick={handleExcluir} />
            <Button title="Cadastrar" onClick={handleCadastrar} />
          </div>
        </ContentForm>
      </Content>

      <Caixa />
      <DesenvolvidoPor />
    </Container>
  );
}
