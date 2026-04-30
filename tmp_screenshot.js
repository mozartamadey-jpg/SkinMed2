const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: 'E:/SkinMed2/conversations/screenshot-homepage-full.png', fullPage: true });
  await page.screenshot({ path: 'E:/SkinMed2/conversations/screenshot-homepage-top.png', fullPage: false });
  console.log('Screenshots saved');
  await browser.close();
})();
