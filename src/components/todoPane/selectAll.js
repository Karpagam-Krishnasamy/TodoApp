import { React } from 'react';

const SelectAll = ({ context }) => {
	const { state: { toggleAll }, actions } = context;

	return <div>
		<input
			type="checkbox"
			checked={ toggleAll }
			onChange={ () => {
				actions.selectAll(toggleAll);
				actions.showTabContent({ tabName: 'All' });
			} }
		/>
		<span>SelectAll</span>
	</div>;
};

export default SelectAll;
