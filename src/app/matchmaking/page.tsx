"use client";

import { useState } from "react";
import Link from "next/link";
import {
  mockUsers,
  skills as allSkills,
  industries as allIndustries,
} from "@/data/mockData";
import Image from "next/image";

export default function MatchmakingPage() {
  const [filters, setFilters] = useState({
    skills: [] as string[],
    industries: [] as string[],
    role: "",
    commitment: "",
    search: "",
  });

  const [selectedUser, setSelectedUser] = useState<
    (typeof mockUsers)[0] | null
  >(null);

  // Calculate match scores (AI simulation)
  const calculateMatchScore = (user: (typeof mockUsers)[0]) => {
    let score = 60; // Base score

    // Skill complementarity
    const hasComplementarySkills = user.skills.some(
      (s) => filters.skills.length === 0 || !filters.skills.includes(s)
    );
    if (hasComplementarySkills) score += 15;

    // Industry alignment
    const hasSharedIndustry = user.interests.some(
      (i) => filters.industries.length === 0 || filters.industries.includes(i)
    );
    if (hasSharedIndustry) score += 15;

    // Co-founder ready status
    if (user.coFounderReady && user.academyProgress >= 80) score += 10;

    return Math.min(95, score);
  };

  // Filter users
  const filteredUsers = mockUsers.filter((user) => {
    if (
      filters.search &&
      !user.name.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;
    if (
      filters.skills.length > 0 &&
      !filters.skills.some((s) => user.skills.includes(s))
    )
      return false;
    if (
      filters.industries.length > 0 &&
      !filters.industries.some((i) => user.interests.includes(i))
    )
      return false;
    if (filters.role && user.role !== filters.role) return false;
    if (filters.commitment && user.commitmentLevel !== filters.commitment)
      return false;
    return true;
  });

  const usersWithScores = filteredUsers
    .map((user) => ({
      ...user,
      matchScore: calculateMatchScore(user),
    }))
    .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));

  const toggleFilter = (type: "skills" | "industries", value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

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
            <Link href="/matchmaking" className="text-blue-600 font-semibold">
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
            <Link
              href="/profile"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">
            Find Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
              Perfect Co-Founders
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            AI-powered matching based on skills, domain expertise, and
            behavioral fit
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600">
              {usersWithScores.length}
            </div>
            <div className="text-sm text-gray-600">Available Matches</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">
              {
                usersWithScores.filter((u) => u.matchScore && u.matchScore > 80)
                  .length
              }
            </div>
            <div className="text-sm text-gray-600">High Compatibility</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600">
              {usersWithScores.filter((u) => u.coFounderReady).length}
            </div>
            <div className="text-sm text-gray-600">Co-Founder Ready</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-orange-600">5</div>
            <div className="text-sm text-gray-600">Pending Requests</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 space-y-6">
              <h3 className="text-lg font-bold">Filters</h3>

              {/* Search */}
              <div>
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Skills Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Skills
                </label>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allSkills.slice(0, 8).map((skill) => (
                    <label
                      key={skill}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={filters.skills.includes(skill)}
                        onChange={() => toggleFilter("skills", skill)}
                        className="rounded border-gray-300 text-blue-600"
                      />
                      <span className="text-sm">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Industries Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industries
                </label>
                <div className="space-y-2">
                  {allIndustries.slice(0, 6).map((industry) => (
                    <label
                      key={industry}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={filters.industries.includes(industry)}
                        onChange={() => toggleFilter("industries", industry)}
                        className="rounded border-gray-300 text-blue-600"
                      />
                      <span className="text-sm">{industry}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Role Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Role
                </label>
                <select
                  value={filters.role}
                  onChange={(e) =>
                    setFilters({ ...filters, role: e.target.value })
                  }
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                >
                  <option value="">All Roles</option>
                  <option value="Technical">Technical</option>
                  <option value="Business">Business</option>
                  <option value="Design">Design</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              {/* Commitment Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Commitment
                </label>
                <select
                  value={filters.commitment}
                  onChange={(e) =>
                    setFilters({ ...filters, commitment: e.target.value })
                  }
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                >
                  <option value="">All Levels</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <button
                onClick={() =>
                  setFilters({
                    skills: [],
                    industries: [],
                    role: "",
                    commitment: "",
                    search: "",
                  })
                }
                className="w-full px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Matches Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {usersWithScores.length} Matches Found
              </h2>
              <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                <option>Sort by: Best Match</option>
                <option>Sort by: Academy Progress</option>
                <option>Sort by: Recent</option>
              </select>
            </div>

            <div className="space-y-4">
              {usersWithScores.map((user) => (
                <div
                  key={user.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6"
                >
                  <div className="flex gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          width={96}
                          height={96}
                          className="rounded-xl"
                        />
                        {user.coFounderReady && (
                          <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                            ✓ Ready
                          </div>
                        )}
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold">{user.name}</h3>
                          <p className="text-gray-600">
                            {user.discipline} • {user.university}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <div
                              className={`text-3xl font-bold ${
                                user.matchScore && user.matchScore >= 85
                                  ? "text-green-600"
                                  : user.matchScore && user.matchScore >= 70
                                  ? "text-blue-600"
                                  : "text-orange-600"
                              }`}
                            >
                              {user.matchScore}%
                            </div>
                            <div className="text-sm text-gray-500">Match</div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{user.bio}</p>

                      {/* Skills */}
                      <div className="mb-3">
                        <div className="text-sm font-semibold text-gray-700 mb-2">
                          Skills
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {user.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Interests */}
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-gray-700 mb-2">
                          Interests
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {user.interests.map((interest) => (
                            <span
                              key={interest}
                              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Match Insights */}
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                        <div className="text-sm font-semibold text-purple-900 mb-1">
                          🤖 AI Match Insights
                        </div>
                        <p className="text-sm text-purple-700">
                          {user.matchScore && user.matchScore >= 85
                            ? `Excellent match! Complementary ${user.role.toLowerCase()} skills and shared passion for ${
                                user.interests[0]
                              }.`
                            : user.matchScore && user.matchScore >= 70
                            ? `Strong match with overlapping interests in ${
                                user.interests[0]
                              } and ${user.interests[1] || "startups"}.`
                            : `Good potential. Different skill sets could complement your expertise.`}
                        </p>
                      </div>

                      {/* Meta Info & Actions */}
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <span className="font-semibold">{user.role}</span>{" "}
                            Role
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="font-semibold">
                              {user.commitmentLevel}
                            </span>
                          </span>
                          <span className="flex items-center gap-1">
                            📍 {user.location}
                          </span>
                          <span className="flex items-center gap-1">
                            📊 {user.academyProgress}% Academy
                          </span>
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => setSelectedUser(user)}
                            className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                          >
                            View Profile
                          </button>
                          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold">
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {usersWithScores.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No matches found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters to see more co-founders
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      skills: [],
                      industries: [],
                      role: "",
                      commitment: "",
                      search: "",
                    })
                  }
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {selectedUser && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4 items-start">
                <Image
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
                <div>
                  <h2 className="text-3xl font-bold mb-1">
                    {selectedUser.name}
                  </h2>
                  <p className="text-gray-600">{selectedUser.discipline}</p>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Bio</h3>
                <p className="text-gray-700">{selectedUser.bio}</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedUser.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedUser.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Role</h3>
                  <p className="text-gray-700">{selectedUser.role}</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Commitment</h3>
                  <p className="text-gray-700">
                    {selectedUser.commitmentLevel}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-gray-700">{selectedUser.location}</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Academy Progress</h3>
                  <p className="text-gray-700">
                    {selectedUser.academyProgress}%
                  </p>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg">
                Send Connection Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
