import { Locator, Page } from "@playwright/test"

export class BugerEatsRegisterLocators {
    readonly tituloCadastroParceiro: Locator
    readonly linkCadastreSe: Locator

    constructor(page: Page) {
        this.tituloCadastroParceiro = page.getByText('Seja um parceiro entregador pela Buger Eats')
        this.linkCadastreSe = page.getByText('Cadastre-se para fazer entregas').first()
    }
}