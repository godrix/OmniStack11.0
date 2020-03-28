import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import heroLogo from '../../assets/logo.svg';
import { Container } from './styles';

import { toast } from 'react-toastify';

import api from '../../services/api';

export default function NewIncident() {
  const history = useHistory();
  const ongId = localStorage.getItem('toBeHero@id');
  const [data, setData] = useState({
    title: '',
    description: '',
    value: 0
  });

  const handleRegisterIncident = async (e) => {
    e.preventDefault();
   
    try {
      await api.post('/incidents', data, {headers: {
        authorization: ongId
      }}
    );

    
    toast.success(`Cadastro realizado com sucesso!`);

    history.push('/profile');
    } catch (error) {
      toast.error(`Ops, tente novamente mais tarde`);
    }
   


  }
  return (
    <Container>
      <div className="content">
        <section>
          <img src={heroLogo} alt="Be the Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamento para encontrar o heroi</p>
          <Link className="backLink" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
          Voltar para home
        </Link>
        </section>
        <form onSubmit={handleRegisterIncident}>
          <input placeholder="Título do caso"
            value={data.title}
            onChange={e => setData({ ...data, title: e.target.value })}
          />
          <textarea placeholder="Descrição do caso"
            value={data.description}
            onChange={e => setData({ ...data, description: e.target.value })}
          />
          <input placeholder="Valor em Reais"
            value={data.value}
            onChange={e => setData({ ...data, value: e.target.value })}
          />

          <button className="primaryButton" type="submit">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
