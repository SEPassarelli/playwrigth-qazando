// @ts-check
import { test, expect } from '@playwright/test';

// test.use({
//   viewport: { width: 1600, height: 1200 },
// });

// test.use({
//   geolocation: { longitude: 41.890221, latitude: 12.492348 },
//   permissions: ['geolocation'],
// });

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
}); 

test('Login com sucesso', async ({ page }) => {

  // const button = await page.getByRole('button', { name: 'Send Mail' });
  // await button.scrollIntoViewIfNeeded();
  // await button.click();

  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded();

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@email.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: './screenshot/elementosenha.png' });
  await page.screenshot({ path: './screenshot/screenshot.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});


