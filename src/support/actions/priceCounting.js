
export function getTotalItemsPrice (items) {
    return items.reduce((sum, { price, quantity }) => sum + Number(price) * quantity, 0)
}
