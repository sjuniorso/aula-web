import { test } from '../fixtures/BugerEatsFixtures'
import { URLS } from '../utils/urls'

test.describe('Buger Eats - Cadastro de entregador', () => {
  test('Realizar cadastro para entrega', async ({ navegacao, dadosPessoais }) => {
    await navegacao.goto(URLS.bugerEats)
    await navegacao.acessarPaginaDeCadastro()
    
    await dadosPessoais.informarDadosPessoais({
      nome: 'Junior Oliveira',
      cpf: '4534545354',
      email: 'teste@teste.com',
      whatsapp: '489999898989',
    })
  })
  // await expect(page.getByText('Dados')).toBeVisible()
  // await page.locator('[name="name"]').fill('Teste Automacao')
  // await page.locator('[name="cpf"]').fill('45065720177')
  // await page.locator('[name="email"]').fill('teste@teste.com')
  // await page.locator('[name="whatsapp"]').fill('56874938929')
  // await page.locator('[name="postalcode"]').fill('88915000')
  // await page.getByRole('button', { name: 'Buscar CEP' }).click()
  // await page.locator('[name="address-number"]').fill('900')
  // await page.locator('[name="address-details"]').fill('Teste Complemento')
  // await page.getByText('Bicicleta').click()
  // await page.locator('input[type="file"]').setInputFiles('./file/dog.jpg')
  // await page.getByRole('button', { name: 'Cadastre-se para fazer' }).click()
  // await expect(page.getByText('Aí Sim...')).toBeVisible()
  // await page.getByRole('button', { name: 'Fechar' }).click()
});