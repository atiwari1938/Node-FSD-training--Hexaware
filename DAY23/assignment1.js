import { useState } from "react";

function Product() {

    let [pname, setPname] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    let [result, setResult] = useState("");


    function productClick() {

        let totalAmount = price * quantity;

        if (quantity < 10) {
            setResult(`Total Amount: ${totalAmount} `);
        } else if (quantity >= 10 && quantity < 20) {
            let discount = (totalAmount * 5) / 100;
            totalAmount -= discount;
            setResult(`Total Amount: ${totalAmount} after discount`);
        } else if (quantity >= 20 && quantity < 30) {
            let discount = (totalAmount * 10) / 100;
            totalAmount -= discount;
            setResult(`Total Amount: ${totalAmount} after discount`);
        } else {
            let discount = (totalAmount * 15) / 100;
            totalAmount -= discount;
            setResult(`Total Amount: ${totalAmount} after discount`);
        }

    }

    return (
        <>
            <fieldset>
                <legend>Product</legend>
                Product Name : <input type="text" onChange={(e) => setPname(e.target.value)} />
                <br /><br />

                Price : <input type="int" onChange={(e) => setPrice(e.target.value)} />
                <br /><br />

                Quantity : <input type="int" onChange={(e) => setQuantity(e.target.value)} />
                <br /><br />

                <input type="button" onClick={productClick} value="Get Total" />
                <p>{result}</p>
            </fieldset>
        </>
    );
}

export default Product;