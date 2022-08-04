export const itemDollarsPricePartSelector = "div.product-price > ul > li.price-current > strong";
export const itemCentsPricePartSelector = "div.product-price > ul > li.price-current > sup";

export const totalCartPriceSelector = "div:nth-child(1) > ul > li:nth-child(1) > span > strong"
export const totalCartButtonPriceSelector = "div.header2021-nav.header2021-cart > a > div.header2021-nav-subtitle > strong"

export function getCartItemDollarPrice(itemNumber) {
    return `div:nth-child(${itemNumber}) > div.item-container > div.item-action > ul > li.price-current > strong`
}

export function getCartItemCentsPrice(itemNumber) {
    return `div:nth-child(${itemNumber}) > div.item-container > div.item-action > ul > li.price-current > sup`
}
