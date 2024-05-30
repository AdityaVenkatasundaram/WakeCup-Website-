
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

const service = new chrome.ServiceBuilder(path.join(__dirname, '../node_modules/.bin/chromedriver')).build();
chrome.setDefaultService(service);

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000'); // Replace with the actual URL where your app is running
        await driver.wait(until.titleIs('WakeCup'), 1000);
        let title = await driver.getTitle();
        console.log(title);
    } finally {
        await driver.quit();
    }
})();
