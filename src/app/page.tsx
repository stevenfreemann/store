import ProductsShow from "@/components/products/products"

const baseURL = process.env.URL_NEXT || "http://localhost:3000"

async function getProducts() {
    const resProducts = await fetch(`${baseURL}/api/products`)
    return await resProducts.json()
}

async function getProductsUser() {
    const resProducts = await fetch(`${baseURL}/api/cart`)
    return await resProducts.json()
}

export default async function Home() {
    const products: Product[] = await getProducts()
    const productsCart: Product[] = await getProductsUser()

    return (
        <div className="w-full container justify-self-center my-8 px-2">
            <ProductsShow products={products} productsCart={productsCart} />
        </div>
    )
}

export const dynamic = "force-dynamic"
