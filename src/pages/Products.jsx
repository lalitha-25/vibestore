import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/Button';
import { products } from '../data/products';

export default function Products() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Clothing", "Outerwear", "Accessories", "Footwear"];

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Shop All</h1>
                    <p className="text-muted-foreground">Find your perfect style.</p>
                </div>
            </div>

            {/* Category Filter */}
            <div className="mb-8 flex flex-wrap gap-2">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory(category)}
                        className="rounded-full"
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="py-20 text-center">
                    <p className="text-muted-foreground">No products found in this category.</p>
                    <Button
                        variant="link"
                        onClick={() => setActiveCategory("All")}
                        className="mt-2"
                    >
                        Clear filters
                    </Button>
                </div>
            )}
        </div>
    );
}
