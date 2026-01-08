import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto flex flex-col items-center justify-center py-24 text-center">
                <div className="mb-6 rounded-full bg-secondary p-6">
                    <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                </div>
                <h1 className="mb-2 text-3xl font-bold">Your cart is empty</h1>
                <p className="mb-8 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/products">
                    <Button size="lg" className="rounded-full px-8">
                        Start Shopping
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
            <div className="grid gap-12 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="divide-y border-y">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-6 py-6">
                                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100 md:h-32 md:w-32">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-semibold text-lg">{item.name}</h3>
                                            <p className="text-sm text-muted-foreground">{item.category}</p>
                                        </div>
                                        <p className="font-bold text-lg">₹{item.price}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center border rounded-full">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-2 hover:bg-secondary transition-colors rounded-l-full"
                                            >
                                                <Minus className="h-4 w-4" />
                                            </button>
                                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-2 hover:bg-secondary transition-colors rounded-r-full"
                                            >
                                                <Plus className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm font-medium transition-colors"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            <span>Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="rounded-2xl bg-secondary/30 p-8 border border-border/50">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between text-muted-foreground">
                                <span>Subtotal</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                                <span>Shipping</span>
                                <span>{cartTotal > 5000 ? "Free" : "₹150"}</span>
                            </div>
                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between font-bold text-lg text-red-500">
                                    <span>Total</span>
                                    <span>₹{(cartTotal + (cartTotal > 5000 ? 0 : 150)).toFixed(2)}</span>
                                </div>
                            </div>
                            <Link to="/checkout" className="block mt-8">
                                <Button className="w-full h-12 rounded-full gap-2 text-lg font-bold bg-red-500 hover:bg-red-600">
                                    Checkout <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
