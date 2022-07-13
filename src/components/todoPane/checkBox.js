import { React } from 'react';

const CheckBox = ({ actions, data }) =>
	<input
		type="checkbox"
		checked={ data.isCompleted }
		onChange={ () => {
			data.isCompleted = !data.isCompleted;
			actions.toggleTodo(data);
		} }
	/>;

export default CheckBox;
