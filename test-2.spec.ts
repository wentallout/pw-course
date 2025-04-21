import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/03-xpath-todo-list.html');
  await page.getByRole('textbox', { name: 'Enter a new task' }).click();
  await page.getByRole('textbox', { name: 'Enter a new task' }).fill('todo 1');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.getByRole('textbox', { name: 'Enter a new task' }).click();
  await page.getByRole('textbox', { name: 'Enter a new task' }).fill('todo 2');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.getByRole('textbox', { name: 'Enter a new task' }).click();
  await page.getByRole('textbox', { name: 'Enter a new task' }).fill('todo 3');
  await page.getByRole('button', { name: 'Add Task' }).click();
  await page.locator('#todo-3-delete').click();
});