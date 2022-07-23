const { Builder } = require('selenium-webdriver');
const assert = require('assert');
const Helper = require('../helper');
const { rndString } = require('@laufire/utils/random');
const textLength = 6;
const randomTodo = rndString(textLength);
const driver = new Builder().forBrowser('chrome')
	.build();

driver.get('http://localhost:3002/react-starter');

describe('Remove Todo', () => {
	it('Remove button not displayed as expected', async () => {
		assert.strictEqual(await Helper
			.checkCount(driver, 'removeButton'), 0);
	});

	it('Successfully displayed remove button', async () => {
		await Helper.addTodo(driver, randomTodo);
		assert.strictEqual(await Helper
			.checkCount(driver, 'removeButton'), 1);
	});

	it('Successfully deletes todo', async () => {
		await Helper.clickButton(driver, 'removeButton');
		assert.strictEqual(await Helper
			.checkCount(driver, randomTodo), 0);
	});
});
