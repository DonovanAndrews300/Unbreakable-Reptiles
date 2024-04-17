import React,{ useContext, useMemo } from 'react'
import { ShopifyContext } from '../../../context/shopify-context'
import { useFindAnimalCollection} from '../../../utils/hooks'
import SiteLayout from '../../../components/SiteLayout'
import ProductList from '../../../components/ProductList'

type Props = {}

const Geckos = ({location}) => {
  const collections = useContext(ShopifyContext)    
  const cachedValue = useMemo(() => collections, [])
  const animalName = location.state.name ?? location.state.label ??  cachedValue
  const products = useFindAnimalCollection(collections,animalName)

  return (        
  <SiteLayout>
     {!!products && <ProductList header='Geckos' products={products} />}
</SiteLayout>
  )
}

export default Geckos