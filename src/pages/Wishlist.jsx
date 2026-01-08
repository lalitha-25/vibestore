import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';

export default function Wishlist() {
    const { wishlistItems, toggleWishlist, addToCart } = useCart();

    if (wishlistItems.length === 0) {
        return (
            <div className="container mx-auto flex flex-col items-center justify-center py-24 text-center">
                <div className="mb-6 rounded-full bg-secondary p-6">
                    <Heart className="h-12 w-12 text-muted-foreground" />
                </div>
                <h1 className="mb-2 text-3xl font-bold">Your wishlist is empty</h1>
                <p className="mb-8 text-muted-foreground">Save items you love here for later.</p>
                <Link to="/products">
                    <Button size="lg" className="rounded-full px-8">
                        Discover Products
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <h1 className="mb-8 text-3xl font-bold">My Wishlist</h1>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {wishlistItems.map((product) => (
                    <div key={product.id} className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
                        <div className="aspect-square w-full overflow-hidden bg-gray-100 relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                            <button
                                onClick={() => toggleWishlist(product)}
                                className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-red-500 backdrop-blur-sm transition-colors hover:bg-white active:scale-90"
                            >
                                <Trash2 className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="mb-2">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-sm text-muted-foreground">{product.category}</p>
                                <p className="mt-1 font-bold">₹{product.price}</p>
                            </div>
                            <Button
                                className="w-full gap-2 transition-transform active:scale-95 mt-4"
                                onClick={() => {
                                    addToCart(product);
                                    toggleWishlist(product);
                                }}
                            >
                                <ShoppingBag className="h-4 w-4" />
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
