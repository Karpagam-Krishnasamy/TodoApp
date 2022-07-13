/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
/* eslint-disable max-len */
import { React } from 'react';
import Header from './header';
import TodoTab from './todoTab';
import TabContent from './taskList';
import ClearCompleted from './clearCompleted';
import SelectAll from './selectAll';

const todoPane = ({ context }) =>
	<div className="col-1">
		<Header/><br/><br/>
		<label>Task:</label>
		<input
			type="text"
			value={ context.state.input }
			onChange={ (event) => context.actions.setInput(event.target.value) }
		/>
		<button
			onClick={ () => {
				context.actions.addTodoTask(context);
				context.actions.showTabContent({ tabName: 'All' });
			} }
		>{context.state.buttonName}</button>
		<br/>
		<TodoTab context={ context }/>
		<br/>
		<SelectAll context={ context }/>
		<TabContent context={ context }/>
		<ClearCompleted context={ context }/>
	</div>;

export default todoPane;
