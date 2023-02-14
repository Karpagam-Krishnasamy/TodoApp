/* eslint-disable no-undef */
import React from 'react';

const storeState = ({ state }) =>
	localStorage.setItem('state', JSON.stringify(state));

const SaveAndExitButton = (context) =>
	<button
		onClick={ storeState(context) }
	>
		Save
	</button>;

export default SaveAndExitButton;
