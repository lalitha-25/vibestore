import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Truck,
    ShieldCheck,
    Clock,
    Instagram,
    Star,
    Quote
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
    const featuredProducts = products.slice(0, 3);

    const categories = [
        {
            name: "Clothing",
            image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "/products",
            cols: "md:col-span-2"
        },
        {
            name: "Accessories",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "/products",
            cols: "md:col-span-1"
        },
        {
            name: "Footwear",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "/products",
            cols: "md:col-span-1"
        },
        {
            name: "New Drops",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "/products",
            cols: "md:col-span-2"
        },
    ];

    const features = [
        {
            icon: <Truck className="h-8 w-8 text-red-500" />,
            title: "Fast Shipping",
            description: "Free delivery on all orders over $100 within 48 hours."
        },
        {
            icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
            title: "Secure Payment",
            description: "100% secure payment processing with encrypted transactions."
        },
        {
            icon: <Clock className="h-8 w-8 text-red-500" />,
            title: "24/7 Support",
            description: "Dedicated support team available around the clock for any queries."
        }
    ];

    const testimonials = [
        {
            name: "Sarah J.",
            text: "The quality of the clothing is unmatched. I've been looking for basic essentials that actually last, and VibeStore delivered.",
            rating: 5
        },
        {
            name: "Mark D.",
            text: "Love the minimalist aesthetic and the fast shipping. My order arrived in just 2 days. Highly recommend!",
            rating: 5
        },
        {
            name: "Elena R.",
            text: "The accessories are stunning. They add a touch of class to every outfit. Will definitely be buying more.",
            rating: 4
        }
    ];

    return (
        <div className="flex flex-col gap-24 pb-20">
            {/* Hero Section */}
            <section className="relative h-[700px] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto flex h-full items-center px-4 md:px-6">
                    <div className="z-10 flex max-w-2xl flex-col gap-6">
                        <div className="inline-flex w-fit items-center rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-600">
                            New Season Arrival
                        </div>
                        <h1 className="text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                            VIBE <span className="text-red-500">2026</span>
                        </h1>
                        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                            Define your aesthetic with our latest drop. Premium minimalist pieces
                            crafted for those who live with intention.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <Link to="/products">
                                <Button size="lg" className="h-14 bg-red-500 px-8 text-white hover:bg-red-600 gap-2">
                                    Shop The Drop <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link to="/products">
                                <Button variant="outline" size="lg" className="h-14 px-8 border-red-500 text-red-500 hover:bg-red-50">
                                    Explore Categories
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-red-500/10 blur-[120px]" />
                <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute right-0 bottom-0 top-0 hidden lg:block w-1/3 bg-gray-200/50 -skew-x-12 transform translate-x-32" />
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
            </section>

            {/* Featured Categories Grid */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-4xl font-bold tracking-tight">Shop by Category</h2>
                    <p className="mt-2 text-muted-foreground">Find exactly what you're looking for.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {categories.map((cat, idx) => (
                        <Link
                            key={idx}
                            to={cat.link}
                            className={`group relative overflow-hidden rounded-3xl bg-gray-100 ${cat.cols}`}
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold">{cat.name}</h3>
                                <p className="mt-1 flex items-center gap-2 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                                    View Collection <ArrowRight className="h-4 w-4" />
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-secondary/30 py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background shadow-sm border border-border/50">
                                <div className="mb-6 rounded-2xl bg-red-500/5 p-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Now (Existing Products Grid) */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight text-red-500">Trending Now</h2>
                        <p className="mt-2 text-muted-foreground">The pieces everyone is talking about.</p>
                    </div>
                    <Link to="/products" className="group flex items-center gap-2 font-medium text-red-500">
                        View All <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="container mx-auto px-4 md:px-6 overflow-hidden">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold tracking-tight">Our Community</h2>
                    <p className="mt-2 text-muted-foreground">What people are saying about VibeStore.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="relative p-8 rounded-3xl bg-secondary/20 flex flex-col justify-between">
                            <Quote className="absolute top-6 right-6 h-8 w-8 text-red-500/20" />
                            <div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-red-500 text-red-500" : "text-gray-300"}`} />
                                    ))}
                                </div>
                                <p className="text-lg italic text-foreground/80 leading-relaxed mb-6">
                                    "{t.text}"
                                </p>
                            </div>
                            <p className="font-bold text-red-500">— {t.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Social Feed Placeholder */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold flex items-center justify-center gap-2 italic">
                        <Instagram className="h-6 w-6" /> @VIBESTORE_OFFICIAL
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="aspect-square bg-gray-200 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-red-500/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                                <Instagram className="text-white h-8 w-8" />
                            </div>
                            <img
                                src={`https://images.unsplash.com/photo-${[
                                    "1512436991641-6745cdb1723f",
                                    "1483985988355-763728e1935b",
                                    "1539109132332-94ad670b133a",
                                    "1492707892479-7bc8d5a4ee93",
                                    "1558769132-cb1aea458c5e",
                                    "1503342217505-b0a15ec3261c"
                                ][i]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                alt="Social item"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter / Promo */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="rounded-[3rem] bg-black px-6 py-20 text-center text-white md:px-12 relative overflow-hidden">
                    <div className="absolute -left-20 -bottom-20 h-[300px] w-[300px] rounded-full bg-red-500/20 blur-[80px]" />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black tracking-tighter md:text-6xl mb-4">
                            DON'T MISS <span className="text-red-500">A BEAT.</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-lg text-gray-400 text-lg">
                            Get exclusive access to secret drops, sales, and style guides
                            delivered directly to your inbox.
                        </p>
                        <div className="mx-auto mt-10 flex max-w-md flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                            <input
                                type="email"
                                placeholder="vibemail@vibestore.com"
                                className="flex h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-6 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition-all"
                            />
                            <Button className="h-14 px-8 rounded-2xl bg-red-500 text-white hover:bg-red-600 font-bold shrink-0">
                                JOIN NOW
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
