import React, { useState } from 'react'
import { ContentPanel } from './ContentPanel'
import angeldown from '../../images/angeldown.svg'
import angelup from '../../images/angelup.svg'

import {
	Chevron,
  ChevronContainer,
	Row,
	NumberContainer,
	ColNumber,
	Col,
} from './MainContentStyles'

export const CoursePanel = ({ title }) => {
	const [isAccordionOpen, setIsAccordionOpen] = useState(false)

	const handleClick = () => {
		setIsAccordionOpen(!isAccordionOpen)
	}

	return (
		<>
			<Row onClick={handleClick}>
				<NumberContainer>
					<ColNumber size={1}>{title.number}.</ColNumber>
					<Col size={1}>
						<div>{title.title}</div>
					</Col>
				</NumberContainer>

				{title.content && (
					<ChevronContainer>
          <Chevron
						src={isAccordionOpen ? angelup : angeldown}
						alt='chevron down arrow'
					/>
          </ChevronContainer>
				)}
			</Row>
			{title.content && isAccordionOpen && (
				<Row>
					<ContentPanel contentlist={title.content} />
				</Row>
			)}
		</>
	)
}
