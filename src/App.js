import React from "react"
import styled from "styled-components"

import Shaundai from "./images/shaundaipic.png"
import { Colors } from "./util/Colors"
import { Footer } from "./components/Footer"
import { SubscribeForm } from "./components/SubscribeForm"
import { Header } from './components/Header'
import { HeaderText } from './components/styles'

const Container = styled.div`
	background-color: ${Colors.mainBlack};
	display: flex;
	justify-content: center;
	width: 100%;
	color: ${Colors.mainWhite};
  font-family: "Montserrat", sans-serif;
`
const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90%;
`

const Title = styled.div``

const For = styled.em`
	font-family: "Seaweed Script";
	font-size: 4.4vw;
	color: ${Colors.coolBlue};
`

const InstructorPic = styled.img`
	height: 4em;
	border-radius: 50%;
`

const InstructorSection = styled.div`
	height: 4em;
	display: flex;
	align-items: center;
`

const App = () => {
	return (
		<Container>
      <Content>
			<Header />
			<Title>
				<HeaderText>TypeScript</HeaderText>
				<For>for</For>

				<HeaderText>JavaScript Developers</HeaderText>
				<InstructorSection>
					<InstructorPic src={Shaundai} alt="some pretty chick"></InstructorPic>
					taught by{" "}
					<a href="https://www.twitter.com/shaundai">Shaundai Person</a>
				</InstructorSection>
				<SubscribeForm />
			</Title>

			<Footer />
      </Content>
		</Container>
	)
}

export default App
