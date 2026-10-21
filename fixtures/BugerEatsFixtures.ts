import { test as base} from '@playwright/test'
import { BugerEatsNavegacaoActions } from '../actions/BugerEatsNavegacaoActions'
import { BugerEatsDadosPessoaisActions } from '../actions/BugerEatsDadosPessoaisActions'

type BugerEatsFixtures = {
    navegacao: BugerEatsNavegacaoActions
    dadosPessoais: BugerEatsDadosPessoaisActions
}

export const test = base.extend<BugerEatsFixtures>({
    navegacao: async ({ page }, use) => {
        await use(new BugerEatsNavegacaoActions(page))
    },

    dadosPessoais: async ({ page }, use) => {
    await use(new BugerEatsDadosPessoaisActions(page))
   },
})