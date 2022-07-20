import { React } from 'react';
import ActionKeys from '../../../services/actionKeys';

const Input = ({ context }) => {
	const { state: { input }, actions } = context;

	return <span>
		<label>Todo:</label>
		<input
			id="TodoInput"
			type="text"
			value={ input }
			onChange={ (event) => actions.setInput(event.target.value) }
			onKeyUp={ (event) =>
				ActionKeys[event.code] && ActionKeys[event.code](context) }
		/>
	</span>;
};

export default Input;
