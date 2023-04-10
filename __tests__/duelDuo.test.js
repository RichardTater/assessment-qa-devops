const { Builder, Browser, By, until, Key } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

// describe("Duel Duo tests", async () => {
describe("Duel Duo tests", () => {
  // let driver = await new Builder().forBrowser(Browser.CHROME).build();

  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("press draw button to see if it brings up array", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click()
    let elem = await driver.findElement(By.id("choices"))
    await driver.wait(until.elementIsVisible(elem),1000)
  });
  test("press button to see all bots.", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click()
    let elem = await driver.findElement(By.id("choices"))
    await driver.wait(until.elementIsVisible(elem),1000)
    
    await driver.findElement(By.className("bot-btn")).click()
    let playerElem = await driver.findElement(By.id("player-duo"))
    await driver.wait(until.elementIsVisible(playerElem),1000)
  });

});
