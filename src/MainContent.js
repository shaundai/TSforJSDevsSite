import React from "react"
import { Footer } from "./components/Footer"
import { Instructor } from "./components/Instructor"
import { SubscribeForm } from "./components/SubscribeForm"
import { Header } from "./components/Header"
import { HeaderText, Container, Content, Title, Line, For, SignUp } from "./components/styles"

export const MainContent = () => {
	return (
		<Container>
			<Content>
				<Header />
				<Title>
					<Line>introducing</Line>
					<Line>
						<HeaderText>TypeScript</HeaderText>
						<For>for</For>
						<HeaderText>JavaScript</HeaderText>
					</Line>
					<Line>
						<HeaderText>Developers</HeaderText>
					</Line>
          <SignUp>(coming Summer 2021)</SignUp>

				<Instructor />
        </Title>
				<SubscribeForm />
				<Footer />
			</Content>
		</Container>
	)
}

export default MainContent
