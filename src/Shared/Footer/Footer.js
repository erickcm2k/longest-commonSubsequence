import React from 'react';
import { Flex, List, ListItem, Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      minH="30vh"
      width="100%"
      backgroundColor="brand.regalBlue"
      flexDir="row"
      justify="space-evenly"
      align="center"
    >
      <Box alignSelf="center">
        <Text
          pb="1rem"
          fontWeight="bold"
          fontSize={['1rem', '1.2rem', '1.5rem', '1.5rem']}
          color="brand.botticelli"
        >
          Desarrollo
        </Text>
        <List styleType="disc">
          <ListItem color="brand.botticelli">Alamo Ramos Luis Alberto</ListItem>
          <ListItem color="brand.botticelli">Camacho Soto Kevin</ListItem>
          <ListItem color="brand.botticelli">Castañeda Martínez Erick</ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default Footer;
