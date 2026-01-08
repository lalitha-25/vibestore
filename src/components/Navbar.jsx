import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, LogOut, Heart } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { cartCount, wishlistCount } = useCart();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            setUser(null);
        }
    }, [location]); // Re-check on every navigation

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/products' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <ShoppingBag className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold tracking-tight">VibeStore</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    location.pathname === link.path
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <Link to="/wishlist" className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
                            <Heart className="h-5 w-5" />
                            {wishlistCount > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>
                        <Link to="/cart" className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
                            <ShoppingBag className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <div className="h-6 w-px bg-border mx-2" />
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2 rounded-full bg-accent px-3 py-1 text-sm font-medium">
                                    <User className="h-4 w-4" />
                                    <span className="hidden lg:inline">{user.email.split('@')[0]}</span>
                                </div>
                                <Button variant="ghost" size="sm" onClick={handleLogout} title="Logout">
                                    <LogOut className="h-4 w-4" />
                                </Button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant="ghost" size="sm">
                                        Log in
                                    </Button>
                                </Link>
                                <Link to="/register">
                                    <Button size="sm">Get Started</Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden animate-accordion-down border-b bg-background">
                    <div className="space-y-1 px-4 py-3 pb-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                                    location.pathname === link.path
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 flex flex-col space-y-2">
                            {user ? (
                                <>
                                    <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-muted-foreground">
                                        <User className="h-4 w-4" />
                                        <span>{user.email}</span>
                                    </div>
                                    <Button variant="outline" className="w-full justify-start gap-2" onClick={() => { handleLogout(); setIsMenuOpen(false); }}>
                                        <LogOut className="h-4 w-4" /> Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                                        <Button variant="outline" className="w-full justify-start">
                                            Log in
                                        </Button>
                                    </Link>
                                    <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                                        <Button className="w-full justify-start">
                                            Get Started
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
