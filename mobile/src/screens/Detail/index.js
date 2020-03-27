import React from 'react';
import {Linking } from 'react-native';
import {useRoute} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Container, Header, Img, Incident, IncidentProperty, IncidentValue, Share, Contact, HeroTitle, HeroDescription, Actions, Action, ActionLabel } from './styles';
import logo from '../../assets/logo.png';

import * as MailComposer from 'expo-mail-composer';

export default function Detail() {
  const route = useRoute();
  const {incident} = route.params;
  const valueformated = Intl.NumberFormat('pt-BR', {
    style:'currency', currency:'BRL'
    }).format(incident.value);
  const message = `Olá Apda estou entrando em contato, pois gostaria de ajudar no caso "${incident.title}" com o valor de ${valueformated}`;
  const sendMail = ()=>{
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients:[incident.email],
      body: message
    })
  }

  const sendWhatsapp = ()=> {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }
  return (
    <Container>
       <Header>
        <Img source={logo} />
        <Share onPress={()=>{}}>
          <Feather name="share-2" size={28} color="#e82041"/>
        </Share>
      </Header>
      <Incident>
        <IncidentProperty>ONG:  </IncidentProperty>
  <IncidentValue>{incident.name} de {incident.city}/{incident.uf}</IncidentValue>

        <IncidentProperty>CASO:  </IncidentProperty>
        <IncidentValue>{incident.description} </IncidentValue>

        <IncidentProperty>VALOR:  </IncidentProperty>
        <IncidentValue>{valueformated}  </IncidentValue>
        </Incident>
        <Contact>
          <HeroTitle>Salve o dia!</HeroTitle>
          <HeroTitle>Seja o heroi nesse caso.</HeroTitle>
          <HeroDescription>Entre em contato</HeroDescription>
          <Actions>
            <Action onPress={sendWhatsapp}>
              <ActionLabel>Whatsapp</ActionLabel>
            </Action>
            <Action onPress={sendMail}>
              <ActionLabel>E-mail</ActionLabel>
            </Action>
          </Actions>
        </Contact>
    </Container>
  );
}
