import './AboutMe.css';
import { Box } from '@chakra-ui/react';

const AboutMe = () => {
    return (
        <Box className='about-me'>
            <section className='first-name'>Maia E.</section>
            <section className='last-name'>Cochran</section>
            <section className='pronounciation'>pronounced: <i>"m-eye-uh k-ah-kh-r-ay-n"</i></section>
            <section className='summary'> About me and dev journey & goals </section>
        </Box>
    )
}

export default AboutMe;