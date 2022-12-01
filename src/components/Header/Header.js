import './Header.scss';
import { useColorMode, Button } from '@chakra-ui/react';


const Header = () => {
        const { colorMode, toggleColorMode } = useColorMode()
        return (
          <header>
            <Button onClick={toggleColorMode}>
              Switch Color Mode: {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          </header>
        )
      }

export default Header;