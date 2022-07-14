import updateTask from '../services/addTask';
import clearTask from '../services/clearTask';
import filterTask from '../services/filterTask';
import selectTask from '../services/selectTask';

const setInput = ({ data }) => ({
	input: data,
});

const addTodoTask = (context) => ({
	todoList: updateTask.Add(context),
	input: '',
});

const updateTodoTask = (context) => ({
	todoList: updateTask.Update(context),
	input: '',
	setEdit: false,
});

const setEdit = ({ data }) => ({
	setEdit: true,
	input: data.name,
	editId: data.id,
});

const showTabContent = (context) => ({
	filteredTask: filterTask.viewTask(context),
});

const toggleTodo = (context) => ({
	todoList: selectTask.selectTask(context),
});

const selectAll = (context) => ({
	todoList: selectTask.selectAllTask(context),
	toggleAll: !context.state.toggleAll,
});

const clearCompleted = (context) => ({
	todoList: clearTask.clearTask(context),
});

const clearButton = (context) => ({
	todoList: clearTask.clearButton(context),
});

const actions = {
	setInput,
	clearCompleted,
	addTodoTask,
	updateTodoTask,
	selectAll,
	showTabContent,
	toggleTodo,
	clearButton,
	setEdit,
};

export default actions;
