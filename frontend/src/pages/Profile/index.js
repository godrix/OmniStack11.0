import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash} from 'react-icons/fi';
import { Container } from './styles';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

export default function Profile() {
  const ongName = localStorage.getItem('toBeHero@name');
  const ongId = localStorage.getItem('toBeHero@id');
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  const handleDeleteIncident = async (id)=>{
    try {
      await api.delete(`incidents/${id}`,{
        headers:{
          authorization:ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert('erro ao deletar caso')
    }
  }

  const handleLogout = ()=>{
    localStorage.clear();
    history.push('/');
  }

  useEffect(()=>{
    const handleGetProfile = async ()=>{
      const response = await api.get('profile',{
        headers:{
          authorization:ongId
        }
      })
      console.log(response.data)
      setIncidents(response.data)
    }
    handleGetProfile();
  },[ongId])
  return (
    <Container>
      <header>
        <img src={logo} alt="Inicio"/>
  <span>Bem vindo {ongName}</span>
        <Link to='/incident/new' className="primaryButton">Novo Caso</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041"/>
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
       {incidents.map(incident => (
          <li key={incident.id}>
          <strong>Caso</strong>
          <p>{incident.title}</p>

          <strong>Descrição:</strong>
          <p>{incident.description}</p>

          <strong>Valor:</strong>
          <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}</p>

          <button type="button" onClick={()=>{handleDeleteIncident(incident.id)}}>
          <FiTrash size={20} color="#888"/>
          </button>
        </li>
       ))
       } 
        
      </ul>
    </Container>
  );
}
