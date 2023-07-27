import React from 'react';
import {createContext} from 'react';
import { useFindAnimalCollection, useGetCollections } from '../utils/hooks';

export const ShopifyContext = createContext({})


export const ShopifyProvider = ({children}) => {
    const [collections] = useGetCollections();
    return (
        <ShopifyContext.Provider value={collections}>
            {children}
        </ShopifyContext.Provider>
        )

}





