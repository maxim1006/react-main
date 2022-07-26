import { test, expect } from '@playwright/test';

test.describe.parallel('[E2E] Build Your Own Plan', () => {
    test('Main e2e test', async ({ page }) => {
        await page.goto('https://localhost:3000', { waitUntil: 'domcontentloaded' });

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/React App/);

        // create a locator
        const testsLink = page.locator('a:has-text("Tests")');

        // Expect an attribute "to be strictly equal" to the value.
        await expect(testsLink).toHaveAttribute('href', '/tests');

        // Click the get started link.
        await testsLink.click();

        // Expects the URL to contain intro.
        await expect(page).toHaveURL(/.*tests/);
    });
});
