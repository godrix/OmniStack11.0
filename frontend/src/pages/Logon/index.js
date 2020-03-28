import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import { Container } from './styles';
import heroesImg from '../../assets/heroes.png';
import heroLogo from '../../assets/logo.svg';

import api from '../../services/api';

import { toast } from 'react-toastify';

export default function Logon() {
  const [id, setId] = useState(localStorage.getItem('toBeHero@id') || '');
  const history = useHistory();

  const handleLogin = async (e)=>{
    e.preventDefault();
    try {
      const response = await api.post('sessions', {id});
      localStorage.setItem('toBeHero@name', response.data.name)
      toast.success(`Olá ${response.data.name}`);
      history.push('profile');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <Container>
      <section>
        <img src={heroLogo} alt="logo"/>
        <form onSubmit={handleLogin}>
          <h1>
            Faça seu Logon
          </h1>
          <input placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)}/>
          <button type="submit" className="primaryButton">Entrar</button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Logo be the Hero"/>
    </Container>
  );
}
