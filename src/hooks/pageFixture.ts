import { Page } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

export const pageFixture = {
    // @ts-ignore
    page: undefined as Page,
    // @ts-ignore
    pm: undefined as PageManager
}