import './AboutMe.scss';
import { Stack, Text, Box } from '@chakra-ui/react';

const AboutMe = () => {
    return (
        <Box className='about-me'>
            <Stack className='introduction'>
                <Text className='first-name' fontSize='9xl'>Maia E.</Text>
                <Text className='last-name' fontSize='9xl'>Cochran</Text>
                <Text className='pronounciation' fontSize='2xl'>pronounced: <i>"m-eye-uh k-ah-kh-r-ay-n"</i></Text>
                <Text className='journey'> About me and dev journey </Text>
                <Text className='goals'> About me and dev goals </Text>
                <Text className='tech'> Featured tech  </Text>
                <Text className='education'> Education info here </Text>
            </Stack>
        </Box>
    )
}

export default AboutMe;