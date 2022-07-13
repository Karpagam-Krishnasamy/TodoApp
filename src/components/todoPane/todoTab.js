/* eslint-disable max-len */
import { React } from 'react';
import config from '../../core/config';

const AllTabs = ({ context }) =>
	config.tabs.map((data) =>
		<button
			key={ data }
			onClick={ () => context.actions.showTabContent({ tabName: data }) }
		>
			{data}
		</button>);

export default AllTabs;
