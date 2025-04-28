import test from '@playwright/test';

test('Check product page', async ({ page }) => {
    page.on('dialog', async (dialog) => {
        await dialog.accept();
    });

    await test.step('Access product page', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('a[href="03-xpath-todo-list.html"]').click();
    });

    await test.step('test todo features', async () => {
        //DO NOT USE forEach, it mess up async await

        //add todos
        for (let i = 0; i < 100; i++) {
            await page.locator('input#new-task').fill(`todo ${i}`);
            await page.locator('button#add-task').click();
        }

        // Delete odd-numbered todos using ID selector
        for (let i = 0; i < 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`#todo-${i}-delete`).click();
                // Optional: thử delay vô để playwright nó accept dialog?
                await page.waitForTimeout(100);
            }
        }
    });
});
