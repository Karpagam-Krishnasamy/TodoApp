const actionKeys = {
	Enter: ({ actions, state: { editId }}) =>
		(actionKeys.checkData(editId)
			? actions.addTodoTask()
			: actions.updateTodo()),

	Escape: ({ actions }) =>
		actions.clearInput(),

	checkData: (data) => data === '',
};

export default actionKeys;
