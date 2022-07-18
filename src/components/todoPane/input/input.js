import { React } from 'react';

const Input = ({ context }) => {
	const { state: { input }, actions } = context;

	return <span>
		<label>Todo:</label>
		<input
			type="text"
			value={ input }
			onChange={ (event) => actions.setInput(event.target.value) }
		/>
	</span>;
};

export default Input;
