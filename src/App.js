import React from 'react';
import { Grommet, Box, Text } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

function App() {
  return (
    <Grommet theme={hpe} themeMode="dark">
      <Box
        width="100%"
        height={{ min: '100vh' }}
        align="center"
        justify="center"
        gap="Medium"
      >
        <Text size="xxlarge" weight="bold">
          HPE Design System
        </Text>
        <Text size="large" weight="normal">
          starter
        </Text>
      </Box>
    </Grommet>
  );
}

export default App;
