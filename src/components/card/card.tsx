interface CardProps {
    product: Product
    submitProduct: (product: Product) => void
}

const Card = ({ product, submitProduct }: CardProps) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                className="w-full"
                src="/product_placeholder.webp"
                alt="Sunset in the mountains"
            />
            <div className="flex w-full justify-between px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">
                    {product.name} {product.price}
                </div>
                <div>
                    <button
                        className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
                        onClick={() => submitProduct(product)}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
