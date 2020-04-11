import React from 'react'
import { NextPage } from 'next'
import { Container, StackCard } from '@47ng/chakra-next'
import Text from '@chakra-ui/core/dist/Text'

// --

const IndexPage: NextPage = () => {
  return (
    <Container mt={12}>
      <StackCard>
        <Text>Foo</Text>
      </StackCard>
    </Container>
  )
}

export default IndexPage
