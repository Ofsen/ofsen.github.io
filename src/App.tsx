import React from 'react';
// Components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import { Home, Contact } from './components/pages';
// Layouts
import { Header, Footer } from './components/layout';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/contact' component={Contact} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
