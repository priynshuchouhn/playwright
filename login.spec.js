import { test, expect } from '@playwright/test';

test('login to sample app', async ({ page }) => {
  await page.goto('https://inspectify.vercel.app/login');
  await page.fill('#username', 'admin@inspectify.com');
  await page.fill('#password', 'admin@123');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(20000);
  await expect(page).toHaveURL('https://inspectify.vercel.app/home');
});
