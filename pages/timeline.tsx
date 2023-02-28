
import { Nav } from '../components/organisms/navbar'
import {Footer} from '../components/organisms/footer'
import {Meta} from '../components/organisms/meta'
import { Box, Text } from '@chakra-ui/react'



export default function Timeline() {
  return (
    <>
        <Meta
          title='Timeline'
          description='Timeline de Mario Pinto Miranda'
        />
        <Box>
          <Nav></Nav>
          <Text>HOLA</Text>
        </Box>
        <Footer/>
    </>
  )
}