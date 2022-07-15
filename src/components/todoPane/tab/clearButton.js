import React from 'react';

const ClearButton = ({ actions, taskId, state: { filter }}) =>
	<button
		onClick={ () => {
			actions.clearButton(taskId);
			actions.showTabContent({ tabName: filter });
		} }
	>X</button>;

export default ClearButton;
