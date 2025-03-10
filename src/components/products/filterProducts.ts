/* const data = [
    { id: 1, name: "Producto 1", price: 60 },
    { id: 2, name: "Producto 2", price: 100 },
    { id: 3, name: "Producto 3", price: 120 },
    { id: 4, name: "Producto 4", price: 70 },
    { id: 4, name: "Producto 5", price: 30 },
    { id: 4, name: "Producto 6", price: 10 },
] */

function findCombination(data: Product[], limit: number) {
    let bestCombination = { total: 0, products: [] } as {
        total: number
        products: Product[]
    }

    function sum(
        startIndex: number,
        currentTotal: number,
        currentProducts: Product[]
    ) {
        for (let i = startIndex; i < data.length; i++) {
            const product = data[i]
            const newTotal = currentTotal + product.price
            if (newTotal <= limit) {
                currentProducts.push(product)
                currentTotal = newTotal
            }
            if (currentTotal > bestCombination.total) {
                bestCombination = {
                    total: currentTotal,
                    products: [...currentProducts],
                }
            }
        }
    }

    for (let start = 0; start < data.length; start++) {
        sum(start, 0, [])
    }

    return bestCombination.products
}

export default findCombination
///console.log(findCombination(data, 100))
