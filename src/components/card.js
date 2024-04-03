import { useContext, useState } from "react"
import App from "../App"
import '../App.css';
import { Context } from "../ContextProvider";

export default function Card(
    { name, price, img }
) {

    const { money, buy, sell } = useContext(Context)
    const [quantity, setQuantity] = useState(1)


    const handleBuyButton = (e) => {
        if (price < money) {
            e.preventDefault()
            const totalPrice = quantity * price

            return buy(totalPrice)
        }
        else {
            alert("Yetersiz Bakiye")
        }
    }

    const handleSellButton = (e) => {
        e.preventDefault()
        const totalPrice = quantity * price
        return sell(totalPrice)
    }






    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt="" srcset="" style={{ width: "200px" }} />
            </div>
            <div className="card-body">
                <h3>{name}</h3>
                <p>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>

                <input type="number" min={0} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <div className="buttons">
                    <button disabled={price > money} onClick={handleBuyButton}>Satın Al</button>
                    <button onClick={handleSellButton}>Sat</button>
                </div>
            </div>
        </div>
    )
}
