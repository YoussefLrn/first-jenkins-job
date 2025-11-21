import {test} from '@playwright/test';

test.describe(" ", () => {
    test.beforeAll(async () => {
        console.log("beforeAll");
    });
    test.afterAll(async () => {
        console.log("afterAll");
    });
    test.beforeEach(async () => {
        console.log("beforeEach");
    });
    test.afterEach(async () => {
        console.log("afterEach");
    });
    test("test cases1", async () => {
       console.log("test cases1");
    });
    test("test cases2", async () => {
        console.log("test cases2");
});
   test("test cases3", async () => {
    console.log("test cases3");
   });

   });