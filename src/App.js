import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`

const Header = styled.div`
color: white;
`

const Footer = styled.div`
color: white;
`

const App = () => {
  return (
    <Container>
        <Header>TypeScript for JavaScript Developers</Header>
        <Footer>made with love by Shaundai Person</Footer>
    </Container>
  )
}

export default App;
