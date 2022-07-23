import { React } from 'react';
import config from '../../../core/config';

const Tab = ({ context }) =>
	config.tabs.map((data) =>
		<button
			key={ data }
			id={ data }
			onClick={ () => context.actions.setFilter(data) }
		>
			{data}
		</button>);

export default Tab;
