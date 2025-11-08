'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products, categories, Product } from '@/data/productsData';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const data = localStorage.getItem('userData');
    if (data) {
      try {
        setUserProfile(JSON.parse(data));
      } catch (error) {
        console.error('Failed to parse user profile from localStorage', error);
      }
    }
  }, []);

  // AI Recommendation Logic
  const calculateAIScore = (product: Product) => {
    let score = 70;
    
    if (userProfile) {
      if (Array.isArray(userProfile.interests) && userProfile.interests.length > 0) {
        const categoryMatch = userProfile.interests.some((interest: string) =>
          product.category.toLowerCase().includes(interest.toLowerCase().replace('-tech', ''))
        );
        if (categoryMatch) score += 20;
      }

      if (Array.isArray(userProfile.skills) && userProfile.skills.length > 0) {
        const skillMatch = product.tags.some((tag: string) =>
          userProfile.skills.some((skill: string) => tag.toLowerCase().includes(skill.toLowerCase()))
        );
        if (skillMatch) score += 10;
      }
    }
    
    // Boost score for highly rated products
    if (product.rating >= 4.8) score += 5;
    if (product.reviews > 50) score += 5;
    
    return Math.min(100, score);
  };

  // Filter products
  let filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Add AI scores and sort
  filteredProducts = filteredProducts.map(p => ({ ...p, aiScore: calculateAIScore(p) }));
  
  if (sortBy === 'featured') {
    filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  } else if (sortBy === 'ai-recommended') {
    filteredProducts.sort((a, b) => (b.aiScore || 0) - (a.aiScore || 0));
  } else if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const addToCart = (productId: string) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
    }
  };

  const cartTotal = cart.reduce((sum, id) => {
    const product = products.find(p => p.id === id);
    return sum + (product?.price || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold">Connect AI</span>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/academy" className="text-gray-700 hover:text-blue-600 transition-colors">
              Academy
            </Link>
            <Link href="/matchmaking" className="text-gray-700 hover:text-blue-600 transition-colors">
              Find Co-Founders
            </Link>
            <Link href="/marketplace" className="text-blue-600 font-semibold">
              Marketplace
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">
              Profile
            </Link>
            <Link href="/cart" className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                🛒
              </div>
              {cart.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                  {cart.length}
                </div>
              )}
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              AI-Powered
            </span>{' '}
            Marketplace
          </h1>
          <p className="text-xl text-gray-600">
            Buy and sell products from Academy graduates. AI recommends based on your profile.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600">{products.length}</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600">{products.filter(p => p.seller.graduate).length}</div>
            <div className="text-sm text-gray-600">From Graduates</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">
              {products.reduce((sum, p) => sum + p.reviews, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Reviews</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-orange-600">{cart.length}</div>
            <div className="text-sm text-gray-600">In Your Cart</div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex gap-4 items-center mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
            >
              <option value="featured">🌟 Featured</option>
              <option value="ai-recommended">🤖 AI Recommended</option>
              <option value="price-low">💰 Price: Low to High</option>
              <option value="price-high">💰 Price: High to Low</option>
              <option value="rating">⭐ Highest Rated</option>
            </select>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.featured && (
                  <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ Featured
                  </div>
                )}
                {product.aiScore && product.aiScore >= 90 && (
                  <div className="absolute top-3 right-3 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    🤖 AI Pick
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">{product.name}</h3>
                  <div className="text-right">
                    <div className="text-xl font-bold text-purple-600">{product.price.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">{product.currency}</div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                {/* Seller Info */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                  <Image
                    src={product.seller.avatar}
                    alt={product.seller.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{product.seller.name}</div>
                    {product.seller.graduate && (
                      <div className="text-xs text-green-600">✓ Academy Graduate</div>
                    )}
                  </div>
                </div>

                {/* Rating & Tags */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{product.reviews} reviews</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* AI Recommendation */}
                {product.aiScore && product.aiScore >= 85 && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                    <div className="text-xs font-semibold text-purple-900 mb-1">
                      🤖 AI Recommendation: {product.aiScore}%
                    </div>
                    <p className="text-xs text-purple-700">
                      Perfect match for your interests and skills!
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    href={`/marketplace/${product.id}`}
                    className="flex-1 px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={cart.includes(product.id)}
                    className={`flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      cart.includes(product.id)
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {cart.includes(product.id) ? '✓ In Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <Link
          href="/cart"
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all font-bold flex items-center gap-3 animate-bounce"
        >
          <span>🛒 View Cart ({cart.length})</span>
          <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm">
            {cartTotal.toLocaleString()} ETB
          </span>
        </Link>
      )}
    </div>
  );
}

