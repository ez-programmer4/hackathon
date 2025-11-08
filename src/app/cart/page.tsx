'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/productsData';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState<string[]>([]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // In real app, get from state management or API
    const mockCart = ['p1', 'p3', 'p7']; // Mock cart items
    setCart(mockCart);
  }, []);

  const cartItems = products.filter(p => cart.includes(p.id));
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal - discountAmount;

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(id => id !== productId));
  };

  const applyPromoCode = () => {
    if (promoCode === 'GRADUATE10') {
      setDiscount(10);
    } else if (promoCode === 'CONNECT20') {
      setDiscount(20);
    } else {
      alert('Invalid promo code');
    }
  };

  const handleCheckout = () => {
    alert(`Order placed! Total: ${total.toLocaleString()} ETB\n\nIn production, this would process payment via Telebirr/CBE Birr.`);
    setCart([]);
    router.push('/marketplace');
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
            <Link href="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some products from our marketplace!</p>
            <Link
              href="/marketplace"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Browse Marketplace
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 flex gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src={item.seller.avatar}
                        alt={item.seller.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-sm text-gray-600">{item.seller.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-semibold">{item.rating}</span>
                      <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="text-right flex flex-col justify-between">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{item.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">{item.currency}</div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-700 font-semibold text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                    <span className="font-semibold">{subtotal.toLocaleString()} ETB</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({discount}%)</span>
                      <span>-{discountAmount.toLocaleString()} ETB</span>
                    </div>
                  )}
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-purple-600">{total.toLocaleString()} ETB</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      placeholder="GRADUATE10"
                      className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-semibold"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Try: GRADUATE10 or CONNECT20</p>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all mb-3"
                >
                  Proceed to Checkout
                </button>

                <Link
                  href="/marketplace"
                  className="block w-full px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold text-center hover:bg-purple-50 transition-colors"
                >
                  Continue Shopping
                </Link>

                {/* Payment Methods */}
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm font-semibold text-gray-700 mb-3">We Accept:</p>
                  <div className="flex gap-2 flex-wrap">
                    <div className="px-3 py-2 bg-green-100 text-green-700 rounded text-xs font-semibold">
                      Telebirr
                    </div>
                    <div className="px-3 py-2 bg-orange-100 text-orange-700 rounded text-xs font-semibold">
                      CBE Birr
                    </div>
                    <div className="px-3 py-2 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                      M-Pesa
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-bold mb-2">Secure Payment</h4>
              <p className="text-sm text-gray-600">All transactions are encrypted and secure</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h4 className="font-bold mb-2">Verified Sellers</h4>
              <p className="text-sm text-gray-600">All products from Academy graduates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📦</div>
              <h4 className="font-bold mb-2">Instant Delivery</h4>
              <p className="text-sm text-gray-600">Digital products delivered immediately</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

