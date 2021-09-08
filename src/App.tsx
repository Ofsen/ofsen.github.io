import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Contact, Illustrations, Code } from './components/pages';
import { Header, Footer } from './components/layout';

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<div className='bg-blue-light'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/illustrations' component={Illustrations} />
					<Route exact path='/code' component={Code} />
					<Route exact path='/contact' component={Contact} />
				</Switch>
			</div>
			<Footer />
		</Router>
	);
};

export default App;
