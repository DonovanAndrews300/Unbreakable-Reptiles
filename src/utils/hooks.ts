import { useEffect, useState } from 'react';
import  Client, { ProductVariant }  from 'shopify-buy';
import { useToast, createStandaloneToast } from '@chakra-ui/react'

    const client = Client.buildClient({
    domain: 'unbreakable-reptiles.myshopify.com',
    storefrontAccessToken: '9d99eb275041ac82d3ec9b3b75672b07',
});


export const makePurchase = (checkoutId, item) => {
    const {  toast } = createStandaloneToast()
      return client.checkout.addLineItems(checkoutId, item)
      .then((checkout) => {
        toast({
            title: 'Taking you to Shopify to complete your purchase',
            status: 'info',
            duration: 10000,
            isClosable: true,
          })
         window.location.href = checkout.webUrl
      })
      .catch((error) => {
        toast({
            title: 'There was a problem with your purchase, please try again',
            description:`Error Message:${error} `,
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
      })

}

export const useGetCheckoutId = () => {
    const [checkoutId, setCheckoutId] = useState<string>('')
    useEffect(() => {
        client.checkout.create().then((checkout) => {
        setCheckoutId(checkout.id);
      })}, []);
      return [checkoutId]
}

export const useGetCollections = () => {

    const [collections, setCollections] = useState<any[]>([])
    useEffect(() => {
        client.collection.fetchAllWithProducts().then((collections) => {
            setCollections([collections])
          });
    }, []);
    return collections;
};

export const useFindAnimalCollection = (collections:Array<any>,collectionName:string) => {
    const [products, setProducts] = useState<any[]>([])
    useEffect(() => {
    const animalProductList = collections?.filter((collection) => collection?.title === collectionName).map(collection => collection?.products)
    setProducts(animalProductList);
    },[collections])
    return products;
};