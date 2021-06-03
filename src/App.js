import React from "react"

import Shaundai from "./images/shaundaipic.png"
import { Footer } from "./components/Footer"
import { SubscribeForm } from "./components/SubscribeForm"
import { Header } from "./components/Header"
import { HeaderText, Container, Content, Title, Line, For, SignUp, InstructorPic, InstructorSection, TaughtBy } from "./components/styles"

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
