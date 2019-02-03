import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				Contacts: state.Contacts.filter((contact) => contact.id !== action.payload)
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		Contacts: [
			{
				id: 1,
				name: 'praveen',
				email: 'praveeen.mr288@gmail.com',
				phone: '55200'
			},
			{
				id: 2,
				name: 'jaffer',
				email: 'jaffer.m288@gmail.com',
				phone: '369871'
			},
			{
				id: 3,
				name: 'arvind',
				email: 'arvind.r288@gmail.com',
				phone: '852039'
			}
		],
		dispatch: (action) => this.setState((state) => reducer(state, action))
	};
	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
