import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainContent } from "./components/MainContent/MainContent"
import { SubscribeSuccessful } from './components/Form/SubscribeSuccessful';


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
