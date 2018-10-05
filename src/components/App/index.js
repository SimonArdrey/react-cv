import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'reflexbox';

import SidebarContent from 'components/SidebarContent';
import CVPage from 'components/CVPage';

const theme = {
  font: {
    family: "'Roboto', sans-serif",
    weight: 200,
    color: '#000',
    size: 1,
    margin: 0,
  },
  headingFont: {
    family: "'Roboto Condensed', sans-serif",
    weight: 200,
    color: '#000',
    size: 1,
    margin: 0,
  },
  sidebar: {
    bg: 'rgb(69, 83, 110)',
    fg: '#fff',
  },
};

export default () => (
  <ThemeProvider theme={theme}>
      <AppLayout>
        <SideColumn>
          <SidebarContent />
        </SideColumn>

        <MainColumn>
          <CVPage />
        </MainColumn>
      </AppLayout>
  </ThemeProvider>
);

const AppLayout = styled(Flex).attrs({
  // wrap: true,
})`
  min-height: 100vh;
`;

const SideColumn = styled(Box).attrs({
  w: [1/3, 1/4],
  py: 3,
  px: 2,
})`
  background-color: rgb(69, 83, 110);
  color: #fff;
`;

const MainColumn = styled(Box).attrs({
  w: [2/3, 3/4],
  py: 3,
  px: 2,
})``;
