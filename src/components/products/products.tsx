"use client"
import { useState } from "react"
import Card from "../card/card"
import Cart from "../cart/cart"
import findCombination from "./filterProducts"

interface ProductsProps {
    products: Product[]
    productsCart: Product[]
}

const Products = ({ products, productsCart }: ProductsProps) => {
    const [productsUser, setproductsUser] = useState<Product[]>(productsCart)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [productsFilter, setproductsFilter] = useState(products)

    const submitProduct = async (product: Product) => {
        try {
            const resProduct = await fetch(`/api/cart`, {
                method: "POST",
                body: JSON.stringify({
                    productId: product.id,
                }),
            })
            const resParsed = await resProduct.json()
            if (resParsed.id) {
                await getProductsCart()
            }
        } catch (error) {
            console.error("error", error)
        }
    }

    const getProductsCart = async () => {
        try {
            const resProducts = await fetch(`/api/cart`)
            const productsParsed = await resProducts.json()
            setproductsUser(productsParsed)
        } catch (error) {
            console.error("error", error)
        }
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (!isNaN(Number(value))) {
            setMaxValue(Number(value))
        }
    }

    const handleFilter = () => {
        if (maxValue > 0) {
            const res = findCombination(products, maxValue)
            setproductsFilter(res)
        } else {
            setproductsFilter(products)
        }
    }

    return (
        <>
            <div className="flex gap-4 my-4">
                <input
                    type="number"
                    className="bg-white text-black"
                    value={maxValue}
                    onChange={inputHandler}
                />
                <button
                    className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
                    onClick={handleFilter}
                >
                    filtrar
                </button>
            </div>
            <Cart productsUser={productsUser} />
            <div className="w-full flex flex-wrap gap-6 justify-center">
                {productsFilter ? (
                    productsFilter.map((product, i) => (
                        <Card
                            key={i}
                            product={product}
                            submitProduct={submitProduct}
                        />
                    ))
                ) : (
                    <h1>No se encontraron products</h1>
                )}
            </div>
        </>
    )
}

export default Products
