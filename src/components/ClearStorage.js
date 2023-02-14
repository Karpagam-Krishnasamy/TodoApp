/* eslint-disable no-undef */
import React from 'react';

const ClearStorage = () =>
	<button
		onClick={ () =>
			localStorage.clear() }
	>
		clear
	</button>;

export default ClearStorage;
