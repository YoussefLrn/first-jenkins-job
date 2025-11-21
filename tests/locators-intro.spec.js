import { test } from '@playwright/test';

test('Simple google test', async ({ page }) => {
  //navigate to https://www.google.com
  await page.goto('https://www.google.com');
  //pause for 3 seconds
  await page.waitForTimeout(3000);
  let searchbox = page.locator("textarea#APjFqb");

  //searchbox.type("CYDEO");
  searchbox.fill("CYDEO");
  await page.waitForTimeout(3000);
  searchbox.press("Enter");
  await page.waitForTimeout(3000);
});
/*
*/
