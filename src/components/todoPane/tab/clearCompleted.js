import React from 'react';

const ClearCompleted = ({ context }) =>
	<button
		onClick={ () => {
			context.actions.clearCompleted(context);
			context.actions.showTabContent({ tabName: context.state.filter });
		} }
	>Clear Completed</button>;

export default ClearCompleted;
