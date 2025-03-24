import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com');

    //test cái <title> chứ không phải h1
    await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get started link', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com');

    //cái này tìm link để bấm vào, thường là <a>
    await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

    // cái này scan hết h1,h2,h3,h4,h5
    await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
