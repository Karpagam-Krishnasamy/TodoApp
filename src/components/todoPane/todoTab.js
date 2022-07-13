import { React } from 'react';
import TabContent from './taskList';
import ClearCompleted from './clearCompleted';
import SelectAll from './selectAll';
import Tab from './tab';

const TodoTab = ({ context }) =>
	<div>
		<Tab context={ context }/>
		<SelectAll context={ context }/>
		<TabContent context={ context }/>
		<ClearCompleted context={ context }/>
	</div>;

export default TodoTab;
