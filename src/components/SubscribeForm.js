import styled from "styled-components"
import { HeaderText, SignUp } from "./styles"
import { device } from '../util/util'


import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"

const SubscribeFormContainer = styled.div`
	width: 575px;
  @media ${device.tablet} {
  width: 90%;
	}
`

const OuterFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  align-items: center;
	width: 450px;
  @media ${device.tablet} {
  width: 90%;
	}
`

const StyledHeaderText = styled(HeaderText)`
font-size: 48px;
line-height: 1.2;
align-self: center;

`
export const SubscribeForm = () => {
	return (
		<SubscribeFormContainer>
		<div><StyledHeaderText>Subscribe for Updates and Freebies</StyledHeaderText></div>
		<OuterFormContainer>
      

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
									<div class="form-group">
									<label for="firstName">First Name</label>
										<input
										class="form-control form-control-lg"
											aria-label="First Name"
											name="fields[first_name]"
											required
											placeholder="First Name"
											type="text"
											id="firstName"
										/>
									</div>
									<div class="form-group">
									<label for="lastName">Email<span>*</span></label>
										<input
										class="form-control form-control-lg"
											name="email_address"
											aria-label="Email Address"
											placeholder="Email Address"
											required
											type="email"
											id="lastName"
										/>
									</div>
									<div class="form-group">
										<button
										class="btn btn-primary btn-lg"
											data-element="submit"
											type="submit"
										>
											Subscribe
										</button>
									</div>
							</div>
						</div>
					</div>
				</Form>
			</Container>
			<SignUp>(no spam. ever. pinky promise.)</SignUp>

		</OuterFormContainer>
		</SubscribeFormContainer>
	)
}
