import React from 'react';

import {
	BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';

import Home from 'pages/Home';
import Gallery from 'pages/Gallery';
import Galleries from 'pages/Galleries';
import Contact from 'pages/Contact';
import About from 'pages/About';

import Menu from 'components/Menu';

class App extends React.Component {
	render() {
		return (
			<div className="app-container">
				<Router>
					<div className="app">
						<Menu/>
						<Route exact path="/" component={Home}/>
						<Route exact path="/galleries" component={Galleries}/>
						<Route exact path="/gallery/:id" component={Gallery}/>
						<Route exact path="/about" component={About}/>
						<Route exact path="/contact" component={Contact}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;