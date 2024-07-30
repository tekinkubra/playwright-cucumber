import { Before, After, BeforeAll, AfterAll, AfterStep, Status, setDefaultTimeout } from '@cucumber/cucumber'
import { Browser, BrowserContext, chromium } from '@playwright/test'
import { pageFixture } from './pageFixture'
import { PageManager } from '../page-objects/pageManager'

setDefaultTimeout(60 * 1000 * 2) // 2 dakikalık varsayılan zaman aşımı

let browser: Browser
let context: BrowserContext

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false })
})

AfterAll(async function () {
    await browser.close()
})

AfterStep(async function ({ pickle }) {
    // Ekran görüntüsü alır
    const img = await pageFixture.page.screenshot({ path: `./test-results/screenshot/${pickle.name}.png` })
    // Ekran görüntüsünü rapora ekler
    await this.attach(img, "image/png")
})

Before(async function () {
    context = await browser.newContext()
    const page = await context.newPage()
    pageFixture.page = page
    pageFixture.pm = new PageManager(page)
})

After(async function ({ pickle, result }) {
    console.log(result?.status)
    if (result?.status == Status.FAILED) {
        const img = await pageFixture.page.screenshot({ path: `./test-results/screenshot/${pickle.name}.png` })
        await this.attach(img, "image/png")
    }

    await pageFixture.page.close()
    await context.close()
})
