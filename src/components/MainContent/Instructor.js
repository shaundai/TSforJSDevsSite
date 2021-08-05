import React from "react"

import Shaundai from "../../images/shaundaipic.png"
import {
	InstructorPic,
	InstructorContainer,
	TaughtBy,
	ShaundaiNameLink,
	AboutShaundai,
} from "../styles"



export const Instructor = () => {
	return (
	<>
		<InstructorContainer>
			<a href="https://www.twitter.com/shaundai">
				<InstructorPic src={Shaundai} alt="Shaundai Person headshot" />
			</a>
			<TaughtBy>
				Course Instructor:{" "}
				<ShaundaiNameLink href="https://www.twitter.com/shaundai">
					Shaundai Person
				</ShaundaiNameLink>
			</TaughtBy>
		</InstructorContainer>
					<AboutShaundai>
					When Shaundai Person started as a UI Engineer at SalesLoft, she found
					herself part of an engineering team responsible for refactoring a huge
					legacy codebase to TypeScript. In this course she compiles her learnings
					about getting started with TypeScript (while helping you avoid making the
					mistakes she made!). Shaundai is a frontend developer, technical writer,
					and co-organizer of React Ladies.
					</AboutShaundai>
					</>
	)
}
