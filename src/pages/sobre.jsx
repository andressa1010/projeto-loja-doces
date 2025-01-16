import React from "react";
import Menu from "../components/menu";
import Logo from "../components/logo";
import Whatsapp from "../components/whatsapp";

const Sobre = () => {
  return (
    <>
      <Menu />
      <Logo />
      <div className="sobre-projeto">
        <p>
          Este projeto é uma loja de doces e bolos Fictícia como parte do meu
          portfólio este projeto foi desenvolvido com React.js e utiliza o React
          Router DOM para navegação entre páginas, proporcionando uma
          experiência dinâmica e fluida para o usuário. Além disso, criei minha
          própria API, que alimenta o projeto com todas as informações e imagens
          exibidas. A API foi construída utilizando Node.js, Express, Prisma ORM
          e MongoDB, garantindo um backend robusto e eficiente para gerenciar os
          dados do sistema. As imagens e dados que você vê neste projeto estão
          sendo consumidos diretamente da minha API personalizada, mostrando a
          integração completa entre frontend e backend.
        </p>
        <img
          className="andressa-sobre"
          src="/2024092809560212.png"
          alt="imagem Andressa"
        ></img>
      </div>

      

      <Whatsapp/>
    </>
  );
};

export default Sobre;
