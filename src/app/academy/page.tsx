"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { academyModules } from "@/data/mockData";

export default function AcademyPage() {
  const [currentWeek, setCurrentWeek] = useState(2);
  const [userName, setUserName] = useState("");
  const [modules, setModules] = useState(academyModules);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsed = JSON.parse(userData);
      // Use setTimeout to avoid setState in effect warning
      setTimeout(() => setUserName(parsed.name || "Founder"), 0);
    }
  }, []);

  const getPhaseProgress = (phase: "THINK" | "BUILD" | "LAUNCH") => {
    const phaseModules = modules.filter((m) => m.phase === phase);
    const totalTasks = phaseModules.reduce((acc, m) => acc + m.tasks.length, 0);
    const completedTasks = phaseModules.reduce(
      (acc, m) => acc + m.tasks.filter((t) => t.completed).length,
      0
    );
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  const thinkProgress = getPhaseProgress("THINK");
  const buildProgress = getPhaseProgress("BUILD");
  const launchProgress = getPhaseProgress("LAUNCH");

  const overallProgress = Math.round(
    (thinkProgress + buildProgress + launchProgress) / 3
  );

  const toggleTask = (weekNum: number, taskId: string) => {
    setModules((prev) =>
      prev.map((module) =>
        module.week === weekNum
          ? {
              ...module,
              tasks: module.tasks.map((task) =>
                task.id === taskId
                  ? { ...task, completed: !task.completed }
                  : task
              ),
            }
          : module
      )
    );
  };

  const currentModule = modules.find((m) => m.week === currentWeek);

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
            <Link href="/academy" className="text-blue-600 font-semibold">
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
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, {userName}! 🚀
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              You&apos;re currently in Week {currentWeek} of the Founder Academy
            </p>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-white/20 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <span className="font-bold text-xl">{overallProgress}%</span>
            </div>
            <p className="text-blue-100 text-sm mt-2">
              Overall Academy Progress
            </p>
          </div>
        </div>

        {/* Three Phases Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Phase 1: THINK */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-3xl mb-2">💡</div>
                <h3 className="text-xl font-bold text-gray-900">
                  Phase 1: THINK
                </h3>
                <p className="text-sm text-gray-600">Weeks 1-4</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round(thinkProgress)}%
                </div>
                <div className="text-xs text-gray-500">Complete</div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden mb-4">
              <div
                className="bg-blue-500 h-full transition-all duration-500"
                style={{ width: `${thinkProgress}%` }}
              />
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Problem Discovery
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Market Research
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-400">○</span> Business Model
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-400">○</span> Solution Design
              </li>
            </ul>
          </div>

          {/* Phase 2: BUILD */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-purple-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-3xl mb-2">🔨</div>
                <h3 className="text-xl font-bold text-gray-900">
                  Phase 2: BUILD
                </h3>
                <p className="text-sm text-gray-600">Weeks 5-8</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600">
                  {Math.round(buildProgress)}%
                </div>
                <div className="text-xs text-gray-500">Complete</div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden mb-4">
              <div
                className="bg-purple-500 h-full transition-all duration-500"
                style={{ width: `${buildProgress}%` }}
              />
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-gray-400">○</span> MVP Planning
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-400">○</span> Development Sprint
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-400">○</span> User Testing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-400">○</span> MVP Completion
              </li>
            </ul>
          </div>

          {/* Phase 3: LAUNCH */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-green-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="text-xl font-bold text-gray-900">
                  Phase 3: LAUNCH
                </h3>
                <p className="text-sm text-gray-600">Weeks 9-12</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(launchProgress)}%
                </div>
                <div className="text-xs text-gray-500">Complete</div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden mb-4">
              <div
                className="bg-green-500 h-full transition-all duration-500"
                style={{ width: `${launchProgress}%` }}
              />
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-gray-400">○</span> GTM Strategy
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-400">○</span> Customer Acquisition
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-400">○</span> Pitch Deck
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-400">○</span> Demo Day
              </li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Week Navigator */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4">Program Timeline</h3>
              <div className="space-y-2">
                {modules.map((module) => {
                  const progress =
                    (module.tasks.filter((t) => t.completed).length /
                      module.tasks.length) *
                    100;
                  return (
                    <button
                      key={module.week}
                      onClick={() => setCurrentWeek(module.week)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        currentWeek === module.week
                          ? "bg-blue-50 border-2 border-blue-500"
                          : "hover:bg-gray-50 border-2 border-transparent"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-sm">
                          Week {module.week}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            module.phase === "THINK"
                              ? "bg-blue-100 text-blue-700"
                              : module.phase === "BUILD"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {module.phase}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                        {module.title}
                      </div>
                      <div className="bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-blue-500 h-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content - Current Week Details */}
          <div className="lg:col-span-2 space-y-6">
            {currentModule && (
              <>
                {/* Module Header */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            currentModule.phase === "THINK"
                              ? "bg-blue-100 text-blue-700"
                              : currentModule.phase === "BUILD"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          Week {currentModule.week} • {currentModule.phase}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold mb-2">
                        {currentModule.title}
                      </h2>
                      <p className="text-gray-600">
                        {currentModule.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">
                        {currentModule.tasks.filter((t) => t.completed).length}/
                        {currentModule.tasks.length}
                      </div>
                      <div className="text-sm text-gray-500">
                        Tasks Complete
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tasks Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>📋</span> This Week&apos;s Tasks
                  </h3>
                  <div className="space-y-3">
                    {currentModule.tasks.map((task) => (
                      <label
                        key={task.id}
                        className="flex items-center gap-4 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition-all group"
                      >
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() =>
                            toggleTask(currentModule.week, task.id)
                          }
                          className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span
                          className={`flex-1 ${
                            task.completed
                              ? "line-through text-gray-400"
                              : "text-gray-900"
                          }`}
                        >
                          {task.title}
                        </span>
                        {task.completed && (
                          <span className="text-green-500 font-semibold text-sm">
                            ✓ Done
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Resources Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span>📚</span> Learning Resources
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentModule.resources.map((resource, idx) => (
                      <a
                        key={idx}
                        href={resource.url}
                        className="flex items-center gap-4 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group"
                      >
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                            resource.type === "video"
                              ? "bg-red-100"
                              : resource.type === "pdf"
                              ? "bg-blue-100"
                              : "bg-green-100"
                          }`}
                        >
                          {resource.type === "video"
                            ? "🎥"
                            : resource.type === "pdf"
                            ? "📄"
                            : "📝"}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {resource.title}
                          </div>
                          <div className="text-sm text-gray-500 capitalize">
                            {resource.type}
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mentor Sessions */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200 p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>👥</span> Upcoming Mentor Sessions
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <div className="font-semibold">
                          Office Hours with Dr. Alemayehu
                        </div>
                        <div className="text-sm text-gray-600">
                          Business Model Canvas Review
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-blue-600">
                          Tomorrow, 2:00 PM
                        </div>
                        <button className="text-xs text-blue-600 hover:underline">
                          Join Meeting
                        </button>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <div className="font-semibold">
                          Workshop: Customer Interviews
                        </div>
                        <div className="text-sm text-gray-600">
                          Learn effective interview techniques
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-blue-600">
                          Friday, 10:00 AM
                        </div>
                        <button className="text-xs text-blue-600 hover:underline">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Message if Week Complete */}
                {currentModule.tasks.every((t) => t.completed) && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 flex items-center gap-4">
                    <div className="text-4xl">🎉</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-green-900 text-lg mb-1">
                        Week {currentModule.week} Complete!
                      </h4>
                      <p className="text-green-700">
                        Great progress! You&apos;ve completed all tasks for this
                        week. Ready to move to the next challenge?
                      </p>
                    </div>
                    {currentWeek < 12 && (
                      <button
                        onClick={() => setCurrentWeek(currentWeek + 1)}
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold whitespace-nowrap"
                      >
                        Next Week →
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Co-Founder Ready Badge */}
        {overallProgress >= 80 && (
          <div className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-3xl font-bold mb-2">
              You&apos;re Almost Co-Founder Ready!
            </h3>
            <p className="text-lg mb-6 text-yellow-50">
              Complete the remaining modules to unlock AI Matchmaking and find
              your perfect co-founders.
            </p>
            <Link
              href="/matchmaking"
              className="inline-block px-8 py-3 bg-white text-orange-600 rounded-full font-bold hover:shadow-xl transition-all"
            >
              Preview Matchmaking
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
