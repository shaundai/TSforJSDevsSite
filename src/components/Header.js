import styled from "styled-components"

import { HeaderText } from "./styles"
import { Colors } from "../util/Colors"
import { Emoji, device } from "../util/util"
import ChevronDown from "../images/chevrondown.png"

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 0 50px;
	height: 100vh;
	@media ${device.tablet} {
		text-align: left;
		align-items: flex-start;
	}
`

const CourseDescription = styled.section`
	font-size: 2.2vw;
	font-weight: 600;
	width: 87%;
	margin-top: 29px;
	@media ${device.tablet} {
		font-size: 16px;
		margin-top: 16px;
	}
	@media ${device.mobile} {
		font-size: 16px;
		margin-top: 16px;
		width: 80%;
	}
`

const SmallHeaderText = styled.header`
	font-size: 2.3vw;
	font-family: "Montserrat", sans-serif;
	font-weight: bold;
	color: ${Colors.white};
	@media ${device.tablet} {
		font-size: 16px;
	}
	@media ${device.mobile} {
		font-size: 17px;
	}
`

const ChevronButton = styled.button`
	margin-top: 3em;
	background-color: transparent;
	border: none;
	align-self: center;
`

const ChevronIcon = styled.img`
	height: 20px;
	width: 48px;
	@media ${device.tablet} {
		height: 15px;
	  width: 38px;
	}
`

const SmallHeaderTextContainer = styled.header`
	margin-top: 20px;
`

export const Header = () => {
	return (
		<HeaderContainer>
			<HeaderText>
				Type errors are <Emoji symbol="✨" label="sparkles" />
				annoying
				<Emoji symbol="✨" label="sparkles" />.
			</HeaderText>
			<CourseDescription>
				When you’re used to the carefree life of declaring variables without
				worrying about what they’ll eventually become or the functions they’ll
				interact with, adding types just seems like...
				<SmallHeaderTextContainer>
					<SmallHeaderText>
						a bunch of extra work for little reward.
					</SmallHeaderText>
				</SmallHeaderTextContainer>
			</CourseDescription>
			<ChevronButton>
				<ChevronIcon src={ChevronDown} alt="down button" />
			</ChevronButton>
		</HeaderContainer>
	)
}
