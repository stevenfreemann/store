const data = [
    { id: 1, name: "Producto 1", price: 7 },
    { id: 2, name: "Producto 2", price: 7 },
    { id: 3, name: "Producto 3", price: 3 },
    { id: 4, name: "Producto 4", price: 6 },
    { id: 4, name: "Producto 4", price: 3 },
]

function findCombination(data, limit) {
    let bestCombination = { total: 0, products: [] }

    function sum(startIndex, currentTotal, currentProducts) {
        for (let i = startIndex; i < data.length; i++) {
            const product = data[i]
            let newTotal = currentTotal + product.price
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

console.log(findCombination(data, 9))
