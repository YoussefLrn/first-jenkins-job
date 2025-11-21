import { test } from '@playwright/test';

test("Simple google test", async ({page}) => {
     //Test code

     await page.goto('https://www.google.com');
     await page.waitForTimeout(3000);

});