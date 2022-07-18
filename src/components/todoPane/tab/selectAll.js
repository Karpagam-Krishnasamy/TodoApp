import { React } from 'react';

const SelectAll = ({ context }) => {
	const { state: { toggleAll }, actions } = context;

	return <div className="left-align">
		<input
			type="checkbox"
			checked={ toggleAll }
			onChange={ () => {
				actions.selectAll(toggleAll);
			} }
		/>
		<span>SelectAll</span>
	</div>;
};

export default SelectAll;
