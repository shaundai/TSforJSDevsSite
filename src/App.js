import React from "react"
import styled from "styled-components"

import Shaundai from "./images/shaundaipic.png"
import { Colors } from "./util/Colors"
import { Emoji } from "./util/Emoji"
import { Footer } from "./components/Footer"
import { SubscribeForm } from "./components/SubscribeForm"

const Container = styled.div`
	background-color: ${Colors.mainBlack};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	color: ${Colors.mainWhite};
`
const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 90%;
`

const Header = styled.div`
	display: flex;
	flex-direction: column;
`

const Title = styled.div``

const For = styled.em`
	font-family: "Seaweed Script";
	font-size: 4.4vw;
	color: ${Colors.coolBlue};
`

const HeaderText = styled.span`
	width: 100%;
  font-family: "Montserrat", sans-serif;
	font-weight: bold;
	font-size: 5vw;
	margin-right: 5px;
	margin-left: 10px;
	background-color: ${Colors.mainPurpleBright};
	background-image: linear-gradient(
		45deg,
		${Colors.mainPurpleBright},
		${Colors.softOrange}
	);
	background-size: 100%;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
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
			<Header>
				<HeaderText>
					Type errors are <Emoji symbol="✨" label="sparkles" />
					annoying
					<Emoji symbol="✨" label="sparkles" />.
				</HeaderText>
				<div>
					When you’re used to the carefree life of declaring variables without
					having to worry about their future, what they’ll eventually become,
					and the functions they’ll have to interact with, adding types to your
					code just seems like a bunch of extra work for little reward.
				</div>
			</Header>
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
