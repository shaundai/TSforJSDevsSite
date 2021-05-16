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
font-size: 2em;
`

const JavaScriptText = styled.span`
margin-right: 1em;
margin-left: 1em;
background-color: ${Colors.mainPurpleBright};
background-image: linear-gradient(45deg, ${Colors.mainPurpleBright}, ${Colors.softOrange});
background-size: 100%;
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent; 
-moz-background-clip: text;
-moz-text-fill-color: transparent;
`

const App = () => {
  return (
    <Container>
        <Header>
          <JavaScriptText>TypeScript</JavaScriptText>
          <em>for</em>
          
          <JavaScriptText>JavaScript</JavaScriptText>
           <JavaScriptText>Developers</JavaScriptText>
           </Header>
        <Footer />
    </Container>
  )
}

export default App;
