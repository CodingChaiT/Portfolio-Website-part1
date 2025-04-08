import React, { useState } from "react";
import Footer from "./Footer"; 

const Shop = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const handleClearCart = () => {
        setCart([]);
    };

    return (
        <div>
            <main>
                <h2>Shop at Fish Creek Animal Clinic</h2>
                <div id="flow">
                    {/* Product 1 */}
                    <section className="shop">
                        <h3>Fish Creek Tote Bag</h3>
                        <img
                            src="/fishtote.gif"
                            alt="Fish Creek Tote Bag"
                            style={{ maxWidth: "150px", maxHeight: "150px" }}
                        />
                        <p>
                            Carry your pet supplies and accessories in a special tote from Fish
                            Creek. 100% cotton. $14.95.
                        </p>
                        <form
                            method="post"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleAddToCart({ name: "Fish Creek Tote Bag", price: 14.95 });
                            }}
                        >
                            <input type="submit" value="Add to Cart" />
                        </form>
                    </section>

                    {/* Product 2 */}
                    <section className="shop">
                        <h3>Fish Creek Sweatshirt</h3>
                        <img
                            src="/fishsweat.gif"
                            alt="Fish Creek Sweatshirt"
                            style={{ maxWidth: "150px", maxHeight: "150px" }}
                        />
                        <p>
                            A Fish Creek sweatshirt will warm you up on cool morning walks
                            with your pet. 100% cotton. Size XL. $29.95.
                        </p>
                        <form
                            method="post"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleAddToCart({ name: "Fish Creek Sweatshirt", price: 29.95 });
                            }}
                        >
                            <input type="submit" value="Add to Cart" />
                        </form>
                    </section>
                </div>
            </main>

            <Footer />

            <div>
                <h4>Your Cart</h4>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
                <div>
                    <strong>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</strong>
                </div>
                <button onClick={handleClearCart}>Clear Cart</button>
            </div>
        </div>
    );
};

export default Shop;


