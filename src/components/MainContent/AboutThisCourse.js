import React from "react"
import styled from "styled-components"
import { Colors } from "../../util/Colors"

const lineHeight = "40px"

const CourseModulesTitle = styled.header`
font-weight: bold;
font-size: 28px;
color: ${Colors.mainPurpleBright};
margin-bottom: 20px;
`

const GridContainer = styled.div`
	display: flex;
  justify-content: space-around;
  width: 70%;
  background-color: ${Colors.offBlack};
  border-radius: 8px;
  padding: 20px 0px;
  margin-bottom: 100px;
`

const MainColumn = styled.div`
	display: flex;
	flex-direction: column;
`

const Row = styled.div`
	display: flex;
`
const ColNumber = styled.div`
	color: ${Colors.mainPurpleBright};
	font-weight: bold;
	font-size: 20px;
  height: 40px;
	line-height: ${lineHeight};
  margin-right: 18px;
`
const Col = styled.div`
	line-height: ${lineHeight};
  height: 40px;
  flex-wrap: wrap;
`
export const AboutThisCourse = () => {
	return (
		<>
			<CourseModulesTitle>Course Modules</CourseModulesTitle>
			<GridContainer>
				<MainColumn>
					<Row>
						<ColNumber size={1}>1.</ColNumber>
						<Col size={1}><div>Why TypeScript</div></Col>
					</Row>
					<Row>
						<ColNumber size={1}>2.</ColNumber>
						<Col size={1}>Configuring Your Environment</Col>
					</Row>
					<Row>
						<ColNumber size={1}>3.</ColNumber>
						<Col size={1}>Intro to Types</Col>
					</Row>
				</MainColumn>
				<MainColumn>
					<Row>
						<ColNumber size={1}>4.</ColNumber>
						<Col size={1}>Type Aliases, Unions, and Intersections</Col>
					</Row>
					<Row>
						<ColNumber size={1}>5.</ColNumber>
						<Col size={1}>Advanced Types</Col>
					</Row>
					<Row>
						<ColNumber size={1}>6.</ColNumber>
						<Col size={1}>Error Handling</Col>
					</Row>
				</MainColumn>
			</GridContainer>
		</>
	)
}
