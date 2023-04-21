import styled from 'styled-components/native';


export const Container = styled.View`
background: #FFF;
height: 300px;
width: 100%;
position: absolute;
bottom: 0;
shadow-color: #000;
shadow-opacity: 0.2;
shadow-offset: 0 0;
elevation: 3;
border: 1px solid #DDD;
align-items: center;
padding: 20px;
`;

export const Titulo = styled.Text`
font-size: 20px;
color: #222;
`;
export const Descricao = styled.Text`
color: #666;
font-size: 14px;
`;

export const Imagem =styled.Image`
height: 60px;
width: 30%;
margin: 10px 0;
`;

export const Button = styled.TouchableOpacity`
background-color: #222;
justify-content: center;
align-items: center;
height: 44px;
align-self: stretch;
margin: 10px 10px 10px;
`;

export const ButtonText = styled.Text`
color: #FFF;
font-weight: bold;
font-size: 16px;
`;
