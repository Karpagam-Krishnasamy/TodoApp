/* eslint-disable no-console */
import { React } from 'react';
import CloseButton from './closeButton';

const TabContent = ({ context }) =>
	(context.state.filteredTask.length === 0
		? []
		:	context.state.filteredTask.map((data) =>
			<div key={ data.name }>
				<input
					type="checkbox"
					checked={ data.isCompleted }
					onChange={ () => {
						data.isCompleted = !data.isCompleted;
						context.actions.toggleTodo(data);
					} }
				/>
				<span
					onClick={ () => context.actions.setEdit(data.name) }
				>
					{data.name}</span>
				<CloseButton { ...{ ...context, taskId: data.name } }/>
				<br/>
			</div>));

export default TabContent;
