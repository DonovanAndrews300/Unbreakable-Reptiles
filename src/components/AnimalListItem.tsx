import React from 'react';
import {  Image, Box, Stack, Heading, useDisclosure, Button } from "@chakra-ui/react";
import AnimalDetail from './AnimalDetail';


export const AnimalListItem = ({ productData }) => {  
    const {images, imageAlt, title, variants} = productData ;
    const { price } = variants[0]
    const { src } = images[0]
    const { isOpen, onOpen, onClose} = useDisclosure()
return (
    <>
    <Button variant={"link"} onClick={onOpen}>
        <Stack  p={{ base: "0 2rem" }}>
            <Image objectFit="cover" src={src} alt={imageAlt} />
            <Heading color="teal.300" size="md" textTransform="capitalize">
                {title}
            </Heading>
            <Box>
                {`$${price.amount}`}

            </Box>
        </Stack>
    </Button>
    
    <AnimalDetail isOpen={isOpen} onClose={onClose} productData={productData} />
    </>

  )};