import { React } from 'react';

const SelectAll = ({ context }) => {
	const { state: { toggleAll, filter }, actions } = context;

	return <div className="left-align">
		<input
			type="checkbox"
			checked={ toggleAll }
			onChange={ () => {
				actions.selectAll(toggleAll);
				actions.showTabContent({ tabName: filter });
			} }
		/>
		<span>SelectAll</span>
	</div>;
};

export default SelectAll;
