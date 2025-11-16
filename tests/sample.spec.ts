import { test, expect } from '@playwright/test';

test('Verify page title on Salesforce login page', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');
  await expect(page).toHaveTitle(/Salesforce/);
});
