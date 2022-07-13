import { React } from 'react';
import TabContent from './taskList';
import ClearCompleted from './clearCompleted';
import SelectAll from './selectAll';

const TodoTab = ({ context }) =>
	<div><TodoTab context={ context }/>
		<br/>
		<SelectAll context={ context }/>
		<TabContent context={ context }/>
		<ClearCompleted context={ context }/>
	</div>;

export default TodoTab;
