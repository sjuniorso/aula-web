import { Locator, Page } from '@playwright/test'

export class BugerEatsRegisterLocators {
  readonly tituloCadastroParceiro: Locator
  readonly linkCadastrarSe: Locator
  readonly campoNome: Locator
  readonly campoCpf: Locator
  readonly campoEmail: Locator
  readonly campoWhatsapp: Locator
  readonly campoCep: Locator
  readonly botaoBuscarCep: Locator
  readonly campoNumeroEndereco: Locator
  readonly campoComplementoEndereco: Locator
  readonly campoRua: Locator
  readonly campoBairro: Locator
  readonly campoCidadeUf: Locator
  readonly opcaoBicicleta: Locator
  readonly inputUploadCnh: Locator
  readonly botaoSubmeterCadastro: Locator
  readonly mensagemSucesso: Locator
  readonly mensagemErro: Locator
  readonly fechar: Locator

  constructor(page: Page) {
    this.tituloCadastroParceiro = page.getByText('Seja um parceiro entregador pela Buger Eats')
    this.linkCadastrarSe = page.getByText('Cadastre-se para fazer entregas').first()
    this.campoNome = page.locator('[name="name"]')
    this.campoCpf = page.locator('[name="cpf"]')
    this.campoEmail = page.locator('[type="email"]')
    this.campoWhatsapp = page.locator('[name="whatsapp"]')
    this.campoCep = page.locator('[name="postalcode"]')
    this.botaoBuscarCep = page.getByRole('button', { name: 'Buscar CEP' })
    this.campoNumeroEndereco = page.locator('[name="address-number"]')
    this.campoComplementoEndereco = page.locator('[name="address-details"]')
    this.campoRua = page.locator('[name="address"]')
    this.campoBairro = page.locator('[name="district"]')
    this.campoCidadeUf = page.locator('[name="city-uf"]')
    this.opcaoBicicleta = page.getByText('Bicicleta').first()
    this.inputUploadCnh = page.locator('input[type="file"]')
    this.botaoSubmeterCadastro = page.getByRole('button', { name: 'Cadastre-se para fazer entregas' })
    this.mensagemSucesso = page.getByText('Aí Sim...')
    this.mensagemErro = page.locator('.alert-error')
    this.fechar = page.getByRole('button', { name: 'Fechar' })
  }
}
