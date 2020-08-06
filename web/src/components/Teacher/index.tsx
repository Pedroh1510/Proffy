import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import { api } from '../../services/api';

export interface Teacher{
  user:{
    id:string
    name:string
    avatar:string
    whatsapp:string
    bio:string
  }
  subject:string
  cost:number
}

export interface TeacherItemProps{
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  function createNewConnection(){
    api.post('connections',{
      user_id:teacher.user.id
    })
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.user.avatar} alt={teacher.user.name}/>
        <div>
          <strong>{teacher.user.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.user.bio}</p>

      <footer>
        <p>
          Proço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          target='_blank' 
          rel="noopener noreferrer" 
          onClick={createNewConnection} 
          href={`https://wa.me/${teacher.user.whatsapp}`}
        >
          <img src={whatsAppIcon} alt="WhatsApp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;