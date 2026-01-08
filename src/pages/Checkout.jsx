import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Checkout() {
    const { cartItems, cartTotal, clearCart } = useCart();
    const [isOrdered, setIsOrdered] = useState(false);

    if (isOrdered) {
        return (
            <div className="container mx-auto flex flex-col items-center justify-center py-24 text-center">
                <div className="mb-6 rounded-full bg-green-100 p-6 text-green-600">
                    <CheckCircle2 className="h-16 w-16" />
                </div>
                <h1 className="mb-2 text-4xl font-black italic">ORDER PLACED!</h1>
                <p className="mb-8 text-muted-foreground text-lg">Thank you for shopping with VibeStore. Your style is on the way.</p>
                <Link to="/">
                    <Button size="lg" className="rounded-full px-10 bg-red-500 hover:bg-red-600">
                        Back to Home
                    </Button>
                </Link>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto py-24 text-center">
                <p>Your cart is empty.</p>
                <Link to="/products" className="text-red-500 font-bold hover:underline">Go shop first!</Link>
            </div>
        );
    }

    const shipping = cartTotal > 5000 ? 0 : 150;
    const finalTotal = cartTotal + shipping;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOrdered(true);
        clearCart();
    };

    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <Link to="/cart" className="mb-8 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-red-500 transition-colors">
                <ChevronLeft className="h-4 w-4" /> Back to Cart
            </Link>
            <h1 className="mb-10 text-4xl font-black tracking-tight">CHECKOUT</h1>

            <form onSubmit={handleSubmit} className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-10">
                    <section>
                        <h2 className="text-2xl font-bold mb-6">1. Shipping Info</h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <input required className="rounded-xl border bg-secondary/20 p-4 outline-none focus:ring-2 focus:ring-red-500 transition-all" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Phone</label>
                                <input required className="rounded-xl border bg-secondary/20 p-4 outline-none focus:ring-2 focus:ring-red-500 transition-all" placeholder="+91 98765 43210" />
                            </div>
                            <div className="flex flex-col gap-2 sm:col-span-2">
                                <label className="text-sm font-medium">Street Address</label>
                                <input required className="rounded-xl border bg-secondary/20 p-4 outline-none focus:ring-2 focus:ring-red-500 transition-all" placeholder="123 Vibe Mansion, Trendy Street" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">City</label>
                                <input required className="rounded-xl border bg-secondary/20 p-4 outline-none focus:ring-2 focus:ring-red-500 transition-all" placeholder="Mumbai" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Pincode</label>
                                <input required className="rounded-xl border bg-secondary/20 p-4 outline-none focus:ring-2 focus:ring-red-500 transition-all" placeholder="400001" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6">2. Payment Method</h2>
                        <div className="rounded-2xl border bg-secondary/10 p-4 space-y-4">
                            <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl hover:bg-secondary/40 transition-colors">
                                <input type="radio" name="payment" defaultChecked className="accent-red-500 h-5 w-5" />
                                <span className="font-medium">Cash on Delivery (Recommended)</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl hover:bg-secondary/40 transition-colors">
                                <input type="radio" name="payment" disabled className="accent-red-500 h-5 w-5" />
                                <span className="font-medium text-muted-foreground">Credit/Debit Card (Coming Soon)</span>
                            </label>
                        </div>
                    </section>
                </div>

                <div className="lg:sticky lg:top-24 h-fit">
                    <div className="rounded-[2rem] bg-black p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                        <div className="space-y-4 max-h-[300px] overflow-auto pr-2 custom-scrollbar">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between items-center text-sm border-b border-white/10 pb-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded bg-gray-800">
                                            <img src={item.image} className="h-full w-full object-cover opacity-80" />
                                        </div>
                                        <span>{item.name} <span className="text-gray-500">x{item.quantity}</span></span>
                                    </div>
                                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 space-y-2 text-gray-400">
                            <div className="flex justify-between">
                                <span>MRP Total</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping Fee</span>
                                <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-between text-2xl font-black">
                            <span>TOTAL</span>
                            <span className="text-red-500">₹{finalTotal.toFixed(2)}</span>
                        </div>
                        <Button type="submit" className="w-full mt-10 h-16 rounded-[1.5rem] bg-red-500 hover:bg-red-600 text-white font-black text-xl tracking-wider">
                            PLACE ORDER
                        </Button>
                        <p className="text-center text-[10px] text-gray-500 mt-4 uppercase tracking-[0.2em]">Secure checkout encrypted by VibeShield</p>
                    </div>
                </div>
            </form>
        </div>
    );
}
