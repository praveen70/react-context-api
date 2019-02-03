import React, { Component } from 'react';
import Contacts from './components/Contacts';
import { Provider } from './context';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider>
				<div className="App">
					<p>Contact Manger</p>
					<div className="container">
						<Contacts />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
