/* eslint-disable no-magic-numbers */
/* eslint-disable prefer-template */
import { rndString } from '@laufire/utils/random';
import faker from 'faker';
import actions from '../core/actions';

const taskGenerator = {
	getTasks: (context) => {
		const interval = setInterval(() =>
			actions.generateTask(context)
		, 2000);

		setTimeout(() => clearInterval(interval), 10000);
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
