import React from "react";
import OkPage from "../../../components/OkPage";

// import { Container } from './styles';

const OkGiveClasses: React.FC = () => {
  return (
    <OkPage
      content={{
        text:
          "Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp.",
        title: "Cadastro Salvo!",
      }}
      button={{ text: "Fazer login", source: "Login" }}
    />
  );
};

export default OkGiveClasses;
