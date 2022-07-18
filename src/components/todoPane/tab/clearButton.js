import React from 'react';

const ClearButton = ({ actions, taskId }) =>
	<button
		onClick={ () => {
			actions.clearButton(taskId);
		} }
	>X</button>;

export default ClearButton;
