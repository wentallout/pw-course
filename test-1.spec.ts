import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/03-xpath-todo-list.html');
  await page.getByRole('textbox', { name: 'Enter a new task' }).click();
  await page.getByRole('textbox', { name: 'Enter a new task' }).fill('what the fuck');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('textbox', { name: 'Enter a new task' }).click();
  await page.getByRole('textbox', { name: 'Enter a new task' }).fill('dsfsdfsd');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
});