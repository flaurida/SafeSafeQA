const qawolf = require("qawolf");
const selectors = require("./selectors/smokeTestOnDevEnv.json");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test('smokeTestOnDevEnv', async () => {
  await page.goto("http://safesafe.thecoders.io/");
  await qawolf.scroll(page, "html", { x: 0, y: 98 });
  await page.click(selectors["1_button"]);
});