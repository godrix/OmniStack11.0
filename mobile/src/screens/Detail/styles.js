import styled from 'styled-components/native';

import Constants from 'expo-constants';

export const Container = styled.View`
  flex:1;
  padding:0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Header = styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;
`;

export const Img = styled.Image``;

export const Share = styled.TouchableOpacity``; 

export const LabelHeader = styled.Text`
font-size:15px;
color:#737380;
`;

export const LabelHeaderBold = styled.Text`
font-weight:bold;
`;

export const Title = styled.Text`
  font-size:30px;
  margin-bottom:16px;
  margin-top:48px;
  color:#13131a;
  font-weight:bold;
`;

export const Description = styled.Text`
font-size:16px;
line-height:24px;
color:#737380;
`;

export const Incident = styled.View`
padding:24px;
border-radius:8px;
background:#fff;
margin-top:15px;
margin-bottom:16px;
`;
export const IncidentProperty = styled.Text`
font-size:14px;
color:#41414d;
font-weight:bold;
`;
export const IncidentValue = styled.Text`
margin-top:8px  ;
font-size:15px;
margin-bottom:24px;
color:#737380;
`;

export const Contact = styled.View`
padding:24px;
border-radius:8px;
background:#fff;
margin-bottom:16px;
`;

export const HeroTitle = styled.Text`
font-weight:bold;
font-size:20px;
color:#13131a;
line-height:30px;
`;
export const HeroDescription = styled.Text`
font-size:15px;
color:#737380;
margin-top:16px;
`;

export const Actions = styled.View`
margin-top:16px;
flex-direction:row;
justify-content:space-between;
`;

export const Action = styled.TouchableOpacity`
background:#e02041;
border-radius:8px;
height:50px;
width:48%;
justify-content:center;
align-items:center;
`; 
export const ActionLabel = styled.Text`
font-weight:bold;
font-size:16px;
color:#FFF;
`;





