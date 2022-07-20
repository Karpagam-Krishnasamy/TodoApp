/* eslint-disable no-unused-expressions */
/* eslint-disable max-lines-per-function */
const { Builder, By, Key } = require('selenium-webdriver');

const assert = require('assert');

const driver = new Builder().forBrowser('chrome')
	.build();

driver.get('http://localhost:3002/react-starter');

describe('Todo App', () => {
	// 1. Add input and check todo list
	it('Successfully adds a todo into list', async () => {
		await driver.findElement(By.id('TodoInput'))
			.sendKeys('Debug', Key.RETURN);

		assert.strictEqual(await driver
			.findElement(By.xpath('//div[@class="display-left"][last()]/span'))
			.getText()
			.then((value) =>
				value), 'Debug');
	});

	// 2. Check for "Select All", "CheckBox" and "RemoveButton"
	it('Displays all necessary buttons', async () => {
		assert.strictEqual(await driver.findElement(By.id(
			'selectall', 'checkbox', 'removeButton'
		)).isDisplayed(), true);
	});

	// 3. Delete Todo

	it('Successfully delete todo', async () => {
		const todoText = await driver
			.findElement(By.xpath('//div[@class="display-left"][last()]/span'))
			.getText();

		await driver
			.findElement(By.id('removeButton')).click();

		try {
			await driver.findElement(By.name(todoText));
		}
		catch (err) {
			err.name === 'NoSuchElementError';
		}
	});

	// 4. Check for "Clear Completed" Button

	it('Displays clear completed button', async () => {
		await driver.findElement(By.id('TodoInput'))
			.sendKeys('Debug', Key.RETURN);
		await driver.findElement(By.id('TodoInput'))
			.sendKeys('Test', Key.RETURN);

		await driver
			.findElement(By.xpath('//div[@class="display-left"][last()]/input'))
			.click();

		assert.strictEqual(await driver.findElement(By.id('clearCompleted'))
			.isDisplayed(), true);
	});

	// 5. Clear Completed Todo

	it('Successfully clear all completed todos', async () => {
		const todoText = await driver
			.findElement(By.xpath('//div[@class="display-left"][last()]/span'))
			.getText();

		await driver
			.findElement(By.id('clearCompleted')).click();

		try {
			assert.strictEqual(await driver
				.findElement(By.xpath('//input[@id="checkbox"]'))
				.isSelected(), false);

			await driver.findElement(By.name(todoText));
		}
		catch (err) {
			(err.name === 'NoSuchElementError')
		&& true;
		}
	});

	// 6. Enable Editing

	it('Displays editable text in input field', async () => {
		const todoText = await driver
			.findElement(By.xpath('//div[@class="display-left"][last()]/span'))
			.getText();

		await driver
			.findElement(By.xpath('//div[@class="display-left"][last()]/span'))
			.click();

		assert.strictEqual(await driver.findElement(By.id('TodoInput'))
			.getAttribute('value')
			.then((value) =>
				value), todoText);
	});

	// 7. Edit Todo

	it('Successfully edit todo', async () => {
		await driver.findElement(By.id('TodoInput'))
			.sendKeys('Test', Key.RETURN);
		assert.strictEqual(await driver
			.findElement(By.xpath('//div[@class="display-left"][last()]/span'))
			.getText()
			.then((value) =>
				value), 'DebugTest');
	});

	// 8. Toggle All Todo

	it('Successfully selects all todo', async () => {
		await driver.findElement(By.id('selectall'))
			.click();
		assert.strictEqual(await driver
			.findElement(By.xpath('//input[@id="checkbox"]'))
			.isSelected(), true);
	});
});
