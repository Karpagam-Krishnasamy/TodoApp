import updateTask from '../services/addTask';
import clearTask from '../services/clearTask';
import filterTask from '../services/filterTask';
import selectTask from '../services/selectTask';
import taskGenerator from '../services/taskGenerator';

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
	editId: '',
});

const showTabContent = (context) => ({
	filter: context.data.tabName,
	filteredTask: filterTask.viewTask(context),
});

const setEdit = ({ data }) => ({
	input: data.name,
	editId: data.id,
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

const removeTask = (context) => ({
	taskList: clearTask.removeTask(context),
});

const generateTask = (context) => ({
	taskList: taskGenerator.getTasks(context),
});

const actions = {
	removeTask,
	setInput,
	clearCompleted,
	addTodoTask,
	updateTodoTask,
	selectAll,
	showTabContent,
	toggleTodo,
	clearButton,
	setEdit,
	generateTask,
};

export default actions;
