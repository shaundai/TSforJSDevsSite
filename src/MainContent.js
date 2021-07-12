import React from "react"
import styled from "styled-components"
import { Footer } from "./components/Footer"
import { Instructor } from "./components/Instructor"
import { SubscribeForm } from "./components/SubscribeForm"
import { Header } from "./components/Header"
import { AboutThisCourse } from "./components/AboutThisCourse"
import {
	HeaderText,
	Container,
	Content,
	Title,
	Line,
	For,
	SignUp,
	FooterContainer
} from "./components/styles"

const Filler = styled.div`
	height: 25vh;
`
export const MainContent = () => {
	return (
		<Container>
			<Content>
				<Header />
				<Filler />
				<Title>
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
				<AboutThisCourse/>
				<FooterContainer>
					<SubscribeForm />
					<Footer />
				</FooterContainer>
			</Content>
		</Container>
	)
}

export default MainContent
