import { Page, expect } from '@playwright/test'
import { BugerEatsRegisterLocators } from '../locators/BugerEatsRegisterLocators'

type DadosPessoais = {
  nome: string
  cpf: string
  email: string
  whatsapp: string
}

export class BugerEatsDadosPessoaisActions {
  private locators: BugerEatsRegisterLocators

  constructor(page: Page) {
    this.locators = new BugerEatsRegisterLocators(page)
  }

  async informarDadosPessoais(dados: DadosPessoais) {
    await this.locators.campoNome.fill(dados.nome)
    await this.locators.campoCpf.fill(dados.cpf)
    await this.locators.campoEmail.fill(dados.email)
    await this.locators.campoWhatsapp.fill(dados.whatsapp)
  }
}
