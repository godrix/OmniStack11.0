import React from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { Container, Incident, IncidentProperty, IncidentValue, Button, LabelButton } from './styles';

export default function Card({data, onEndReached, onEndReachedThreshold}) {
  const navigation = useNavigation();

  const navigateToDetail = (incident)=>{
    navigation.navigate('Detail', {incident});
  }
  return (
    <Container
      data={data}
      renderItem={({item})=>(
        <Incident>
        <IncidentProperty>ONG:  </IncidentProperty>
        <IncidentValue>{item.name}  </IncidentValue>

        <IncidentProperty>CASO:  </IncidentProperty>
        <IncidentValue>{item.description}  </IncidentValue>

        <IncidentProperty>VOLOR:  </IncidentProperty>
        <IncidentValue>
          {Intl.NumberFormat('pt-BR', {
            style:'currency', currency:'BRL'
            }).format(item.value)} 
        </IncidentValue>

        <Button onPress={()=>{navigateToDetail(item)}}>
          <LabelButton>Ver mais detalhes</LabelButton>
          <Feather name="arrow-right" size={17} color="#E02041" />  
        </Button>
      </Incident>
      )}
      keyExtractor={item=> String(item.id)}
      onEndReached={()=>{onEndReached()}}
      onEndReachedThreshold={onEndReachedThreshold}
    />
  );
}
