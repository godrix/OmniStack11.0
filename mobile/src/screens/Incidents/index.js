import React, { useState, useEffect } from 'react';

import { Container, Header, Img, LabelHeader, LabelHeaderBold, Title, Description } from './styles';

import api from '../../services/api';

import Card from '../../components/Card';

import logo from '../../assets/logo.png';



export default function Incidents() {
  const [amount, setAmount] = useState(0);
  const [incidents, setIncidents] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadIncidents = async () => {
    if(loading){
      return;
    }

    if(amount > 0 && incidents.length === amount){
      return;
    }

      setLoading(true);
      const response = await api.get('/incidents', {
        params:{
          page
        }
      });
      
      
      setIncidents([...incidents, ...response.data]);
      
      setAmount(response.headers['x-total-count']);
      
      setPage(page + 1);
      setLoading(false);
  }
  
  useEffect(() => {
    loadIncidents();
  }, [])
  return (
    <Container>
      <Header>
        <Img source={logo} />
  <LabelHeader>Total de <LabelHeaderBold>{amount}</LabelHeaderBold> casos  </LabelHeader>
      </Header>
      <Title>
        Bem Vindo!
      </Title>
      <Description>
        Escolha um dos casos a baixo e salve o dia!
      </Description>
      <Card data={incidents} onEndReached={loadIncidents} onEndReachedThreshold={0.2}/>
    </Container>
  );
}
