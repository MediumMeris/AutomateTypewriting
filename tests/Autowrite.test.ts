import { expect, test } from '@playwright/test';

test('Automate Speed Typewriting - #1', async ({ page }) => {

  test.slow();

  await page.goto("https://typing-speed-test.aoeu.eu/");

  await page.waitForSelector('#input');


  const totalWords = (await page.$$('.nextword')).length;
  console.log(`Total words: ${totalWords}`);

 
  for (let i = 0; i <= totalWords; i++) {
   
    const wordElement = await page.locator('#currentword');
    const word = await wordElement.innerText();

    // Type the word into the input area and press Space
    await page.fill('#input', word); 
    await page.keyboard.press('Space');

    console.log(`Typed word ${i + 1}: ${word}`);
  }

  const finalMessage = await page.locator("#result");


  await expect(finalMessage).toContainText(/Your score: \d+ CPM \(that is \d+ WPM\)/);
  await finalMessage.isVisible();

});
