import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }
    const shipping = props.cart.length > 2 ? 20 : 0;
    // console.log(total);
    const totalBeforeTax = total + shipping;
    const tax = totalBeforeTax * .10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <div className="cart-summary">
                <h2>Order Summary</h2>
                <h4>Items Ordered: {props.cart.length}</h4>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Items:</td>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping & Handling:</td>
                            <td>${shipping}</td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td>${totalBeforeTax.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Estimated Tax:</td>
                            <td>${tax.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-center">
                <h3>Order Total: ${grandTotal.toFixed(2)}</h3>
                <button className="btn">Review Your Order</button>
            </div>
        </div>
    );
};

export default Cart;