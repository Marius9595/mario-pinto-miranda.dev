import { Stack } from '@chakra-ui/react';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SocialButton } from '../atoms/social-button';

export function SocialMediaStack() {
  return (
    <Stack direction={'row'} spacing={6}>
      <SocialButton label={'Twitter'} href={'#'}>
        <FaLinkedinIn />
      </SocialButton>
      <SocialButton label={'YouTube'} href={'#'}>
        <FaYoutube />
      </SocialButton>
      <SocialButton label={'Instagram'} href={'#'}>
        <FaInstagram />
      </SocialButton>
    </Stack>
  );
}
