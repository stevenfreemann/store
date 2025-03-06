import { NextRequest, NextResponse } from "next/server"
import products_data from "@/data/products.json"

const cart: Product[] = []

export async function GET() {
    try {
        return NextResponse.json(cart)
    } catch (error) {
        console.error("error get products", error)
        return NextResponse.error()
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { productId } = body
        console.log("productId :>> ", productId)
        const product = products_data.find(
            (product) => product.id === productId
        )
        if (!product)
            return NextResponse.json(
                { error: "Producto no encontrado" },
                { status: 404 }
            )
        cart.push(product)
        return NextResponse.json(product)
    } catch (error) {
        console.error("error get products", error)
        return NextResponse.error()
    }
}
