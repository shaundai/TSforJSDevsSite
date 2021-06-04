import React from "react"

import Shaundai from "../images/shaundaipic.png"
import { InstructorPic, InstructorContainer, TaughtBy, ShaundaiNameLink } from "./styles"

export const Instructor = () => {
	return (
				<InstructorContainer>
				<a href="https://www.twitter.com/shaundai"><InstructorPic src={Shaundai} alt="some pretty chick"/></a>
					<TaughtBy>Course Instructor:{" "}
					<ShaundaiNameLink href="https://www.twitter.com/shaundai">Shaundai Person</ShaundaiNameLink>
						</TaughtBy>
				</InstructorContainer>
	)
}
