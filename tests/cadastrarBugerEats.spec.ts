import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('https://buger-eats.vercel.app/')
  await expect(page.getByText('Seja um parceiro entregador pela Buger Eats')).toBeVisible()
  await page.getByText('Cadastre-se para fazer entregas').first().click()
  await expect(page.getByText('Dados')).toBeVisible()
  await page.locator('[name="name"]').fill('Teste Automacao')
  await page.locator('[name="cpf"]').fill('45065720177')
  await page.locator('[name="email"]').fill('teste@teste.com')
  await page.locator('[name="whatsapp"]').fill('56874938929')
  await page.locator('[name="postalcode"]').fill('88915000')
  await page.getByRole('button', { name: 'Buscar CEP' }).click()
  await page.locator('[name="address-number"]').fill('900')
  await page.locator('[name="address-details"]').fill('Teste Complemento')
  await page.getByText('Bicicleta').click()
  await page.locator('input[type="file"]').setInputFiles('./file/dog.jpg')
  await page.getByRole('button', { name: 'Cadastre-se para fazer' }).click()
  await expect(page.getByText('Aí Sim...')).toBeVisible()
  await page.getByRole('button', { name: 'Fechar' }).click()
});