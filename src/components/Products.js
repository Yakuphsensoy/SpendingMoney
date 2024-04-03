import React, { useContext } from 'react';
import Card from './card';
import { Context } from "../ContextProvider"

export default function Products() {

    const { products, setMyProducts, myProduct } = useContext(Context)

    return (
        <div>
            <div className="products">
                {
                    products.map((product) => (
                        <Card
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            img={product.img}
                        />
                    ))
                }
            </div>
        </div>
    )
}