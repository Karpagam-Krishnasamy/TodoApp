/* eslint-disable no-console */
const { Builder } = require('selenium-webdriver');
const assert = require('assert');
const Helper = require('../helper');
const { rndString } = require('@laufire/utils/random');
const textLength = 6;
const randomTodo = rndString(textLength);
const driver = new Builder().forBrowser('chrome')
	.build();

driver.get('http://localhost:3002/react-starter');

describe('Update Todo', () => {
	it('Todo is populated in input field when a todo is clicked', async () => {
		await Helper.addTodo(driver, randomTodo);
		await Helper.clickButton(driver, randomTodo);
		assert.strictEqual(await Helper.getElement(driver, 'TodoInput')
			.getAttribute('value')
			.then((value) =>
				value), randomTodo);
	});

	it('Todo is updated when the populated todo is changed', async () => {
		await Helper.addTodo(driver, randomTodo);
		assert.strictEqual(await Helper.getTodo(driver)
			.then((value) => value), randomTodo + randomTodo);
	});
});
