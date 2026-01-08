import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="border-t bg-black text-white py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-black tracking-tighter text-red-500 italic">VIBESTORE</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Redefining minimalism since 2026. Premium quality essentials for those who live with intention.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Shop</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/products" className="hover:text-red-500 transition-colors">All Products</Link></li>
                            <li><Link to="/products" className="hover:text-red-500 transition-colors">New Season</Link></li>
                            <li><Link to="/products" className="hover:text-red-500 transition-colors">Best Sellers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Help</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-red-500 transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-red-500 transition-colors">Returns</a></li>
                            <li><a href="#" className="hover:text-red-500 transition-colors">Order Tracking</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Visit Us</h4>
                        <address className="not-italic text-sm text-gray-400 space-y-2">
                            <p>123 Vibe Mansion, Trendy Street</p>
                            <p>Mumbai, Maharashtra 400001</p>
                            <p className="mt-4"><span className="text-gray-500">Phone:</span> +91 98765 43210</p>
                            <p><span className="text-gray-500">Email:</span> hello@vibestore.com</p>
                        </address>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
                    <p>© 2026 VibeStore. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
