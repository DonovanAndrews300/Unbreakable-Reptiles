import React,{ useContext, useMemo } from 'react'
import { ShopifyContext } from '../../context/shopify-context'
import { useFindAnimalCollection} from '../../utils/hooks'
import { Flex, Grid, Heading } from '@chakra-ui/react'
import { AnimalListItem } from '../../components/AnimalListItem'
import AnimalList from '../../components/AnimalList'
import SiteLayout from '../../components/SiteLayout'

type Props = {}

const BallPython = ({location}) => {
  
  const collections = useContext(ShopifyContext)    
  const cachedValue = useMemo(() => collections, [])
  const animalName = location.state.name ?? cachedValue
  const products = useFindAnimalCollection(collections,animalName)


  return (        
  <SiteLayout>
  <Flex align="center" justifyContent={"center"} mr={5} paddingTop={"50px"}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          {"Ball Pythons"}
        </Heading>
      </Flex>
     {!!products && <AnimalList products={products} />}
</SiteLayout>
  )
}

export default BallPython