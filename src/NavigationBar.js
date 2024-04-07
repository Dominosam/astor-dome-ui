import React from 'react';
import styled from 'styled-components';
import logo from './logo.png'; // Adjust path as needed
import { ReactComponent as BurgerIcon } from './burger-icon.svg'; // Add your burger icon SVG here

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #1D3557;
  color: #F1FAEE;
`;

const Logo = styled.img`
  height: 50px;
  
`;

const SearchBar = styled.input`
  margin-left: 20px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  width: 300px;
`;

const UserAvatar = styled.div`
  margin-left: auto;
  background-color: #457B9D;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const LogoutButton = styled.button`
  margin-left: 20px;
  background-color: #E63946;
  color: #FFFFFF;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
`;

const NavigationBar = () => (
  <Nav>
    <Logo src={logo} alt="Logo" />
    <BurgerIcon style={{ marginLeft: '20px' }} />
    <SearchBar type="text" placeholder="Search..." />
    <UserAvatar />
    <LogoutButton>Logout</LogoutButton>
  </Nav>
);

export default NavigationBar;
