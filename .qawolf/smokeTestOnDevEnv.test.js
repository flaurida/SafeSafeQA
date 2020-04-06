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
  await page.click(selectors["0_button"]);
  await page.click(selectors["1_name_input"]);
  await page.type(selectors["2_name_input"], "Test");
  await page.click(selectors["3_term_1_input"]);
  await page.click(selectors["4_term_2_input"]);
  await page.click(selectors["5_button"]);
  await page.click(selectors["9_phone_input"]);
  await page.fill(selectors["10_phone_input"], "555555555");
  await page.click(selectors["11_button"]);
  await page.click(selectors["12_sex_input"]);
  await page.click(selectors["13_button"]);
  await page.click(selectors["14_age_input"]);
  await page.type(selectors["15_age_input"], "55");
  await page.click(selectors["16_button"]);
  await qawolf.scroll(page, "html", { x: 0, y: 231 });
  await page.click(selectors["18_nie_jestem_prze_input"]);
  await page.click(selectors["19_button"]);
  await page.click(selectors["20_blood_group_input"]);
  await page.click(selectors["21_button"]);
  await page.click(selectors["22_smoke_input"]);
  await page.click(selectors["23_button"]);
  await page.click(selectors["24_button"]);
  await page.click(selectors["25_button"]);
  await page.click(selectors["26_adne_z_powysz_input"]);
  await page.click(selectors["27_button"]);
  await page.click(selectors["28_adne_z_powysz_input"]);
  await page.click(selectors["29_button"]);
  await page.click(selectors["30_adne_z_powysz_input"]);
  await page.click(selectors["31_button"]);
  await page.click(selectors["32_item_id_input"]);
  await page.click(selectors["33_button"]);
  await page.click(selectors["34_button"]);
});