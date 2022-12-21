const puppeteer = require("puppeteer"); // npm i puppeteer
const fs = require("fs"); // optional, to write to file
//-----------------------------------------------------------------------------------------------------
//scroll to bottom of page function
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.infomed.co.il/drugs/");
  await autoScroll(page);
  //---------------------------------------------------------------------------------------------------
  const getMedicines = await page.evaluate(() => {
    // get all a tags inside the div with id "searchResultsContainer"
    const allAnchors = document.querySelectorAll("#searchResultsContainer a");
    // create an array from the anchors
    const anchorsArray = Array.from(allAnchors);
    // map over the array and return an object with the data we want
    return anchorsArray.map((anchor) => ({
      hebName: anchor.children[0].innerText,
      engName: anchor.children[1].innerText,
      link: anchor.href,
    }));
  });
  console.log("getMedicines: ", getMedicines);
  fs.writeFileSync("medicines.json", JSON.stringify(getMedicines));
  console.log("getMedicines.length: ", getMedicines.length);
  //---------------------------------------------------------------------------------------------------
  await browser.close();
}

run();
