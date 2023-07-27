import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import theme from '../../theme';
import Navbar from './Navabar';

export default function SiteLayout({children}) {
  return (
    
    <ChakraProvider theme={theme}>
        <Navbar/>
    {children}
    </ChakraProvider>
    
    
  );
}
