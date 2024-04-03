import { createContext, useContext, useState } from "react";

export const Context = createContext();

const INITIAL_MONEY = 251000000000

export function ContextProvider({ children }) {
    const [money, setMoney] = useState(INITIAL_MONEY)
    const [myProducts, setMyProducts] = useState([])
    const [products, setProducts] = useState([
        { id: 1, name: 'Spor Araba', price: 1000000, img: 'https://cdn.motor1.com/images/mgl/KbnYmG/s1/2023-rolls-royce-spectre.webp' },
        { id: 2, name: 'Villa', price: 15000000, img: 'https://static.baranselgrup.com/248945-w1920-villa-serengeti.png' },
        { id: 3, name: 'Helikopter', price: 12000000, img: 'https://www.setair.com.tr/images/setair_filomuz_helikopter_galeri_02.jpg' },
        { id: 4, name: 'Yat', price: 35000000, img: 'https://sailingturkiye.com/wp-content/uploads/2020/09/SYT_174017-l.png' },
        { id: 5, name: 'Formula 1 Aracı', price: 2500000, img: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/2/24/lz5dl7lsxrxuclromrwh/max-verstappen-rb15' },
        { id: 6, name: 'iPhone 15 Pro Max', price: 1600, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845694831' },
        { id: 7, name: 'Nike Air Jordan', price: 60, img: 'https://sothebys-com.brightspotcdn.com/dims4/default/26ae228/2147483647/strip/true/crop/3543x2338+0+0/resize/684x451!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fba%2F63%2F5448ec3a43ad881557d41485631d%2F972sneakers-cfk7z-t3-01-1.jpg' },
        { id: 8, name: 'NBA Takımı', price: 50000000, img: 'https://cdn.phenompeople.com/CareerConnectResources/NBANBAUS/social/1024x512-1670500646586.jpg' },
        { id: 9, name: 'Premier Ligi Takımı', price: 35000000, img: 'https://iaftm.tmgrup.com.tr/353050/1200/627/23/0/1277/656?u=https://iftm.tmgrup.com.tr/2020/05/11/premier-lig-icin-karar-cikti-iste-baslama-tarihi-1589191644433.jpeg' },
        { id: 10, name: 'Terlik', price: 10, img: 'https://www.yooyustore.com/images/product/yooyu/855/yooyu-alva-cocuk-terlik-kirmizi_1500x1500_UWVMJIABMP.jpg' },




    ])

    function buy(price, product) {
        if (price > money) {
            alert("Yetersiz Bakiye")
            return
        }
        setMoney(money - price)
        setMyProducts([...myProducts, product])
    }


    function sell(price) {
        if (money + price > INITIAL_MONEY) {
            setMoney(INITIAL_MONEY)
            return
        }
        setMoney(money + price)
    }




    return (
        <Context.Provider value={{ money, buy, sell, products, myProducts, setMyProducts }}>{children}</Context.Provider>
    )
}

