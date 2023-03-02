import React from 'react';
import { Text, useColorModeValue} from '@chakra-ui/react';
import { Span } from './span';

export const AuthorDescription = () => {
  return (
    <Text
      as="p"
      marginTop="2"
      marginEnd="2"
      color={useColorModeValue('gray.700', 'gray.200')}
      fontSize={{base:'sm', sm:'sm', md:'md', lg:'lg'}}
      textAlign={'justify'}
    >
      <Span text={'¿Qué hago?'}/>
        Resolver problemas
      <Span text={'¿Por qué  desarrollo de software?'}/>
        Impresiona como permite llevar a la realidad aquello que se alojaba en la imaginación escribiendo
      <Span text={'¿Cómo Trabajo? '}/>
        Cada día mejorando para que seguir las mejores prácticas de la
        artesenía del software
      <Span text={'¿Para qué?'}/>
        Desarrollar un software que genere impacto y de éxito
        porque es capaz de ser sostenible con el paso del tiempo.
    </Text>
  )
};