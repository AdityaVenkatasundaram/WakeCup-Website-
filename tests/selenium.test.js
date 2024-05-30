const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function example() {
    let service = new chrome.ServiceBuilder(path.join(__dirname, '../node_modules/.bin/chromedriver')).build();
    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeService(service)
        .build();

    try {
        await driver.get('http://localhost:8080'); 
        await driver.wait(until.titleIs('WakeCup'), 1000);
        let title = await driver.getTitle();
        console.log(title);
    } finally {
        await driver.quit();
    }
})();
