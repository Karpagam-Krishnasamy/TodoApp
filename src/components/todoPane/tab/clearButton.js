import React from 'react';

const ClearButton = ({ actions, taskId }) =>
	<button
		id="removeButton"
		onClick={ () => {
			actions.clearButton(taskId);
		} }
	>X</button>;

export default ClearButton;
