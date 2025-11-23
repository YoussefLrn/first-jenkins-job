import { test } from '@playwright/test';

test('', async ({ page }) => {

    console.log(`USERNAME is ${process.env.PRACTICE_USERNAME}`);
    console.log(`PASSWORD is ${process.env.PRACTICE_PASSWORD}`);
});
test('Bypass authentication by encoding the credentials base64 format', async ({ page }) => {
   let encodedCredential= Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString('base64');
   await page.setExtraHTTPHeaders({Authorization: `basic ${encodedCredential}`});
   await page.goto('https://practice.cydeo.com/basic_auth');
   await page.waitForTimeout(3000); // Wait for the page to load

});