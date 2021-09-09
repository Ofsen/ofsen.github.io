import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header, Footer } from './components/layout';

const Home = lazy(() => import('./components/pages/Home'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Illustrations = lazy(() => import('./components/pages/Illustrations'));
const Code = lazy(() => import('./components/pages/Code'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Suspense fallback={<div className='grid place-items-center h-full'>Loading...</div>}>
				<div className='bg-blue-light'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/illustrations' component={Illustrations} />
						<Route path='/code' component={Code} />
						<Route path='/contact' component={Contact} />
						<Route path='/not-found' component={NotFound} />
						<Redirect path='*' to='/not-found' />
					</Switch>
				</div>
			</Suspense>
			<Footer />
		</Router>
	);
};

export default App;
