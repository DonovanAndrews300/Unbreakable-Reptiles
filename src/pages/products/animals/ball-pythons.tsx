import React,{ useContext, useMemo } from 'react'
import { ShopifyContext } from '../../../context/shopify-context'
import { useFindAnimalCollection} from '../../../utils/hooks'
import { Flex, Grid, Heading } from '@chakra-ui/react'
import { AnimalListItem } from '../../../components/AnimalListItem'
import AnimalList from '../../../components/AnimalList'
import SiteLayout from '../../../components/SiteLayout'
import ProductList from '../../../components/ProductList'

type Props = {}

const BallPython = ({location}) => {
  const collections = useContext(ShopifyContext)    
  const cachedValue = useMemo(() => collections, [])
  const animalName = location.state.name ?? location.state.label ??  cachedValue
  const products = useFindAnimalCollection(collections,animalName)

  return (        
  <SiteLayout>
     {!!products && <ProductList header='Ball Pythons' products={products} />}
</SiteLayout>
  )
}

export default BallPython