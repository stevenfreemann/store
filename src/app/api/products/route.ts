import products_data from "@/data/products.json"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        return NextResponse.json(products_data)
    } catch (error) {
        console.error("error get products", error)
        return NextResponse.error()
    }
}
