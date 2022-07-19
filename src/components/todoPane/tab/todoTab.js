import { React } from 'react';
import TabContent from './tabContent';
import ClearCompleted from './clearCompleted';
import SelectAll from './selectAll';
import Tab from './tab';

const TodoTab = ({ context }) =>
	context.state.todoList.length !== 0
		&& <div><br/><br/>
			<Tab context={ context }/><br/><br/>
			<SelectAll context={ context }/><br/>
			<div className="align-content">
				<TabContent context={ context }/>
			</div><br/>
			<ClearCompleted context={ context }/>
		</div>;

export default TodoTab;
