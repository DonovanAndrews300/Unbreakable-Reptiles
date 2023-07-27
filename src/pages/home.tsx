import React from 'react';
    import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Image,  Text, Stack, Flex, Center, Card, CardBody, Heading, useColorModeValue } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Footer from '../components/Footer';

export default function Home() {

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
        <Stack > 
          <Center><Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        >
        {icon}
      </Flex></Center>
     <Center> <Text fontWeight={600}>{title}</Text></Center>
     <Center><Text color={'gray.600'}>{text}</Text></Center> 
    </Stack>
     
  );
};


function About() {
  return (
    <>
    <Box w='calc(100vw)' position={'relative'} minWidth={0}
        minH={0} display={" inline-block"}

        height={{
          base: '100%', // 0-48em
          md: '100%%', // 48em-80em,
          xl: '65vh', // 80em+
        }} bg='brand.300' p={4}>
    <Center><Heading as="h1" size="lg" pb={"60px"} letterSpacing={"tighter"}>About us</Heading></Center>
      <Center>
        <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '20rem', md: '20rem', lg:"50rem" }}
        height={{ sm: '1rem', md: '20rem', lg:"30rem" }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        overflow="hidden"
        overflowWrap={"break-word"}
        boxShadow={'2xl'}
        padding={4}>
        <Flex minWidth={0}
        minH={0}  flex={1} bg="blue.200">
          <Image
            objectFit="fill"
            boxSize="100%"
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          overflowWrap={"break-word"}
          alignItems="center"
          
          >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Lindsey James
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            @lindsey_jam3s
          </Text>
          <Text
            textAlign={'center'}
            wordBreak="break-all"
            whiteSpace={"pre-wrap"}
            fontSize={"15px"}
            overflowWrap={"break-word"}
            //color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or
            me in your posts
            Actress, musician, songwriter and artist. PM for work inquires or
            me in your postsActress, musician, songwriter and artist. PM for work inquires or
            me in your postsActress, musician, songwriter and artist. PM for work inquires or
            me in your postsActress, musician, songwriter and artist. PM for work inquires or
            me in your postsActress, musician, songwriter and artist. PM for work inquires or
            me in your postsActress, musician, songwriter and artist. PM for work inquires or
            me in your postsActress, musician, songwriter and artist. PM for work inquires or
            me in your postsActress, musician, songwriter and artist. PM for work inquires or

          </Text>


        </Stack>
      </Stack>
      </Center>
      
    
  </Box>
    </>
  );
}


 function Guarantees() {
  return (
    <>
    <Box w='calc(100vw)'   
        height={{
          base: '100%', // 0-48em
          sm: '100%', // 48em-80em,
          md: '100%', // 48em-80em,
          xl: '65vh', // 80em+
        }} 
        bg='brand.500' p={4}> 
    <Center><Heading as="h1" size="lg" letterSpacing={"tighter"}  pb={"20px"}>Guarantees</Heading></Center>
    <Center>
       <SimpleGrid  columns={{ base: 1, md: 3 }}
        p={{
          base: '10px', // 0-48em
          md: '100px', // 48em-80em,
          xl: '120px', // 80em+
        }}   spacing={5} >
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
            `          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
            `          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
            `
          }
        />
      </SimpleGrid>
    </Center>
   
    </Box>
    </>
  );
}


  return (
    <>
   <Image  w='calc(100vw)'   h='calc(100vh)'  src='https://images.unsplash.com/photo-1596577843272-67744c9d0e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Green Tree Boa' />
    <About/>
    <Guarantees/>
    <Footer/>
    </>
  );
}
