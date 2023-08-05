import { Container, IconLogout, InfosUser } from "./styles";
import imgPlaceholder from "../../assets/download.jpg";
import { BiLogOut } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hook/auth";

export function Header() {
  const { user, Logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout(){
    Logout();
    navigate("/")

  }
  return (
    <Container>
      <InfosUser>
        <img src={imgPlaceholder} />
        <div>
          <p>Bem vindo</p>
          <h1>{user.name}</h1>
        </div>
      </InfosUser>

      <IconLogout onClick={handleLogout} >
        <BiLogOut />
      </IconLogout>
    </Container>
  );
}
