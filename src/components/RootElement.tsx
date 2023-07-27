
import React from 'react';
import { ShopifyProvider } from '../context/shopify-context';

const RootElement = ({ children }) => {
    return(
    <ShopifyProvider>
      {children}
    </ShopifyProvider>)
  }
  
  export default RootElement;