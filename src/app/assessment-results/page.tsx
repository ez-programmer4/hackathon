'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AssessmentResultsPage() {
  const [results, setResults] = useState({
    motivation: 85,
    leadership: 72,
    teamwork: 90,
    riskTolerance: 68,
    resilience: 88,
    communication: 80,
    adaptability: 75,
  });

  const [personalityType, setPersonalityType] = useState('Visionary Leader');

  useEffect(() => {
    // Calculate from user's responses
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsed = JSON.parse(userData);
      // Simulate scoring logic
      setResults({
        motivation: parsed.hoursPerWeek === '60+' ? 95 : 80,
        leadership: parsed.leadershipConfidence * 10 || 70,
        teamwork: parsed.teamworkRating * 10 || 75,
        riskTolerance: parsed.uncertaintyComfort * 10 || 65,
        resilience: parsed.stressHandling * 10 || 80,
        communication: 80,
        adaptability: parsed.adaptability === 'immediate' ? 95 : 70,
      });

      // Determine personality type
      if (parsed.leadershipConfidence >= 8 && parsed.uncertaintyComfort >= 7) {
        setPersonalityType('Visionary Leader');
      } else if (parsed.teamworkRating >= 8) {
        setPersonalityType('Systematic Builder');
      } else if (parsed.adaptability === 'immediate') {
        setPersonalityType('Creative Strategist');
      } else {
        setPersonalityType('Technical Expert');
      }
    }
  }, []);

  const traits = [
    { name: 'Motivation & Drive', score: results.motivation, color: 'blue', icon: '🔥' },
    { name: 'Leadership Ability', score: results.leadership, color: 'purple', icon: '👑' },
    { name: 'Teamwork', score: results.teamwork, color: 'green', icon: '🤝' },
    { name: 'Risk Tolerance', score: results.riskTolerance, color: 'orange', icon: '🎲' },
    { name: 'Resilience & Grit', score: results.resilience, color: 'red', icon: '💪' },
    { name: 'Communication', score: results.communication, color: 'teal', icon: '💬' },
    { name: 'Adaptability', score: results.adaptability, color: 'indigo', icon: '⚡' },
  ];

  const averageScore = Math.round(Object.values(results).reduce((a, b) => a + b, 0) / Object.values(results).length);

  const personalityProfiles = {
    'Visionary Leader': {
      description: 'Natural entrepreneur with big ideas and the drive to execute',
      strengths: ['Strategic thinking', 'Bold decision-making', 'Inspiring others'],
      idealCoFounder: 'Operations Manager or Technical Lead',
      color: 'from-blue-600 to-purple-600',
    },
    'Systematic Builder': {
      description: 'Excellent at execution and process optimization',
      strengths: ['Attention to detail', 'Process creation', 'Team collaboration'],
      idealCoFounder: 'Visionary Leader or Creative Strategist',
      color: 'from-green-600 to-teal-600',
    },
    'Creative Strategist': {
      description: 'Brings fresh perspectives and creative solutions',
      strengths: ['Innovation', 'Problem-solving', 'Communication'],
      idealCoFounder: 'Systematic Builder or Technical Expert',
      color: 'from-purple-600 to-pink-600',
    },
    'Technical Expert': {
      description: 'Deep domain knowledge with execution capability',
      strengths: ['Technical skills', 'Domain expertise', 'Analytical thinking'],
      idealCoFounder: 'Visionary Leader or Business Strategist',
      color: 'from-orange-600 to-red-600',
    },
  };

  const profile = personalityProfiles[personalityType as keyof typeof personalityProfiles];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold">Connect AI</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-block text-7xl mb-6 animate-bounce">🎉</div>
          <h1 className="text-5xl font-bold mb-4">Assessment Complete!</h1>
          <p className="text-xl text-gray-600">Here&apos;s your entrepreneurial DNA profile</p>
        </div>

        {/* Overall Score */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-white text-center mb-8 shadow-2xl">
          <div className="text-lg font-semibold mb-3">Your Overall Score</div>
          <div className="text-8xl font-black mb-4">{averageScore}</div>
          <div className="text-2xl font-semibold mb-6">
            {averageScore >= 85 ? '🔥 Exceptional Entrepreneur' :
             averageScore >= 70 ? '⭐ Strong Potential' :
             averageScore >= 55 ? '💪 Developing Skills' :
             '🌱 Growing Founder'}
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Your profile shows strong entrepreneurial traits. Our AI will use this to match you with complementary co-founders.
          </p>
        </div>

        {/* Personality Type */}
        <div className={`bg-gradient-to-br ${profile.color} rounded-3xl p-8 text-white mb-8 shadow-2xl`}>
          <h2 className="text-3xl font-bold mb-4">Your Entrepreneur Type: {personalityType}</h2>
          <p className="text-xl mb-6">{profile.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">💪 Your Strengths:</h3>
              <ul className="space-y-2">
                {profile.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-300">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">🤝 Ideal Co-Founder:</h3>
              <p className="text-lg bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                {profile.idealCoFounder}
              </p>
            </div>
          </div>
        </div>

        {/* Individual Traits */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-8">Your Behavioral Profile</h2>
          <div className="space-y-6">
            {traits.map((trait, idx) => (
              <div key={idx} className="animate-fadeIn" style={{animationDelay: `${idx * 100}ms`}}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{trait.icon}</span>
                    <span className="font-bold text-lg">{trait.name}</span>
                  </div>
                  <span className={`text-2xl font-black text-${trait.color}-600`}>{trait.score}/100</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-${trait.color}-500 to-${trait.color}-600 transition-all duration-1000 ease-out`}
                    style={{ width: `${trait.score}%` }}
                  />
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  {trait.score >= 80 ? '🔥 Exceptional' :
                   trait.score >= 65 ? '⭐ Strong' :
                   trait.score >= 50 ? '💪 Developing' :
                   '🌱 Growing'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border-2 border-purple-200 p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">🤖</span>
            AI Insights & Recommendations
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border-l-4 border-blue-500">
              <p className="text-gray-700">
                <span className="font-bold text-blue-600">Motivation:</span> Your high motivation score ({results.motivation}/100) indicates strong entrepreneurial drive. 
                You&apos;re likely to persist through challenges.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-green-500">
              <p className="text-gray-700">
                <span className="font-bold text-green-600">Teamwork:</span> Excellent collaboration skills ({results.teamwork}/100). 
                You&apos;ll work well in multi-disciplinary teams.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-orange-500">
              <p className="text-gray-700">
                <span className="font-bold text-orange-600">Risk Tolerance:</span> Your risk profile ({results.riskTolerance}/100) suggests 
                you make balanced decisions. Good for sustainable growth.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-purple-500">
              <p className="text-gray-700">
                <span className="font-bold text-purple-600">Best Match:</span> Based on your profile, you&apos;d work best with a 
                <span className="font-bold"> {profile.idealCoFounder}</span> who complements your strengths.
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🚀 What&apos;s Next?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Your behavioral profile is complete! Now you can:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-blue-50 rounded-2xl">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-bold text-lg mb-2">Start Academy</h3>
              <p className="text-sm text-gray-600">Begin your 12-week journey</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-2xl">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-lg mb-2">Find Co-Founders</h3>
              <p className="text-sm text-gray-600">AI will match you based on this profile</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-2xl">
              <div className="text-4xl mb-3">🛍️</div>
              <h3 className="font-bold text-lg mb-2">Explore Marketplace</h3>
              <p className="text-sm text-gray-600">Browse products from graduates</p>
            </div>
          </div>

          <Link
            href="/academy"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-bold hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Continue to Academy Dashboard →
          </Link>
        </div>
      </div>
    </div>
  );
}


