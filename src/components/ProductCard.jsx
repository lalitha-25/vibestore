import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/Button';

export function ProductCard({ product }) {
    return (
        <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
            <div className="aspect-square w-full overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
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
                    <p className="font-medium">${product.price}</p>
                </div>
                <Button className="w-full gap-2 transition-transform active:scale-95">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}
