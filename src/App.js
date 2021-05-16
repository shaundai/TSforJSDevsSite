import React from 'react'
import styled from 'styled-components'

import { Colors } from './util/Colors'
import { Footer } from './components/Footer'

const Container = styled.div`
    background-color: ${Colors.mainBlack};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`

const Header = styled.div`
color: ${Colors.mainWhite};
`

const App = () => {
  return (
    <Container>
        <Header>TypeScript for JavaScript Developers</Header>
        <Footer />
    </Container>
  )
}

export default App;
