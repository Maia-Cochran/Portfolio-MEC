import { ChakraProvider, Button, Box } from '@chakra-ui/react';
import './App.css';
import Header from '../Header/Header'
import AboutMe from '../AboutMe/AboutMe'

const App = () => {
  
  return (
    <ChakraProvider>
      <Box className='app'>
        <Header />
        <AboutMe />
        Main Body of App goes here.
        <Button>Is this a button?</Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
