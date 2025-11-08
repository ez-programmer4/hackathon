'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { platformStats } from '@/data/mockData';

export default function LandingPage() {
  const [stats, setStats] = useState({
    entrepreneurs: 0,
    teams: 0,
    mvps: 0,
    success: 0,
  });

  useEffect(() => {
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setStats({
        entrepreneurs: Math.floor(platformStats.entrepreneursTrained * progress),
        teams: Math.floor(platformStats.teamsFormed * progress),
        mvps: Math.floor(platformStats.activeMVPs * progress),
        success: Math.floor(platformStats.successRate * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation - PREMIUM */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all transform group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-ping"></div>
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-transparent bg-clip-text animate-gradient">
                Connect AI
              </span>
              <div className="text-xs text-gray-500 font-semibold">Complete Ecosystem</div>
            </div>
          </Link>
          <div className="flex gap-8 items-center">
            <a href="#how-it-works" className="relative text-gray-700 hover:text-blue-600 transition-colors font-semibold group">
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </a>
            <a href="#features" className="relative text-gray-700 hover:text-blue-600 transition-colors font-semibold group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </a>
            <Link href="/marketplace" className="relative text-gray-700 hover:text-purple-600 transition-colors font-bold group">
              <span className="flex items-center gap-2">
                🛍️ Marketplace
                <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full animate-pulse">HOT</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link
              href="/register"
              className="relative px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - UPGRADED */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg opacity-10 transform rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-10 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg opacity-10 transform -rotate-12 animate-float animation-delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/80 backdrop-blur-md border-2 border-purple-200 rounded-full shadow-lg animate-slideDown">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping animation-delay-200"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping animation-delay-400"></div>
              </div>
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-transparent bg-clip-text">
                Learn • Build • Match • Sell - Complete Ecosystem
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                LIVE
              </span>
            </div>

            {/* Main Heading with Animation */}
            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight animate-fadeIn">
              <div className="mb-4">Build Your</div>
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-transparent bg-clip-text animate-gradient">
                  Startup Dream Team
                </span>
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-full transform scale-x-0 animate-scaleX"></div>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto animate-fadeIn animation-delay-200">
              We don&apos;t just connect co-founders—<span className="font-bold text-purple-600">we create them</span>. 
              Learn in our Academy, get matched with perfect co-founders by <span className="font-bold text-blue-600">AI</span>, 
              and sell your products in our marketplace. A complete ecosystem for Ethiopian entrepreneurs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeIn animation-delay-400">
              <Link
                href="/register"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl text-lg font-bold hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/marketplace"
                className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl text-lg font-bold hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🛍️ Browse Marketplace
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>

            {/* Stats with Enhanced Design */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-white/50 animate-fadeIn animation-delay-600">
                <div className="text-5xl font-black bg-gradient-to-br from-blue-600 to-blue-700 text-transparent bg-clip-text mb-3 group-hover:scale-110 transition-transform">
                  {stats.entrepreneurs}+
                </div>
                <div className="text-gray-700 font-semibold">Entrepreneurs Trained</div>
                <div className="mt-3 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
              <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-white/50 animate-fadeIn animation-delay-700">
                <div className="text-5xl font-black bg-gradient-to-br from-green-600 to-emerald-600 text-transparent bg-clip-text mb-3 group-hover:scale-110 transition-transform">
                  {stats.teams}+
                </div>
                <div className="text-gray-700 font-semibold">Successful Teams</div>
                <div className="mt-3 h-1 bg-gradient-to-r from-green-600 to-emerald-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
              <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-white/50 animate-fadeIn animation-delay-800">
                <div className="text-5xl font-black bg-gradient-to-br from-purple-600 to-pink-600 text-transparent bg-clip-text mb-3 group-hover:scale-110 transition-transform">
                  {stats.mvps}+
                </div>
                <div className="text-gray-700 font-semibold">Active MVPs</div>
                <div className="mt-3 h-1 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
              <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-white/50 animate-fadeIn animation-delay-900">
                <div className="text-5xl font-black bg-gradient-to-br from-orange-600 to-red-600 text-transparent bg-clip-text mb-3 group-hover:scale-110 transition-transform">
                  {stats.success}%
                </div>
                <div className="text-gray-700 font-semibold">Success Rate</div>
                <div className="mt-3 h-1 bg-gradient-to-r from-orange-600 to-red-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </div>

            {/* Social Proof Pills */}
            <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fadeIn animation-delay-1000">
              <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">500+ Active Entrepreneurs</span>
              </div>
              <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center gap-2">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-500 text-sm">⭐</span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.9/5 Rating</span>
              </div>
              <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center gap-2">
                <span className="text-green-500 text-sm">✓</span>
                <span className="text-sm font-semibold text-gray-700">Verified by Jimma University</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - UPGRADED */}
      <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
              SIMPLE 4-STEP PROCESS
            </div>
            <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 text-transparent bg-clip-text">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From complete beginner to validated entrepreneur in 4 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-200">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Register & Profile</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Create your detailed profile including academic background, skills, interests, and
                entrepreneurial goals. Our comprehensive assessment helps us understand your strengths.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>Get Started</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="absolute -right-6 top-12 hidden md:block">
                <svg className="w-12 h-12 text-blue-200 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-green-200">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors">Founder Academy</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Complete our intensive 12-week program: THINK (validate problems), BUILD (create MVP), 
                LAUNCH (go-to-market). Graduate as &quot;Co-Founder Ready&quot; with a proven track record.
              </p>
              <div className="flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>Learn More</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="absolute -right-6 top-12 hidden md:block">
                <svg className="w-12 h-12 text-green-200 group-hover:text-green-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-200">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">AI Matchmaking</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our AI analyzes skills, domain passion, behavioral fit, and proven competence to form ideal
                multi-disciplinary teams. Start building your startup with the perfect co-founders.
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>Find Co-Founders</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="absolute -right-6 top-12 hidden md:block">
                <svg className="w-12 h-12 text-purple-200 group-hover:text-purple-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-pink-200">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-600 transition-colors">Sell & Grow</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Launch your MVP in our AI-powered marketplace. Sell to other entrepreneurs, get reviews, and grow your 
                business. Complete ecosystem from learning to earning.
              </p>
              <div className="flex items-center gap-2 text-pink-600 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>Browse Marketplace</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - PREMIUM 3D CARDS */}
      <section id="features" className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">
              🎯 POWERFUL FEATURES
            </div>
            <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-transparent bg-clip-text">
              Why Connect AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re not just another networking platform. We&apos;re creating a new generation of validated, 
              trained, and mission-aligned entrepreneurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Rigorous Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  12-week intensive program covering ideation, validation, MVP development, and go-to-market strategy.
                </p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-green-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors">Smart Matching</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI-powered algorithm considers skills, domain expertise, behavioral fit, and commitment level.
                </p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-purple-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">Validated Founders</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every member has completed real projects, validated ideas, and demonstrated commitment.
                </p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-orange-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">Domain Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Match with experts in Agri-tech, Health-tech, Logistics, and more. Real domain knowledge matters.
                </p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-red-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400 to-pink-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <span className="text-3xl">💪</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">Behavioral Fit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Assess resilience, teamwork, and drive. Find co-founders who share your work ethic and values.
                </p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-teal-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors">Launch Ready</h3>
                <p className="text-gray-600 leading-relaxed">
                  Graduate with a pitch deck, MVP, and validated business model. Ready to raise funding.
                </p>
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Preview - EXPANDED */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold">
              🛍️ 20+ Products Available
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                AI-Powered Marketplace
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Buy and sell products from verified Academy graduates. Every seller is trained, validated, and proven.
            </p>
            <p className="text-lg text-purple-600 font-semibold mb-8">
              🤖 AI recommends products based on YOUR skills and interests
            </p>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-purple-600">20+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Graduates</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600">800+</div>
              <div className="text-sm text-gray-600">Reviews</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-orange-600">0%</div>
              <div className="text-sm text-gray-600">Commission</div>
            </div>
          </div>

          {/* Featured Products - 6 PREMIUM Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all p-6 cursor-pointer transform hover:-translate-y-3 hover:scale-105 border-2 border-transparent hover:border-green-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="w-full h-52 bg-gradient-to-br from-green-400 via-emerald-500 to-blue-500 flex items-center justify-center text-white text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    🌾
                  </div>
                  <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 rounded-xl text-xs font-black shadow-lg">
                    ⭐ FEATURED
                  </div>
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-lg text-xs font-bold">
                    🔥 24 Sales
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-green-600 transition-colors">FarmConnect Mobile App</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Connect farmers directly to buyers. Real-time pricing and market data.</p>
                <div className="flex items-center gap-2 mb-5 pb-4 border-b-2 border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-green-400 rounded-full border-2 border-white shadow-md"></div>
                  <div className="text-sm">
                    <div className="font-bold">Hanna Solomon</div>
                    <div className="text-xs text-green-600 font-semibold">✓ Academy Graduate</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">12,000 ETB</div>
                    <div className="text-yellow-500 text-sm font-semibold mt-1">⭐⭐⭐⭐⭐ 4.8 (24)</div>
                  </div>
                  <Link href="/marketplace" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-xl transition-all font-bold transform group-hover:scale-110">
                    View →
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all p-6 cursor-pointer transform hover:-translate-y-3 hover:scale-105 border-2 border-transparent hover:border-red-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-400 to-pink-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="w-full h-52 bg-gradient-to-br from-red-400 via-pink-500 to-rose-500 flex items-center justify-center text-white text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    🏥
                  </div>
                  <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl text-xs font-black shadow-lg">
                    🤖 AI PICK
                  </div>
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-lg text-xs font-bold">
                    💎 Premium
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-red-600 transition-colors">HealthTrack System</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Digital health records. HIPAA-compliant with analytics.</p>
                <div className="flex items-center gap-2 mb-5 pb-4 border-b-2 border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-pink-400 rounded-full border-2 border-white shadow-md"></div>
                  <div className="text-sm">
                    <div className="font-bold">Dawit Tesfaye</div>
                    <div className="text-xs text-green-600 font-semibold">✓ Academy Graduate</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">8,500 ETB</div>
                    <div className="text-yellow-500 text-sm font-semibold mt-1">⭐⭐⭐⭐⭐ 4.9 (18)</div>
                  </div>
                  <Link href="/marketplace" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-xl transition-all font-bold transform group-hover:scale-110">
                    View →
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all p-6 cursor-pointer transform hover:-translate-y-3 hover:scale-105 border-2 border-transparent hover:border-blue-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="w-full h-52 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 flex items-center justify-center text-white text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    💼
                  </div>
                  <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl text-xs font-black shadow-lg">
                    💰 BEST VALUE
                  </div>
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-lg text-xs font-bold">
                    🏆 67 Reviews
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-blue-600 transition-colors">Pitch Deck Templates</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Professional templates for fundraising. Used by 50+ funded startups.</p>
                <div className="flex items-center gap-2 mb-5 pb-4 border-b-2 border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-2 border-white shadow-md"></div>
                  <div className="text-sm">
                    <div className="font-bold">Sara Mohammed</div>
                    <div className="text-xs text-green-600 font-semibold">✓ Academy Graduate</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">1,200 ETB</div>
                    <div className="text-yellow-500 text-sm font-semibold mt-1">⭐⭐⭐⭐⭐ 5.0 (67)</div>
                  </div>
                  <Link href="/marketplace" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-xl transition-all font-bold transform group-hover:scale-110">
                    View →
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all p-6 cursor-pointer transform hover:-translate-y-3 hover:scale-105 border-2 border-transparent hover:border-orange-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="w-full h-52 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center text-white text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    🚚
                  </div>
                  <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-xs font-black shadow-lg">
                    🚀 POPULAR
                  </div>
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-lg text-xs font-bold">
                    📊 31 Reviews
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-orange-600 transition-colors">LogiTrack Optimizer</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">AI-powered delivery routes. Reduce fuel costs by 30%.</p>
                <div className="flex items-center gap-2 mb-5 pb-4 border-b-2 border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white shadow-md"></div>
                  <div className="text-sm">
                    <div className="font-bold">Yonas Bekele</div>
                    <div className="text-xs text-green-600 font-semibold">✓ Academy Graduate</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">15,000 ETB</div>
                    <div className="text-yellow-500 text-sm font-semibold mt-1">⭐⭐⭐⭐ 4.7 (31)</div>
                  </div>
                  <Link href="/marketplace" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-xl transition-all font-bold transform group-hover:scale-110">
                    View →
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all p-6 cursor-pointer transform hover:-translate-y-3 hover:scale-105 border-2 border-transparent hover:border-teal-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="w-full h-52 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 flex items-center justify-center text-white text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    🤖
                  </div>
                  <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl text-xs font-black shadow-lg animate-pulse">
                    🔥 TRENDING
                  </div>
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-lg text-xs font-bold">
                    ⚡ Fast Delivery
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-teal-600 transition-colors">AI Chatbot Business</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">Multi-lingual AI. Amharic, Oromo, English support.</p>
                <div className="flex items-center gap-2 mb-5 pb-4 border-b-2 border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full border-2 border-white shadow-md"></div>
                  <div className="text-sm">
                    <div className="font-bold">Abebe Kebede</div>
                    <div className="text-xs text-green-600 font-semibold">✓ Academy Graduate</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">8,900 ETB</div>
                    <div className="text-yellow-500 text-sm font-semibold mt-1">⭐⭐⭐⭐ 4.6 (38)</div>
                  </div>
                  <Link href="/marketplace" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-xl transition-all font-bold transform group-hover:scale-110">
                    View →
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all p-6 cursor-pointer transform hover:-translate-y-3 hover:scale-105 border-2 border-transparent hover:border-indigo-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="w-full h-52 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center text-white text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    📚
                  </div>
                  <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 rounded-xl text-xs font-black shadow-lg">
                    ⭐ 4.6/5
                  </div>
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-lg text-xs font-bold">
                    📖 42 Reviews
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-indigo-600 transition-colors">EduPro Learning System</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">LMS for Ethiopian schools. Amharic interface included.</p>
                <div className="flex items-center gap-2 mb-5 pb-4 border-b-2 border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full border-2 border-white shadow-md"></div>
                  <div className="text-sm">
                    <div className="font-bold">Meron Alemayehu</div>
                    <div className="text-xs text-green-600 font-semibold">✓ Academy Graduate</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">9,500 ETB</div>
                    <div className="text-yellow-500 text-sm font-semibold mt-1">⭐⭐⭐⭐ 4.6 (42)</div>
                  </div>
                  <Link href="/marketplace" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-xl transition-all font-bold transform group-hover:scale-110">
                    View →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - ENHANCED */}
          <div className="text-center">
            <Link
              href="/marketplace"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white rounded-2xl text-2xl font-black shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 hover:scale-110 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                🛍️ Browse All 20+ Products
                <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-white opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
            <p className="text-gray-600 mt-6 text-lg">
              <span className="font-bold text-green-600">✓ 100% Graduates</span> • 
              <span className="font-bold text-purple-600"> 0% Commission</span> • 
              <span className="font-bold text-blue-600"> AI-Powered</span>
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-bold mb-2">Verified Sellers Only</h4>
              <p className="text-sm text-gray-600">Every seller completed our 12-week Academy</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="font-bold mb-2">AI Recommendations</h4>
              <p className="text-sm text-gray-600">Personalized products based on your profile</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-bold mb-2">Zero Commission</h4>
              <p className="text-sm text-gray-600">Sellers keep 100% of their earnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real entrepreneurs. Real results. Real impact.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full"></div>
                <div>
                  <div className="font-bold text-lg">Hanna Solomon</div>
                  <div className="text-sm text-gray-600">Agri-tech Founder</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;Connect AI changed everything. I learned to validate my idea, found a technical co-founder through the AI matching, and we&apos;ve already sold our FarmConnect app to 50+ farmers. The zero commission marketplace helped us become profitable in Month 2!&quot;
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="font-semibold">🌾 FarmConnect</span>
                <span>•</span>
                <span>Revenue: 120K ETB</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                <div>
                  <div className="font-bold text-lg">Dawit Tesfaye</div>
                  <div className="text-sm text-gray-600">Health-tech Founder</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;The Academy forced me to talk to 50 doctors before building anything. That validation saved me months of wasted development. Now HealthTrack is used in 12 clinics and growing fast!&quot;
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="font-semibold">🏥 HealthTrack</span>
                <span>•</span>
                <span>12 Clients</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border-2 border-orange-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full"></div>
                <div>
                  <div className="font-bold text-lg">Yonas Bekele</div>
                  <div className="text-sm text-gray-600">Logistics Founder</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;I was an engineering student with no business skills. The Academy taught me sales, pricing, and go-to-market. My co-founder handles marketing while I code. Perfect team formed by AI!&quot;
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="font-semibold">🚚 LogiTrack</span>
                <span>•</span>
                <span>30% Fuel Savings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">What Entrepreneurs Say</h2>
            <p className="text-xl text-gray-600">Join 500+ satisfied members</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="text-yellow-500 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                &quot;Best $4 I ever spent. The Academy alone is worth 10x more. The marketplace and matchmaking are bonuses. This should cost $500!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
                <div>
                  <div className="font-bold">Meron Alemayehu</div>
                  <div className="text-sm text-gray-600">Ed-tech Founder</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="text-yellow-500 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                &quot;The AI matchmaking is incredible. It paired me with someone who has EXACTLY the skills I lack. We&apos;re building something amazing together.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full"></div>
                <div>
                  <div className="font-bold">Sara Mohammed</div>
                  <div className="text-sm text-gray-600">Fintech Founder</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="text-yellow-500 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                &quot;I tried building alone for 6 months and failed. Connect AI taught me to validate first, matched me with a business partner, and now we&apos;re profitable.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full"></div>
                <div>
                  <div className="font-bold">Abebe Kebede</div>
                  <div className="text-sm text-gray-600">SaaS Founder</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="text-yellow-500 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                &quot;The marketplace gave me my first customers! Other entrepreneurs who understand the value. Plus listing is FREE. Genius business model.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full"></div>
                <div>
                  <div className="font-bold">Tigist Worku</div>
                  <div className="text-sm text-gray-600">Product Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-3">💰 How much does it cost?</h3>
              <p className="text-gray-700">
                Only 600 ETB ($4 USD) for LIFETIME access to the entire ecosystem: Academy, AI Matchmaking, and Marketplace. No monthly fees. No commission on sales.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-3">⏱️ How long is the Academy program?</h3>
              <p className="text-gray-700">
                12 weeks (3 months). You can go at your own pace - some finish faster, some take longer. The key is completing all phases: THINK, BUILD, and LAUNCH.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-3">🤖 How does the AI matching work?</h3>
              <p className="text-gray-700">
                Our AI analyzes your profile (skills, interests, industry focus, behavioral traits) and matches you with co-founders who complement your strengths. It considers technical skills, domain expertise, commitment level, and proven track record from the Academy.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-3">🛍️ Can I sell on the marketplace immediately?</h3>
              <p className="text-gray-700">
                You need to complete the Academy first to get your &quot;Co-Founder Ready&quot; badge. This ensures every seller is trained and validated. It protects buyers and maintains marketplace quality.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-3">💳 What payment methods do you accept?</h3>
              <p className="text-gray-700">
                For Academy enrollment: Telebirr, CBE Birr, M-Pesa, and bank transfer. For marketplace purchases: Same methods plus cash on delivery for physical products.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-3">🎓 Do I need technical skills to join?</h3>
              <p className="text-gray-700">
                NO! We welcome all disciplines: agriculture, health, business, engineering, design, etc. That&apos;s the point - we form multi-disciplinary teams. You bring domain expertise, we&apos;ll match you with technical co-founders.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-3">🏆 What&apos;s your success rate?</h3>
              <p className="text-gray-700">
                78% of our Academy graduates successfully launch their MVP within 6 months. Compare that to the industry average of 10%. The difference? We force validation before building, and we create proper teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - PREMIUM */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 animate-gradient" style={{backgroundSize: '200% 200%'}}>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Animated Circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-bold mb-8 animate-slideDown">
            🎉 LIMITED TIME OFFER
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
            Ready to Build
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300 text-transparent bg-clip-text">
              the Future?
            </span>
          </h2>
          
          <p className="text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join <span className="font-bold text-yellow-300">500+ entrepreneurs</span> who are transforming Ethiopia&apos;s startup ecosystem. 
            Only <span className="font-bold text-yellow-300">600 ETB</span> to access the entire Connect AI ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/register"
              className="group relative px-12 py-6 bg-white text-blue-600 rounded-2xl text-xl font-black shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start Your Journey Today
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <Link
              href="/marketplace"
              className="group px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-2xl text-xl font-black border-2 border-white/30 hover:bg-white/20 transition-all transform hover:-translate-y-2"
            >
              <span className="flex items-center justify-center gap-3">
                Explore Marketplace
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Price Highlight */}
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl">
            <div className="text-left">
              <div className="text-white/70 text-sm font-semibold">One-time Payment</div>
              <div className="text-white text-3xl font-black">600 ETB</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-left">
              <div className="text-white/70 text-sm font-semibold">That&apos;s Only</div>
              <div className="text-white text-3xl font-black">$4 USD</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-left">
              <div className="text-white/70 text-sm font-semibold">Access Level</div>
              <div className="text-yellow-300 text-3xl font-black">LIFETIME</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">0% Commission</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Full Access Forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - PREMIUM */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl">C</span>
                </div>
                <div>
                  <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 text-transparent bg-clip-text">
                    Connect AI
                  </span>
                  <div className="text-sm text-gray-400">Complete Ecosystem</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Building Ethiopia&apos;s Next Generation of Startup Teams through Education, AI Matching, and E-commerce Innovation.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <span className="text-2xl">𝕏</span>
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <span className="text-2xl">in</span>
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <span className="text-2xl">📱</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Platform</h4>
              <ul className="space-y-3">
                <li><Link href="/academy" className="text-gray-400 hover:text-white transition-colors">Academy</Link></li>
                <li><Link href="/matchmaking" className="text-gray-400 hover:text-white transition-colors">Find Co-Founders</Link></li>
                <li><Link href="/marketplace" className="text-gray-400 hover:text-white transition-colors">Marketplace</Link></li>
                <li><Link href="/sell" className="text-gray-400 hover:text-white transition-colors">Become a Seller</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Connect AI. Powered by Jimma University Innovation Hub.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
