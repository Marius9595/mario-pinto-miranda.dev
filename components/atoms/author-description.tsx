import React from 'react';
import { Text, useColorModeValue} from '@chakra-ui/react';

export const AuthorDescription = () => {
  const bold='bold';

  return (
    <Text
      as="p"
      marginTop="2"
      color={useColorModeValue('gray.700', 'gray.200')}
      fontSize={{ base: "x-large", sm: "medium", md: "3xl" }}
    >
      <Text as="span" fontWeight={bold}>¿Qué hago? </Text>
        Resolver problemas
      <Text as="span" fontWeight={bold}> ¿Por qué  desarrollo de software? </Text>
        La tecnolgía me permite llevar a la realidad aquello que se alojaba en mi imaginación
      <Text as="span" fontWeight={bold}> ¿Cómo Trabajo? </Text>
        Cada día mejorando para que siga las mejores prácticas de la
        artesenía del software y metodologías Agile
      <Text as="span" fontWeight={bold}> ¿Para qué? </Text>
        Desarrollar un software que genere impacto y de éxito
        porque es capaz de ser sostenible con el paso del tiempo.
    </Text>
  )
};
