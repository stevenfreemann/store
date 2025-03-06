"use client"
import { useState } from "react"
import Card from "../card/card"
import Cart from "../cart/cart"

interface ProductsProps {
    products: Product[]
    productsCart: Product[]
}

const Products = ({ products, productsCart }: ProductsProps) => {
    const [productsUser, setproductsUser] = useState<Product[]>(productsCart)

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

    return (
        <>
            <Cart productsUser={productsUser} />
            <div className="w-full flex flex-wrap gap-6 justify-center">
                {products ? (
                    products.map((product, i) => (
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
