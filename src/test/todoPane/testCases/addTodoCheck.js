const { Builder } = require('selenium-webdriver');
const assert = require('assert');
const Helper = require('../helper');
const { rndString } = require('@laufire/utils/random');
const textLength = 6;
const randomTodo = rndString(textLength);
const driver = new Builder().forBrowser('chrome')
	.build();

driver.get('http://localhost:3002/react-starter');

describe('Add Todo', () => {
	it('Successfully adds a todo into list', async () => {
		await Helper.addTodo(driver, randomTodo);
		assert.strictEqual(await Helper.getTodo(driver)
			.then((value) => value), randomTodo);
	});
});
