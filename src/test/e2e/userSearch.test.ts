import { test, expect } from '@playwright/test';

test('Fill github username and expext contain respository', async ({
  page,
}) => {
  await page.goto('http://127.0.0.1:5173/');

  // Fill the input field with "purwnt"
  await page.fill('input', 'purwnt');

  // Simulating pressing Enter key
  await page.press('input', 'Enter');

  // Assert the presence of the paragraph
  await expect(page.getByRole('paragraph')).toHaveText(
    'Showing users for "purwnt"',
    {
      timeout: 10000,
    }
  );

  // Simulating pressing result with username 'purwnt'
  await page
    .getByRole('heading', { name: 'purwnt', exact: true })
    .click({ timeout: 10000 });

  // Assert the presence of the repository named '15f56d74ff0eeea6'
  await expect(
    page.getByRole('heading', { name: '15f56d74ff0eeea6', exact: true })
  ).toHaveText('15f56d74ff0eeea6', {
    timeout: 10000,
  });
});

