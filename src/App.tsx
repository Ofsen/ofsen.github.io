import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Contact } from './components/pages';
import { Header, Footer } from './components/layout';

const App: React.FC = () => {
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
