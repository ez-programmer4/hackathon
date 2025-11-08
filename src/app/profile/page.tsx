"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    name: "Abebe Kebede",
    email: "abebe.k@jimma.edu.et",
    age: "23",
    university: "Jimma University",
    discipline: "Computer Science",
    skills: ["React.js", "Python", "UI/UX Design"],
    interests: ["Agri-tech", "Supply Chain"],
    role: "Technical",
    commitment: "Full-time",
    academyProgress: 60,
    coFounderReady: false,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abebe",
  });

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Use setTimeout to avoid setState in effect warning
      setTimeout(() => setUserData((prev) => ({ ...prev, ...parsed })), 0);
    }
  }, []);

  const connections = [
    { name: "Hanna Solomon", role: "Business", status: "Connected" },
    { name: "Dawit Tesfaye", role: "Healthcare", status: "Pending" },
    { name: "Sara Mohammed", role: "Business", status: "Connected" },
  ];

  const achievements = [
    { icon: "🎓", title: "Academy Enrolled", date: "Oct 2025" },
    { icon: "💡", title: "First Idea Validated", date: "Nov 2025" },
    { icon: "🔨", title: "MVP in Progress", date: "Nov 2025" },
    { icon: "🤝", title: "3 Connections Made", date: "Nov 2025" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
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
            <Link
              href="/academy"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Academy
            </Link>
            <Link
              href="/matchmaking"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Find Co-Founders
            </Link>
            <Link
              href="/marketplace"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              🛍️ Marketplace
            </Link>
            <Link
              href="/sell"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Sell
            </Link>
            <Link href="/profile" className="text-blue-600 font-semibold">
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1 space-y-6">
            {/* Main Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="relative inline-block mb-4">
                <Image
                  src={userData.avatar}
                  alt={userData.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto"
                />
                {userData.coFounderReady && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                    ✓ Ready
                  </div>
                )}
              </div>

              <h1 className="text-2xl font-bold mb-1">{userData.name}</h1>
              <p className="text-gray-600 mb-4">{userData.discipline}</p>
              <p className="text-sm text-gray-500 mb-6">{userData.email}</p>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">University</span>
                  <span className="font-semibold">{userData.university}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Age</span>
                  <span className="font-semibold">{userData.age}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Role</span>
                  <span className="font-semibold">{userData.role}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Commitment</span>
                  <span className="font-semibold">{userData.commitment}</span>
                </div>
              </div>

              <Link
                href="/register"
                className="block w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
              >
                Edit Profile
              </Link>
            </div>

            {/* Academy Progress Card */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Academy Progress</h3>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Completion</span>
                  <span className="font-bold">{userData.academyProgress}%</span>
                </div>
                <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-white h-full transition-all duration-500"
                    style={{ width: `${userData.academyProgress}%` }}
                  />
                </div>
              </div>
              <p className="text-blue-100 text-sm mt-4">
                {userData.academyProgress >= 80
                  ? "🎉 Almost there! Complete remaining modules to unlock full matchmaking."
                  : `Keep going! ${
                      100 - userData.academyProgress
                    }% remaining to become Co-Founder Ready.`}
              </p>
              <Link
                href="/academy"
                className="block w-full mt-4 px-6 py-3 bg-white text-blue-600 rounded-lg hover:shadow-lg transition-all font-semibold text-center"
              >
                Continue Learning
              </Link>
            </div>

            {/* Status Badge */}
            <div
              className={`rounded-2xl shadow-lg p-6 ${
                userData.coFounderReady
                  ? "bg-green-50 border-2 border-green-200"
                  : "bg-orange-50 border-2 border-orange-200"
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">
                  {userData.coFounderReady ? "🏆" : "⏳"}
                </div>
                <h3
                  className={`font-bold text-lg mb-2 ${
                    userData.coFounderReady
                      ? "text-green-900"
                      : "text-orange-900"
                  }`}
                >
                  {userData.coFounderReady
                    ? "Co-Founder Ready!"
                    : "In Progress"}
                </h3>
                <p
                  className={`text-sm ${
                    userData.coFounderReady
                      ? "text-green-700"
                      : "text-orange-700"
                  }`}
                >
                  {userData.coFounderReady
                    ? "You have full access to AI Matchmaking"
                    : "Complete Academy to unlock full features"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>🛠️</span> Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-3">
                {userData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold text-sm border-2 border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button className="mt-6 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                + Add More Skills
              </button>
            </div>

            {/* Interests Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>🎯</span> Target Industries
              </h2>
              <div className="flex flex-wrap gap-3">
                {userData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold text-sm border-2 border-green-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
              <button className="mt-6 text-green-600 hover:text-green-700 font-semibold text-sm">
                + Add More Interests
              </button>
            </div>

            {/* Connections Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <span>🤝</span> Connections
                </h2>
                <Link
                  href="/matchmaking"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Find More →
                </Link>
              </div>
              <div className="space-y-3">
                {connections.map((connection, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold">
                        {connection.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold">{connection.name}</div>
                        <div className="text-sm text-gray-600">
                          {connection.role}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        connection.status === "Connected"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {connection.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>🏅</span> Achievements
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      {achievement.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>📊</span> Recent Activity
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1 pb-4">
                    <div className="font-semibold text-gray-900">
                      Completed Week 2 Tasks
                    </div>
                    <div className="text-sm text-gray-600">
                      Market Research & Competition Analysis
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      2 hours ago
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1 pb-4">
                    <div className="font-semibold text-gray-900">
                      Connected with Hanna Solomon
                    </div>
                    <div className="text-sm text-gray-600">
                      Agricultural expert from Business Admin
                    </div>
                    <div className="text-xs text-gray-400 mt-1">1 day ago</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 bg-purple-500 rounded-full"></div>
                  <div className="flex-1 pb-4">
                    <div className="font-semibold text-gray-900">
                      Joined Founder Academy
                    </div>
                    <div className="text-sm text-gray-600">
                      Started the 12-week journey
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      2 weeks ago
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200 p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>📈</span> Your Impact
              </h2>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Tasks Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-gray-600 mt-1">Connections</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">89</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Match Score Avg.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
