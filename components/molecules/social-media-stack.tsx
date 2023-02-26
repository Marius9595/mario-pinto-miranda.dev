import { Stack } from '@chakra-ui/react';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SocialButton } from '../atoms/social-button';

export function SocialMediaStack() {
  return (
    <Stack direction={'row'} spacing={6}>
      <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/mariopintomiranda/'}>
        <FaLinkedinIn />
      </SocialButton>
      <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UCq-GrA0UA2Wb7G9yMhR9xFA#'}>
        <FaYoutube />
      </SocialButton>
      <SocialButton label={'Instagram'} href={'#'}>
        <FaInstagram />
      </SocialButton>
    </Stack>
  );
}
