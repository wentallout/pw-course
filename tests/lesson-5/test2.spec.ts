import test from '@playwright/test';

test('Check product page', async ({ page }) => {
    await test.step('Access product page', async () => {
        await page.goto('https://material.playwrightvn.com/');

        await page.locator('a[href="02-xpath-product-page.html"]').click();
    });

    await test.step('test product page features', async () => {
        await page.locator('.add-to-cart[data-product-id="1"]').click({ clickCount: 2 });

        await page.locator('.add-to-cart[data-product-id="2"]').click({ clickCount: 3 });

        await page.locator('.add-to-cart[data-product-id="3"]').click({ clickCount: 1 });
    });
});
