import React from 'react';

const ClearButton = ({ actions, taskId, state }) =>
	<button
		onClick={ () => {
			actions.clearButton(taskId);
			actions.showTabContent({ tabName: state.filter });
		} }
	>X</button>;

export default ClearButton;
