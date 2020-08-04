import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const Teacher: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/47982475?s=460&v=4" alt="Foto"/>
        <div>
          <strong>Pedro</strong>
          <span>Elétrica</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
        <br/><br/>
        Sapiente, cumque nam, adipisci saepe possimus placeat atque voluptatem optio perspiciatis expedita enim corporis, ratione nesciunt. Tempore expedita praesentium adipisci optio similique?
      </p>

      <footer>
        <p>
          Proço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type='button'>
          <img src={whatsAppIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default Teacher;