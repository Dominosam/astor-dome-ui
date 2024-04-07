import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  background-color: #4D4855;
  color: #FFFFFF;
  padding: 20px;
  height: 100vh;
`;

const MenuLink = styled(Link)`
  display: block;
  color: #F1FAEE;
  padding: 10px 0;
  text-decoration: none;

  &:hover {
    color: #A8DADC;
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <MenuLink to="/outputs">Outputs</MenuLink>
    <MenuLink to="/pipelines">Pipelines</MenuLink>
    <MenuLink to="/watchers">Watchers</MenuLink>
    <MenuLink to="/watchrules">Watch Rules</MenuLink>
    <MenuLink to="/graph">Graph</MenuLink>
  </SidebarContainer>
);

export default Sidebar;
