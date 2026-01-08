import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from './ui/Button';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export function ProductCard({ product }) {
    const { addToCart, toggleWishlist, wishlistItems } = useCart();

    const isWishlisted = wishlistItems.some(item => item.id === product.id);

    return (
        <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
            <div className="aspect-square w-full overflow-hidden bg-gray-100 relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
                <button
                    onClick={() => toggleWishlist(product)}
                    className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-900 backdrop-blur-sm transition-colors hover:bg-white active:scale-90"
                    title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                >
                    <Heart className={cn("h-5 w-5 transition-colors", isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600")} />
                </button>
                {product.isNew && (
                    <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                        New
                    </span>
                )}
            </div>
            <div className="p-4">
                <div className="mb-2 flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <p className="font-medium">₹{product.price}</p>
                </div>
                <Button
                    className="w-full gap-2 transition-transform active:scale-95"
                    onClick={() => addToCart(product)}
                >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}
