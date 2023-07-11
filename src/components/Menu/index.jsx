import { Container } from "./styles";
import { RiArrowDownSLine, RiCloseFill } from "react-icons/ri";
import { useState } from "react"

export function Menu({ page ,setPage, ...rest }) {

  const [active, setActive] = useState("");
  const [activeLink, setActiveLink] = useState("");



  return (
    <Container {...rest}>
      <div>
      <div className="title-accordion" onClick={() => setActive("Cadastrar produtos")}>
        <h1>Cadastrar produtos</h1>
        <span>
          {active === "Cadastrar produtos" ? (
            <span>
              <RiCloseFill />
            </span>
          ) : (
            <span>
              <RiArrowDownSLine />
            </span>
          )}
        </span>
      </div>
      <div className={(active === "Cadastrar produtos" ? "show" : " ") + " accordionContent"}>
        <ul>
          <li className={(page === "cadastroProduto" ? "Active" : " ")} onClick={() => setPage("cadastroProduto")}>Cadastrar produto</li>
          <li className={(page === "VerProd" ? "Active" : " ")}  onClick={() => setPage("VerProd")}>Ver produtos</li>
          <li className={(page === "Cadastro" ? "Active" : " ")}  onClick={() => setPage("Cadastro")}>Cadastro</li>

        </ul>
      </div>
      </div>

      <div>
      <div className="title-accordion" onClick={() => setActive("Controle de caixa")}>
        <h1>Controle de caixa</h1>
        <span>
          {active === "Controle de caixa" ? (
            <span>
              <RiCloseFill />
            </span>
          ) : (
            <span>
              <RiArrowDownSLine />
            </span>
          )}
        </span>
      </div>
      <div className={(active === "Controle de caixa" ? "show" : " ") + " accordionContent"}>
        <ul>
          <li>Cadastrar produto</li>
          <li>Cadastrar produto</li>
          <li>Cadastrar produto</li>
        </ul>
      </div>
      </div>

    </Container>
  );
}
