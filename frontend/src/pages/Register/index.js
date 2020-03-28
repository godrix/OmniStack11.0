import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';

import heroLogo from '../../assets/logo.svg';
import { Container } from './styles';

import { toast } from 'react-toastify';

import api from '../../services/api';

export default function Register() {
  const history = useHistory();
  const [data, setData] = useState({
    name:'',
    email:'',
    whatsapp:'',
    city:'',
    uf:''
  })
  const handleRegister = async (e)=>{
    e.preventDefault();

    try {
      const response = await api.post('ongs', data);
      toast.success(`Cadastro realizado com sucesso! id:${response.data.id}`);
      localStorage.setItem('toBeHero@id', response.data.id);
      history.push('/');
    } catch (error) {
      toast.error(error.response.data.error)
    }
    
  }
  return (
    <Container>
      <div className="content">
        <section>
          <img src={heroLogo} alt="Be the Hero"/>
          <h1>Cadastro</h1>
          <p>Faça o cadastro na plataforma e ajude as pessoas a encontrarem os casos de sua ONG</p>
          <Link className="backLink" to="/">
            <FiArrowDownLeft size={16} color="#E02041"/>
            Entrar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome da ONG" 
            value={data.name} 
            onChange={e=> setData({...data, name:e.target.value})}
          />
          <input type="email" placeholder="E-mail" 
          value={data.email} 
          onChange={e=> setData({...data, email:e.target.value})}
          />
          <input  placeholder="Whatsapp" 
          value={data.whatsapp} 
          onChange={e=> setData({...data, whatsapp:e.target.value})}
          />
          <div className="inputGroup">
            <input  placeholder="Cidade" 
            value={data.city} 
            onChange={e=> setData({...data, city:e.target.value})}
            />
            <input  placeholder="UF" style={{width:80}} 
            value={data.uf} 
            onChange={e=> setData({...data, uf:e.target.value})}
            />
          </div>
          <button className="primaryButton" type="submit">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
