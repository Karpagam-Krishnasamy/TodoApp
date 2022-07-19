/* eslint-disable prefer-template */
import { rndString } from '@laufire/utils/random';
import faker from 'faker';

const taskGenerator = {
	getTasks: ({ actions, config: { timeDelay, timeOut }}) => {
		const interval = setInterval(() =>
			actions.generateTask()
		, timeDelay);

		setTimeout(() => clearInterval(interval), timeOut);
	},

	getTask: ({ state: { taskList, id }}) =>
		[
			...taskList,
			{
				id: rndString(id),
				name: taskGenerator
					.formatTask(faker.hacker.verb()
					+ ' ' + faker.hacker.noun()),
			},
		],

	formatTask: (text) =>
		text.charAt(0).toUpperCase() + text.substr(1),
};

export default taskGenerator;
