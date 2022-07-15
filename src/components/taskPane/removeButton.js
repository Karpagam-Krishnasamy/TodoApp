import { React } from 'react';

const RemoveButton = ({ actions, data }) =>
	<button
		onClick={ () => {
			actions.removeTask(data.id);
		} }
	>X</button>;

export default RemoveButton;
