import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom'

import logoIma from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';
import { api } from '../../services/api';

const Landing: React.FC = () => {
  const [total,setTotal] = useState(0)

  useEffect(()=>{
    api.get('connections').then(content=>{
      const {total}=content.data
      setTotal(total)
    })
  },[])

  return (
    <div className="" id="page-landing">
      <div className="" id="page-landing-content">
        <div className="" id="logo-container">
          <img src={logoIma} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {total} conexões ja realizadas<img src={purpleHeartIcon} alt="Coração Roxo"/>
        </span>

      </div>
    </div>
  );
}

export default Landing;