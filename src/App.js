import React from 'react'
import styled from 'styled-components'

import { Colors } from './util/Colors'
import { Emoji } from './util/Emoji'

const Container = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`

const Header = styled.div`
color: white;
`

const Footer = styled.div`
color: ${Colors.mainWhite};
`

const App = () => {
  return (
    <Container>
        <Header>TypeScript for JavaScript Developers</Header>
        <Footer>made with <Emoji symbol="💖" label="sparking heart"/> by Shaundai Person</Footer>
    </Container>
  )
}

export default App;
