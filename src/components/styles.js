import styled from "styled-components"

import { Colors } from "../util/Colors"
import { device } from '../util/util'

export const HeaderText = styled.span`
font-family: "Montserrat", sans-serif;
font-weight: bold;
font-size: 5vw;
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
@media ${device.tablet} {
		font-size: 2.3em;
	}
@media ${device.mobile} {
		font-size: 2.3em;
	}
`

export const Container = styled.div`
	background-color: ${Colors.mainBlack};
	display: flex;
	justify-content: center;
	width: 100%;
	color: ${Colors.mainWhite};
	font-family: "Montserrat", sans-serif;
`
export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 90%;
`

export const Title = styled.div`
	display: flex;
  flex-direction: column;
	width: 100vw;
  height: 75vh;
`

export const Line = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	@media ${device.tablet} {
		flex-direction: column;
	}
`

export const For = styled.em`
	font-family: "Seaweed Script";
	font-size: 4.5vw;
	color: ${Colors.coolBlue};
  margin: 0px 15px;
  @media ${device.tablet} {
		font-size: 2.3em;
    margin: 0px 8px;
	}
		@media ${device.mobile} {
		font-size: 1.5em;
    margin: 0px 8px;
	}
`

export const InstructorSection = styled.div`
	height: 24vh;
	display: flex;
  width: 100%;
  justify-content: center;
	align-items: center;
  margin: 0 0 16vh;
`

export const InstructorPic = styled.img`
	height: 4em;
	border-radius: 50%;
`

export const TaughtBy = styled.div`
margin: 0px 0 0 20px;
font-weight: 500;
font-size: 18px;
`

export const ShaundaiNameLink = styled.a`
font-weight: bold;
display: block;
font-size: 20px;
`

export const SignUp = styled.div`
color: ${Colors.mainPurpleBright};
width: 100%;
text-align: center;
`