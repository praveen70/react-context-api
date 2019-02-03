import React, { Component } from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import { Consumer } from '../context';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;
const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;

const StyledLink = styled(Contact)`
  color: palevioletred;
  font-weight: bold;
  border-top: 10px double ${props => props.theme.black};
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
`;

class Contacts extends Component {
	// state = {
	// 	Contacts: [
	// 		{
	// 			id: 1,
	// 			name: 'praveen',
	// 			email: 'praveeen.mr288@gmail.com',
	// 			phone: '55200'
	// 		},
	// 		{
	// 			id: 2,
	// 			name: 'jaffer',
	// 			email: 'jaffer.m288@gmail.com',
	// 			phone: '369871'
	// 		},
	// 		{
	// 			id: 3,
	// 			name: 'arvind',
	// 			email: 'arvind.r288@gmail.com',
	// 			phone: '852039'
	// 		}
	// 	]
	// };

	// deleteContact = (id) => {
	// 	const { Contacts } = this.state;
	// 	const newContacts = Contacts.filter((contact) => contact.id !== id);
	// 	this.setState({
	// 		Contacts: newContacts
	// 	});
	// };

	render() {
		return (
			<Consumer>
				{(value) => {
					const { Contacts } = value;
					return (
						<React.Fragment>
							{Contacts.map((contact) => (
								<div key={contact.id}>
									<Wrapper>
										<Title>
											<StyledLink contact={contact} />
												{/* <Contact
													contact={contact}
													// deleteClickHandler={this.deleteContact.bind(this, contact.id)}
												/> */}
											
										</Title>
									</Wrapper>
								</div>
							))}
						</React.Fragment>
					);
				}}
			</Consumer>
		);

		// const { Contacts } = this.state;
		// return (
		// 	<React.Fragment>
		// 		{Contacts.map((contact) => (
		// 			<div key={contact.id}>
		// 				<Contact contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
		// 			</div>
		// 		))}
		// 	</React.Fragment>
		// );
	}
}

export default Contacts;
