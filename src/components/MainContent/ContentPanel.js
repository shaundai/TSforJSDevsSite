import { AccordionPanel } from './MainContentStyles'

export const ContentPanel = ({contentlist}) => {
	const Panel = contentlist.map(( content, index ) => (
		<AccordionPanel>
			<li key={index}>{content}</li>
		</AccordionPanel>
	))
  return <AccordionPanel>{Panel}</AccordionPanel>
}
