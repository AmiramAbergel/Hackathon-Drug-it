const puppeteer = require("puppeteer"); // npm i puppeteer
const fs = require("fs"); // optional, to write to file
let medUrl = "https://www.infomed.co.il/drugs/codeine/";
//-----------------------------------------------------------------------------------------------------
async function runDesc(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  //---------------------------------------------------------------------------------------------------
  const getDescription = await page.evaluate(() => {
    const allNames = document.querySelector(
      ".centeredContent .description"
    ).nextElementSibling;
    const innerHTML = allNames.innerText;
    return innerHTML;
  });
  fs.writeFileSync("description.json", JSON.stringify(getDescription));
  console.log("getDescription: ", getDescription);
  //---------------------------------------------------------------------------------------------------
  await browser.close();
}

runDesc(medUrl);
module.exports = { runDesc };
