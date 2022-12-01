import './AboutMe.scss';
import { Stack, Text, Box, useColorMode } from '@chakra-ui/react';

const AboutMe = () => {
    const { colorMode } = useColorMode()
    if (colorMode === 'dark') {
        return (
            <Box className='about-me' spacing={3}>
                <Stack className='introduction-dark'>
                    <Text className='first-name-dark' fontSize='9xl'>Maia E.</Text>
                    <Text className='last-name-dark' fontSize='9xl'>Cochran</Text>
                    <Text className='pronounciation-dark' fontSize='2xl'>pronounced: <i>"m-eye-uh k-ah-kh-r-ay-n"</i></Text>
                    <Text className='journey-dark'> About me and dev journey </Text>
                    <Text className='goals-dark'> About me and dev goals </Text>
                    <Text className='tech-dark'> Featured tech  </Text>
                    <Text className='education-dark'> Education info here </Text>
                </Stack>
            </Box>
        )
    }
    else if (colorMode === 'light') {
        return (
            <Box className='about-me'>
                <Stack className='introduction-light' spacing={3}>
                    <Text className='name-light' fontSize='9xl'>Maia E. Cochran</Text>
                    <Text className='pronounciation-light' fontSize='2xl'>pronounced: <i>"m-eye-uh k-ah-kh-r-ay-n"</i></Text>
                    <Text className='journey-light'> About me and dev journey </Text>
                    <Text className='goals-light'> About me and dev goals </Text>
                    <Text className='tech-light'> Featured tech  </Text>
                    <Text className='education-light'> Education info here </Text>
                </Stack>
            </Box>
        )
    }
}

export default AboutMe;