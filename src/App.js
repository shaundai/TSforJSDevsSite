import React from "react"

import Shaundai from "./images/shaundaipic.png"
import { Footer } from "./components/Footer"
import { SubscribeForm } from "./components/SubscribeForm"
import { Header } from "./components/Header"
import { HeaderText, Container, Content, Title, Line, For, SignUp, InstructorPic, InstructorSection, TaughtBy, ShaundaiNameLink } from "./components/styles"

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
				<a href="https://www.twitter.com/shaundai"><InstructorPic src={Shaundai} alt="some pretty chick"/></a>
					<TaughtBy>Course Instructor:{" "}
					<ShaundaiNameLink href="https://www.twitter.com/shaundai">Shaundai Person</ShaundaiNameLink>
						</TaughtBy>
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
