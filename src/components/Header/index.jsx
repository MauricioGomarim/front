import { Container, IconLogout, InfosUser } from "./styles";
import imgPlaceholder from "../../assets/download.jpg";
import { BiLogOut } from "react-icons/bi";

import { useAuth } from "../../hook/auth";

export function Header() {
  const { user, Logout } = useAuth();

  return (
    <Container>
      <InfosUser>
        <img src={imgPlaceholder} />
        <div>
          <p>Bem vindo</p>
          <h1>{user.name}</h1>
        </div>
      </InfosUser>

      <IconLogout onClick={Logout} >
        <BiLogOut />
      </IconLogout>
    </Container>
  );
}
