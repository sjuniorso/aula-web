import { Page, expect } from '@playwright/test'
import { BugerEatsRegisterLocators } from '../locators/BugerEatsRegisterLocators'

export class BugerEatsNavegacaoActions {
    private locators: BugerEatsRegisterLocators
    private page: Page

    constructor(page: Page) {
        this.page = page
        this.locators = new BugerEatsRegisterLocators(page)
    }

    async goto(url: string) {
        await this.page.goto(url)
    }

    async acessarPaginaDeCadastro() {
        await expect(this.locators.tituloCadastroParceiro).toBeVisible({ timeout: 60_000 })
        await this.locators.linkCadastrarSe.click()
    }
}