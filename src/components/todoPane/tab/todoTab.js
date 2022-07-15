import { React } from 'react';
import TabContent from './tabContent';
import ClearCompleted from './clearCompleted';
import SelectAll from './selectAll';
import Tab from './tab';

const TodoTab = ({ context }) =>
	(context.state.todoList.length !== 0
		? <div>
			<Tab context={ context }/>
			<SelectAll context={ context }/>
			<TabContent context={ context }/>
			<ClearCompleted context={ context }/>
		</div>
		: []);

export default TodoTab;
