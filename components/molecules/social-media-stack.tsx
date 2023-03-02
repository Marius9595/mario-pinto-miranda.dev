import { Stack } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SocialButton } from '../atoms/social-button';

export function SocialMediaStack() {
  return (
    <Stack direction={'row'} spacing={6}>
      <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/mariopintomiranda/'}>
        <FaLinkedinIn />
      </SocialButton>
      <SocialButton label={'YouTube'} href={'#'}>
        <FaYoutube />
      </SocialButton>
      <SocialButton label={'Instagram'} href={'#'}>
        <FaInstagram />
      </SocialButton>
      <SocialButton label={'Github'} href={'https://github.com/Marius9595'}>
        <FaGithub />
      </SocialButton>
    </Stack>
  );
}
