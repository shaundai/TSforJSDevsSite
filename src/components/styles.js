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
`