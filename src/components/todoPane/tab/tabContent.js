import { React } from 'react';
import filterTodo from '../../../services/filterTodo';
import CheckBox from './checkBox';
import ClearButton from './clearButton';
import TodoTask from './todoTaskName';

const TabContent = ({ context }) =>
	filterTodo.viewTodo(context).map((data) =>
		<div key={ data.id } id="tabcontent" className="display-left">
			<CheckBox { ...{ ...context, data } }/>&nbsp;
			<TodoTask { ...{ ...context, data } }/>&nbsp;&nbsp;
			<ClearButton { ...{ ...context, taskId: data.id } }/>
			<br/>
		</div>);

export default TabContent;
