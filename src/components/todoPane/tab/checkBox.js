import { React } from 'react';

const CheckBox = ({ actions, data }) =>
	<input
		id="checkbox"
		type="checkbox"
		checked={ data.isCompleted }
		onChange={ () => {
			actions.toggleTodo(data);
		} }
	/>;

export default CheckBox;
