import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainContent } from "./MainContent"
import { SubscribeSuccessful } from './SubscribeSuccessful';


const App = () => {
	return (
		<Router>
		 <Switch>
			<Route path="/" component={MainContent} exact />
			<Route path="/signupsuccessful" component={SubscribeSuccessful} />
		</Switch>
	</Router>
	)
}

export default App
