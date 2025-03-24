import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    //open browser and go to this url
    await page.goto('https://material.playwrightvn.com');

    //test <title> NOT h1,h2,h3
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get started link', async ({ page }) => {
    //open browser and go to this url
    await page.goto('https://material.playwrightvn.com');

    //click <a>
    await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

    // scan all h1,h2,h3,h4,h5
    await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
