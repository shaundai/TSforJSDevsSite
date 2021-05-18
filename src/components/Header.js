import styled from "styled-components"

import { HeaderText } from "./styles"
import { Emoji, device } from "../util/util"

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const CourseDescription = styled.div`
	font-size: 2.3vw;
  font-weight: 600;
	width: 70%;
  margin-top: 29px;
  @media ${device.tablet} {
		font-size: 16px;
    margin-top: 16px;
	}
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
				having to worry about what they’ll eventually become or
				the functions they’ll interact with, adding types to your code
				just seems like <div>a bunch of extra work for little reward.</div>
			</CourseDescription>
		</HeaderContainer>
	)
}
