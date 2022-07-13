import React from 'react';

const ClearCompleted = ({ context }) =>
	<button
		onClick={ () => {
			context.actions.clearCompleted(context);
			context.actions.showTabContent({ tabName: 'All' });
		} }
	>Clear Completed</button>;

export default ClearCompleted;
