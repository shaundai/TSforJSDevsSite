import styled from "styled-components"

import { HeaderText } from "./styles"
import { Colors } from '../util/Colors'
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
	font-size: 2.2vw;
  font-weight: 600;
	width: 90%;
  margin-top: 29px;
  @media ${device.tablet} {
		font-size: 16px;
    margin-top: 16px;
	}
  @media ${device.mobile} {
		font-size: 12px;
    margin-top: 16px;
	}
`

const SmallHeaderText = styled.span`
font-size: 2.3vw;
font-family: "Montserrat", sans-serif;
font-weight: bold;
color: ${Colors.white};
@media ${device.tablet} {
  font-size: 16px;
	}
  @media ${device.mobile} {
		font-size: 12px;
	}
`

const SmallHeaderTextContainer = styled.div`
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
				<div>When you’re used to the carefree life of declaring variables</div>
        <div>without worrying about what they’ll eventually become</div>
				<div>or the functions they’ll interact with in their journey,</div>
        <div>adding types to your code just seems like... </div>
        <SmallHeaderTextContainer>
          <SmallHeaderText>a bunch of extra work for little reward.</SmallHeaderText>
        </SmallHeaderTextContainer>
			</CourseDescription>
		</HeaderContainer>
	)
}
