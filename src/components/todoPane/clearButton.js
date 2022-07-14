import React from 'react';

const ClearButton = ({ actions, taskId }) =>
	<button
		onClick={ () => {
			actions.clearButton(taskId);
			actions.showTabContent({ tabName: 'All' });
		} }
	>X</button>;

export default ClearButton;
