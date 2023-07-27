import React from "react";
import { Box, Center, GridItem, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Link } from 'gatsby';


export const AnimalsGrid = () => {
    type Animal = {
            name: string,
            route:string,
            image: string,
    }
const animals : Animal[] = [ 
         {
            name: "Ball Pythons",
            route: "animals/ball-pythons",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRSa77mocRsfdXOc8PLXFKaxqU8Oie6HFSA&usqp=CAU",
        },
        {
            name: "Insects",
            route: "insects",
            image: "data:image/jpeg;base64,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",
        },
        {
            name: "Geckos",
            route:"animals/geckos",
            image: "https://i0.wp.com/reptilianostra.com/wp-content/uploads/2019/04/542920-right-1.jpg?fit=1999%2C2000&ssl=1",
        },]   

            return (
    <>
   <Center py="20">
    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
    {"Animals"}
    </Heading></Center> 
   <Box display={'flex'} justifyContent={'center'} >
<SimpleGrid columns={3} h="100vh" w="100vh" spacing='40px' >
 {animals.map((animal:Animal)=> {
    const { name, route, image} = animal
       return (
        <GridItem key={name}>
            <Link to={`/${route}`} replace state={{name:name}}>
            <Stack p={{ base: "0 2rem" }}>
            <Image objectFit="cover" height='200px' width='200px' src={image} alt={name} />
            <Box p="20px">
                <Center>
                    <Text fontWeight='300'>{name}</Text>
               </Center>
      
            </Box>
            </Stack>  
            </Link>
            


        </GridItem>
    )
 })}
</SimpleGrid>
   </Box>

      </>
  )
}



