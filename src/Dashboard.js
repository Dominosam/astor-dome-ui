import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';

const DashboardContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  padding: 20px;
  width: 100%;
`;

const ChartPlaceholder = styled.div`
  background-color: #A8DADC;
  color: #1D3557;
  padding: 50px;
  margin-top: 20px;
  text-align: center;
`;

const Dashboard = () => (
  <>
    <NavigationBar />
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <h2>Dashboard</h2>
        <p>Mocked process data here...</p>
        <ChartPlaceholder>Chart 1 Placeholder</ChartPlaceholder>
        <ChartPlaceholder>Chart 2 Placeholder</ChartPlaceholder>
      </MainContent>
    </DashboardContainer>
  </>
);

export default Dashboard;
