import { React } from 'react';
import selectTodo from '../../../services/selectTodo';

const SelectAll = ({ context }) => {
	const { actions } = context;
	const isActiveTodoExist = selectTodo.isActiveTodoExist(context);

	return <div className="left-align">
		<input
			id="selectall"
			type="checkbox"
			checked={ !isActiveTodoExist }
			onChange={ () => { actions.selectAll(!isActiveTodoExist); } }
		/>
		<span>SelectAll</span>
	</div>;
};

export default SelectAll;
