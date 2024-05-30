const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function example() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
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
