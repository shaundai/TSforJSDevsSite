import React from 'react'
import styled from 'styled-components'

import { Colors } from './util/Colors'
import { Emoji } from './util/Emoji'
import { Footer } from './components/Footer'
import { Form } from './components/Form'

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
display: flex;
flex-direction: column;
color: ${Colors.mainWhite};
`

const Title = styled.div`
`

const HeaderText = styled.span`
font-family: 'Montserrat', sans-serif;
font-weight: bold;
font-size: 4em;
margin-right: 5px;
margin-left: 10px;
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
          <HeaderText>Type errors are <Emoji symbol="✨" label="sparkles" />annoying<Emoji symbol="✨" label="sparkles" />.</HeaderText>

          <div>taught by <a href="https://www.twitter.com/shaundai">Shaundai Person</a></div>
          </Header>
          <Title>
          <HeaderText>TypeScript</HeaderText>
          <em>for</em>
          
          <HeaderText>JavaScript</HeaderText>
           <HeaderText>Developers</HeaderText>
<Form />
           </Title>
        <Footer />
    </Container>
  )
}

export default App;
