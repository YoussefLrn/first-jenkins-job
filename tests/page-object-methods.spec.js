import { test } from '@playwright/test';

test('Getting the current url of the page', async ({ page }) => {
   await page.goto('https://practice.cydeo.com/');
   let currentUrl = page.url();
   console.log(currentUrl);
});

test('Getting the title of the page', async ({ page }) => {
   await page.goto('https://practice.cydeo.com/');
   let actualTitle = await page.title();
   console.log(actualTitle);
});