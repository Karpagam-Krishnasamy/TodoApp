import React from 'react';
import selectTodo from '../../../services/selectTodo';

const ClearCompleted = ({ context }) =>
	(selectTodo.isTodoSelected(context)
		? <div>
			<button onClick={ () => {
				context.actions.clearCompleted(context);
			} }
			>Clear Completed</button>
		</div>
		: []);

export default ClearCompleted;
