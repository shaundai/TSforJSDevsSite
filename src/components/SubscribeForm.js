import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

export const SubscribeForm = () => {
	return (
		<Container>
			<script src="https://f.convertkit.com/ckjs/ck.5.js" />
			<Form
				action="https://app.convertkit.com/forms/2282243/subscriptions"
				class="seva-form formkit-form"
				method="post"
				data-sv-form="2282243"
				data-uid="508e65a189"
				data-format="inline"
				data-version="5"
				data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
				min-width="400 500 600 700 800"
			>
				<div data-style="clean">
					<ul data-element="errors" data-group="alert"></ul>
					<div data-element="fields" data-stacked="false">
						<div>
							<Form.Row>
								<Form.Group as={Col} md={2}>
									<Form.Control
										aria-label="First Name"
										name="fields[first_name]"
										required
										placeholder="First Name"
										type="text"
									/>
								</Form.Group>
								<Form.Group as={Col} md={3}>
									<Form.Control
										name="email_address"
										aria-label="Email Address"
										placeholder="Email Address"
										required
										type="email"
									/>
								</Form.Group>
								<Form.Group as={Col} md={1}>
									<Button data-element="submit" type="submit" variant="primary">
										Subscribe
									</Button>
								</Form.Group>
							</Form.Row>
						</div>
					</div>
				</div>
			</Form>
		</Container>
	)
}
