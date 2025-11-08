'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/productsData';

export default function SellPage() {
  const [showListingForm, setShowListingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'tools',
  });

  // Mock seller's products
  const myProducts = products.slice(0, 3);
  const totalRevenue = 45600;
  const totalSales = 12;
  const avgRating = 4.8;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Product listed successfully! In production, this would save to the database.');
    setShowListingForm(false);
    setFormData({ name: '', description: '', price: '', category: 'tools' });
  };

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
            <Link href="/marketplace" className="text-gray-700 hover:text-blue-600 transition-colors">
              Marketplace
            </Link>
            <Link href="/sell" className="text-purple-600 font-semibold">
              Sell
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                Vendor Dashboard
              </span>
            </h1>
            <p className="text-gray-600">Manage your products and track sales</p>
          </div>
          <button
            onClick={() => setShowListingForm(!showListingForm)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            + List New Product
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-sm text-gray-600 mb-2">Total Revenue</div>
            <div className="text-3xl font-bold text-green-600">{totalRevenue.toLocaleString()}</div>
            <div className="text-xs text-gray-500 mt-1">ETB</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-sm text-gray-600 mb-2">Total Sales</div>
            <div className="text-3xl font-bold text-blue-600">{totalSales}</div>
            <div className="text-xs text-gray-500 mt-1">Products Sold</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-sm text-gray-600 mb-2">Avg Rating</div>
            <div className="text-3xl font-bold text-yellow-600">{avgRating}</div>
            <div className="text-xs text-gray-500 mt-1">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-sm text-gray-600 mb-2">Active Products</div>
            <div className="text-3xl font-bold text-purple-600">{myProducts.length}</div>
            <div className="text-xs text-gray-500 mt-1">Listed Items</div>
          </div>
        </div>

        {/* New Listing Form */}
        {showListingForm && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">List New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="e.g., Mobile App Template"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  rows={4}
                  placeholder="Describe your product in detail..."
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price (ETB) *</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                    placeholder="5000"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  >
                    <option value="agritech">🌾 Agri-tech</option>
                    <option value="healthtech">🏥 Health-tech</option>
                    <option value="edtech">📚 Ed-tech</option>
                    <option value="fintech">💰 Fin-tech</option>
                    <option value="tools">🛠️ Tools & SDKs</option>
                    <option value="templates">📄 Templates</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowListingForm(false)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  Publish Product
                </button>
              </div>
            </form>
          </div>
        )}

        {/* My Products */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">My Products</h2>
          <div className="space-y-4">
            {myProducts.map(product => (
              <div key={product.id} className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        Active
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="grid grid-cols-4 gap-6">
                      <div>
                        <div className="text-sm text-gray-600">Price</div>
                        <div className="text-lg font-bold text-purple-600">{product.price.toLocaleString()} ETB</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Rating</div>
                        <div className="text-lg font-bold text-yellow-600">⭐ {product.rating}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Reviews</div>
                        <div className="text-lg font-bold">{product.reviews}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Sales</div>
                        <div className="text-lg font-bold text-green-600">{Math.floor(Math.random() * 20) + 5}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
                      Edit
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm">
                      Analytics
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-lg mb-2">Zero Commission</h3>
            <p className="text-sm text-gray-700">Keep 100% of your earnings. We only charge Academy enrollment.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-bold text-lg mb-2">AI Recommendations</h3>
            <p className="text-sm text-gray-700">Our AI promotes your products to the right audience automatically.</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200">
            <div className="text-3xl mb-3">✓</div>
            <h3 className="font-bold text-lg mb-2">Graduate Badge</h3>
            <p className="text-sm text-gray-700">Your Academy graduate status builds instant trust with buyers.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Scale Your Business?</h3>
          <p className="text-purple-100 mb-6">
            List your MVP, templates, or tools. Reach 500+ entrepreneurs in our ecosystem.
          </p>
          <button
            onClick={() => setShowListingForm(true)}
            className="px-8 py-3 bg-white text-purple-600 rounded-lg font-bold hover:shadow-xl transition-all"
          >
            List Your First Product
          </button>
        </div>
      </div>
    </div>
  );
}

