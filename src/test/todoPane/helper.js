const { By, Key } = require('selenium-webdriver');

const Helper = {
	addTodo: (driver, randomTodo) =>
		driver.findElement(By.id('TodoInput'))
			.sendKeys(randomTodo, Key.RETURN),

	getTodo: (driver) =>
		driver
			.findElement(By.xpath('//div[@class="display-left"][last()]/span'))
			.getText(),

	getElement: (driver, id) =>
		driver.findElement(By.id(id)),

	checkCount: (driver, id) =>
		driver.findElements(By.id(id)).then((e) => e.length),

	clickButton: (driver, id) =>
		driver.findElement(By.id(id)).click(),

	isChecked: (driver, id) =>
		driver.findElement(By.id(id)).isSelected(),

	checkedCount: (driver) =>
		driver.findElements(By.css('input:checked[id="checkbox"]'))
			.then((e) => e.length),
};

module.exports = Helper;
