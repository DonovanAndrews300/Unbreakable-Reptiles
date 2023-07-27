import * as React from "react"
import theme from '../../theme'
import type { HeadFC, PageProps } from "gatsby"
import SEO from "../components/SEO"
import Home from "./home"
import { ChakraProvider} from '@chakra-ui/react'
import { ShopifyProvider } from "../context/shopify-context"
import SiteLayout from "../components/SiteLayout"


const IndexPage: React.FC<PageProps> = () => {

  return ( 
   <>
       <SiteLayout>
      <Home/>
      </SiteLayout>
   </>

   
  )
}

export default IndexPage

export const Head: HeadFC = () => ( 
  <><title>Unbreakable Reptiles</title><SEO /></>
)
