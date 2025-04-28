import { test } from '@playwright/test';
import path from 'path';

test('Check register page', async ({ page }) => {
    await test.step('click button to access register page', async () => {
        await page.goto('https://material.playwrightvn.com');
        await page.locator('a[href="01-xpath-register-page.html"]').click();
    });

    await test.step('fill register page form', async () => {
        await page.locator('input#username').fill('khoanguyen123');

        await page.locator('input#email').fill('khoanguyen123@gmail.com');

        await page.locator('input[type="radio"][value="male"]').check();

        await page.locator('input[type="checkbox"][name="hobbies"][value="reading"]').check();

        await page.locator('select#interests').selectOption(['technology', 'science']);

        await page.locator('select#country').selectOption(['Canada']);

        await page.locator('input#dob').fill('1999-01-31');

        await page.locator('input#profile').setInputFiles(path.join('tests', 'fixtures', 'khoa.png'));

        await page
            .locator('textarea#bio')
            .fill('I live in Vietnam with my family. Ive been working as a web developer for 2 years');

        await page.locator('input#rating').fill('8');

        await page.locator('input#favcolor').evaluate((el: HTMLInputElement) => {
            el.value = '#ffffff';
        });

        await page.locator('.tooltip').hover();

        await page.locator('span.tooltiptext').waitFor({ state: 'visible' });

        await page.locator('.slider.round').click();

        // Click at 50% of the width for 2.5 stars

        //5 star rating

        await pressStarRatingUsingPixel(page, 50, 50); //2.5 tại vì lấy giữa 50% 50%

        await page.getByRole('button', { name: 'Register' }).click();
    });
});

async function pressStarRatingUsingPixel(page, xPercentage, yPercentage) {
    const starRating = page.locator('#starRating');
    // get the size of the element
    const boundingBox = await starRating.boundingBox();

    console.log(boundingBox); // { x: 513.59375, y: 692.875, width: 100, height: 20 }

    if (boundingBox) {
        // calculate pixel position using the percentage above
        const xInPixel = (boundingBox.width * xPercentage) / 100;
        const yInPixel = (boundingBox.height * yPercentage) / 100;

        await starRating.click({
            position: {
                x: xInPixel,
                y: yInPixel,
            },
            force: true,
        });
    }
}
