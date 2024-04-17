import React, { useContext, useMemo } from 'react'
import { ShopifyContext } from '../../../context/shopify-context'
import { useFindAnimalCollection} from '../../../utils/hooks'

import SiteLayout from '../../../components/SiteLayout'
import ProductList from '../../../components/ProductList'

type Props = {}

const Merch = ({location}) => {
  const collections = useContext(ShopifyContext)    
  const cachedValue = useMemo(() => collections, [])
  const productName = location.state.name ?? location.state.label ??  cachedValue
  const products = useFindAnimalCollection(collections,productName)

  return (        
  <SiteLayout>
     {!!products && <ProductList header='Merch' products={products} />}
</SiteLayout>
  )
}

export default Merch