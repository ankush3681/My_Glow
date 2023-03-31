import React from 'react'
import Line from './Line'
import { Text ,Box } from '@chakra-ui/react'

const Heading = (head) => {
  return (
    <div>  <Box display={'flex'} alignItems='center' margin={'auto'}><Line/><Text fontSize='3xl' padding={'10px'} >{head}</Text><Line/></Box>
    </div>
  )
}

export default Heading