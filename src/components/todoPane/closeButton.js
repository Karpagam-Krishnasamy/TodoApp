import React from 'react';

const CloseButton = ({ actions, taskId }) =>
	<button
		onClick={ () => {
			actions.closeButton(taskId);
			actions.showTabContent({ tabName: 'All' });
		} }
	>X</button>;

export default CloseButton;
