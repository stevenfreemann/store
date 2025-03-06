import { useState } from "react"

interface CartProps {
    productsUser: Product[]
}

const Cart = ({ productsUser }: CartProps) => {
    const [modal, setModal] = useState(false)

    return (
        <div className="fixed">
            <div
                className="bg-white rounded-full w-10 h-10 p-2 cursor-pointer relative"
                onClick={() => setModal(!modal)}
            >
                <img
                    className="w-full h-full"
                    alt="cart"
                    src="/shopping-cart.png"
                />
                <div className="bg-gray-500 rounded-full w-5 h-5 text-center absolute right-0">
                    {productsUser.length}
                </div>
            </div>
            {modal && (
                <div className="bg-gray-800 w-xs h-[60vh] rounded-xl p-8 overflow-auto">
                    {productsUser.map((product, i) => (
                        <div key={i} className="">
                            <div>
                                {product.name} - $:{product.price}
                            </div>
                            <div className=" divide-red-50">
                                --------------------------------------------
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Cart
