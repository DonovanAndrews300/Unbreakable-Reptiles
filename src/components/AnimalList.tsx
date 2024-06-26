import { Flex, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import { AnimalListItem } from './AnimalListItem'


const AnimalList = ({products}) => {
  return (
    <>
      <Flex align="center" justifyContent={"center"} mr={5} paddingTop={"50px"}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          {"Ball Pythons"}
        </Heading>
      </Flex>
      <Flex
    direction="column"
    justifyContent="center"
    maxW={{ xl: "1200px" }}
    m="0 auto"
    minH="100vh"
  >
      <Grid
        w="full"
        gridGap="5"
        gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
      >
        {!!products && products[0]?.map((product) => {
          const filterObjectByKeys = (object, keys) => Object.fromEntries(keys.map(k => [k, object[k]]))
          const { id } = product
          const filteredProductData = filterObjectByKeys(product, ['title', 'description', 'images', 'variants', 'id'])
          return ( !!filteredProductData && <AnimalListItem key={id} data-testid="animal_list" productData={filteredProductData}/>)
        }

        )}
      </Grid>
    </Flex>
    </>
  )
}

export default AnimalList