import React from "react"
import styled from "styled-components"

import Shaundai from "./images/shaundaipic.png"
import { Colors } from "./util/Colors"
import { Footer } from "./components/Footer"
import { SubscribeForm } from "./components/SubscribeForm"
import { Header } from "./components/Header"
import { HeaderText } from "./components/styles"
import { device } from './util/util'

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

const Title = styled.div`
	display: flex;
  flex-direction: column;
	width: 100%;
  height: 75vh;
`

const Line = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
`

const For = styled.em`
	font-family: "Seaweed Script";
	font-size: 4.5vw;
	color: ${Colors.coolBlue};
  margin: 0px 15px;
  @media ${device.tablet} {
		font-size: 2.3em;
    margin: 0px 8px;
	}
`

const InstructorPic = styled.img`
	height: 4em;
	border-radius: 50%;
`

const InstructorSection = styled.div`
	height: 24vh;
	display: flex;
  justify-content: center;
	align-items: center;
  margin: 6vh 0 16vh;
`

const TaughtBy = styled.div`
margin: 0px 10px;
font-weight: 600;
font-size: 20px;
`

const SignUp = styled.div`
color: ${Colors.mainPurpleBright};
width: 100%;
text-align: center;
`

const App = () => {
	return (
		<Container>
			<Content>
				<Header />
				<Title>
					<Line>
						<HeaderText>TypeScript</HeaderText>
						<For>for</For>
						<HeaderText>JavaScript</HeaderText>
					</Line>
					<Line>
						<HeaderText>Developers</HeaderText>
					</Line>
          <SignUp>*coming Summer 2021*</SignUp>


				<InstructorSection>
					<InstructorPic src={Shaundai} alt="some pretty chick"></InstructorPic>
					<TaughtBy>taught by{" "}
					<a href="https://www.twitter.com/shaundai">Shaundai Person</a></TaughtBy>
				</InstructorSection>
        </Title>
        <SignUp>sign up for updates (no spam, I pinky promise.)</SignUp>
				<SubscribeForm />
				<Footer />
			</Content>
		</Container>
	)
}

export default App
