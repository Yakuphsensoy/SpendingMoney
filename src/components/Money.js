import React, { useContext } from 'react'
import { Context } from "../ContextProvider"

export default function Money() {
    const { money } = useContext(Context)

    if (money <= 0) {
        alert("Para bitti")
    }

    return (
        <div>
            <p> {money.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} </p>
        </div>
    )
}