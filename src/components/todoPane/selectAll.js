import { React } from 'react';

const SelectAll = ({ context }) =>
	<div>
		<input
			type="checkbox"
			checked={ context.state.toggleAll }
			onChange={ () => {
				context.actions.selectAll(context.state.toggleAll);
				context.actions.showTabContent({ tabName: 'All' });
			} }
		/>
		<span>SelectAll</span>
	</div>;

export default SelectAll;
