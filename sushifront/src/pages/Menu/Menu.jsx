import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import apiFetch from '../../axios/config';
import axios from 'axios';

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: #1b1919;
  height: 100vh;
`;

const Header = styled.div`
  padding: 20px;
  background-color: #221616;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Subtitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 20px;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MenuItem = styled.li`
  margin: 10px;
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  span {
    color: white;
    flex: 1;
    font-size: 1.4em;
    margin-top: 10px;
  }

  img {
    border: solid 0.5px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const Details = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-align: left;
`;

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/Menu")
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

  }, [])
  const menuItems = [
    { name: 'Grelhado', price: 24, image: 'https://vilaserena.uaizap.com.br/_core/_uploads/83/2023/07/16361607231cghegddf6.jpeg', description: 'Peixe grelhado com temperos especiais.' },
    { name: 'Philadelfia', price: 24, image: 'https://receitinhas.com.br/wp-content/uploads/2018/08/Sushi-filadelfia-uramaki-Sabor-na-Mesa.jpg', description: 'Salmão, cream cheese e alga.' },
    { name: 'Kani', price: 18, image: 'url_para_kani.jpg', description: 'Kani, pepino e arroz.' },
    { name: 'Temaki', price: 32, image: 'url_para_temaki.jpg', description: 'Enrolado de alga com peixe e arroz.' },
    { name: 'Joy', price: 8, image: 'url_para_joy.jpg', description: 'Pequenos bolinhos de arroz cobertos com peixe.' },
    { name: 'Sashimi', price: 32, image: 'url_para_sashimi.jpg', description: 'Fatias finas de peixe cru.' },
    { name: 'Ceviche', price: 29, image: 'url_para_ceviche.jpg', description: 'Peixe marinado em suco de limão.' },
    { name: 'Doritos', price: 26, image: 'url_para_doritos.jpg', description: 'Rolinho de alga com doritos e salmão.' },
    { name: 'Poke', price: 35, image: 'url_para_novo_sabor_1.jpg', description: 'Tigela de arroz com peixe cru, vegetais e molhos saborosos.' },
    { name: 'Atum', price: 14.00, image: 'url_para_novo_sabor_2.jpg', description: 'Sashimi de atum fresco, fatiado finamente para apreciação.' },
  ];

  const handleItemClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <Wrapper>
      <Header>
        <Title>Katu Sushi</Title>
        <Subtitle>Cardápio</Subtitle>
      </Header>
      <MenuList>
        {data.map((item, index) => (
          <MenuItem key={index} onClick={() => handleItemClick(index)} >
            <img src={item.imagens} alt={item.nome} onClick={() => handleItemClick(index)} />
            <span>{item.nome}</span>
            <span>R$ {item.preco.toFixed(2)}</span>
            <Details visible={selectedItem === index}>
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
            </Details>
          </MenuItem>
        ))}
      </MenuList>
    </Wrapper>
  );
};

export default Menu;