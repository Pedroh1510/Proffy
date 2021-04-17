import React from "react";

import OkPage from "../../../components/OkPage";

// import { Container } from './styles';

const OkRegister: React.FC = () => {
  return (
    <OkPage
      content={{
        text: "Agora você faz parte da plataforma da Proffy.",
        title: "Cadastro concluído!",
      }}
      button={{ text: "Fazer login", source: "Login" }}
    />
  );
};

export default OkRegister;
