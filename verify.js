const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 3000 });
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.screenshot({ path: 'full_page.png', fullPage: true });
  await browser.close();
})();
