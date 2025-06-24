// Ran on Claude Sonnet 3.5

import { test, expect } from '@playwright/test';

test('Sauce Demo Shopping Test', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.saucedemo.com');

  // Login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Verify successful login by checking the inventory page URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Add items to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // Verify cart count is 2
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('2');

  // Go to cart
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Verify items in cart
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();

  // Proceed to checkout
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});
