import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const [wishlistItems, setWishlistItems] = useState(() => {
        const storedWishlist = localStorage.getItem('wishlist');
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const toggleWishlist = (product) => {
        setWishlistItems((prevItems) => {
            const isWishlisted = prevItems.some((item) => item.id === product.id);
            if (isWishlisted) {
                return prevItems.filter((item) => item.id !== product.id);
            }
            return [...prevItems, product];
        });
    };

    const clearCart = () => setCartItems([]);

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = wishlistItems.length;

    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                wishlistItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                toggleWishlist,
                clearCart,
                cartCount,
                wishlistCount,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
