import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

const Homepage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box d='flex' justifyContent='center' p={5} bg='white' borderRadius='1g' borderWidth='1px'>
        <Text>Homepage</Text>
      </Box>
    </Container>
  )
}

export default Homepage