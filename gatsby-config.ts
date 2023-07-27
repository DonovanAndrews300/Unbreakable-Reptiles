import type { GatsbyConfig } from "gatsby";
require("dotenv").config()
const config: GatsbyConfig = {

  siteMetadata: {
    title: `Exotics Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  {
    resolve: "gatsby-source-shopify",
    options: {
      password:"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",
      shopName:"Unbreakable Reptiles",
      shopifyConnections: ["collections"], 
      storeUrl: "unbreakable-reptiles.myshopify.com",
      ApiVersion:"2020-01",
    },
  },
  "gatsby-plugin-image",
  {
    resolve: '@chakra-ui/gatsby-plugin',
    options: {
      /**
       * @property {boolean} [resetCSS=true]
       * if false, this plugin will not use `<CSSReset />
       */
      resetCSS: true,
      /**
       * @property {boolean} [isUsingColorMode=true]
       * if false, this plugin will not use <ColorModeProvider />
       */
      isUsingColorMode: true,
      /**
       * @property {boolean} [isBaseProvider=false]
       * if true, will render `<ChakraBaseProvider>`
       */
      isBaseProvider: false,
    },
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "cache": false,
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
