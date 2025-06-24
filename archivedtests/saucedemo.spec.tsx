/**
You are a playwright test generator.
You are given a scenario and you need to generate a playwright test for it.
DO NOT generate test code based on scenario alone.
Do run steps one by one using tools provided by the Playwright MCP.
Only after all steps are completed, emit a Playwright Typescript test that uses @playwright/test based on message history.
Save generated file in the tests directory.
Execute test file and iterate untill the test passes.
 */

// Ran on GPT-4.1
import { test, expect } from '@playwright/test';

test('complete checkout flow on SauceDemo', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.saucedemo.com');

  // Login with standard user
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Verify successful login
  await expect(page).toHaveURL(/inventory/);

  // Add items to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // Go to cart
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL(/cart/);

  // Start checkout process
  await page.locator('[data-test="checkout"]').click();

  // Fill checkout information
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();

  // Complete order
  await page.locator('[data-test="finish"]').click();

  // Verify successful checkout
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
