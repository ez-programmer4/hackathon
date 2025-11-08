"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { disciplines, skills, industries } from "@/data/mockData";

type FormData = {
  // Step 1: Personal Info
  name: string;
  email: string;
  age: string;
  phone: string;

  // Step 2: Academic
  university: string;
  discipline: string;
  year: string;
  gpa: string;

  // Step 3: Skills
  skills: string[];
  experience: string;
  projects: string;

  // Step 4: Interests
  interests: string[];
  role: string;
  commitment: string;

  // Step 5: Behavioral (Extended)
  motivation: string;
  hoursPerWeek: string;
  leadershipRole: string;
  decisionStyle: string;
  leadershipConfidence: number;
  conflictResolution: string;
  communicationPreference: string;
  feedbackStyle: string;
  teamworkRating: number;
  investmentWillingness: string;
  uncertaintyComfort: number;
  failureResponse: string;
  challenge: string;
  setbackHandling: string;
  stressHandling: number;
  workStyle: string;
  adaptability: string;
  paymentMethod: string;
  paymentReference: string;
  paymentConfirmed: boolean;
  paymentStatus: "pending" | "paid";
};

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: "",
    phone: "",
    university: "Jimma University",
    discipline: "",
    year: "",
    gpa: "",
    skills: [],
    experience: "",
    projects: "",
    interests: [],
    role: "",
    commitment: "",
    motivation: "",
    hoursPerWeek: "",
    leadershipRole: "",
    decisionStyle: "",
    leadershipConfidence: 5,
    conflictResolution: "",
    communicationPreference: "",
    feedbackStyle: "",
    teamworkRating: 5,
    investmentWillingness: "",
    uncertaintyComfort: 5,
    failureResponse: "",
    challenge: "",
    setbackHandling: "",
    stressHandling: 5,
    workStyle: "",
    adaptability: "",
    paymentMethod: "",
    paymentReference: "",
    paymentConfirmed: false,
    paymentStatus: "pending",
  });

  const totalSteps = 7; // Increased to 7 (includes payment step)
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step === totalSteps) {
      if (!formData.paymentMethod) {
        alert("Please select a payment method to continue.");
        return;
      }
      if (!formData.paymentReference.trim()) {
        alert("Please enter your payment reference/transaction ID.");
        return;
      }
      if (!formData.paymentConfirmed) {
        alert("Please confirm you have completed the $4 / 600 ETB payment.");
        return;
      }

      const completedForm = {
        ...formData,
        paymentStatus: "paid" as const,
      };

      setFormData(completedForm);
      localStorage.setItem("userData", JSON.stringify(completedForm));
      router.push("/assessment-results");
      return;
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Join Connect AI</h1>
          <p className="text-gray-600">
            Complete your profile to access the Founder Academy
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm font-semibold text-gray-700">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="grid grid-cols-7 gap-2 mt-4 text-xs text-gray-500">
            <span
              className={`text-center ${
                step >= 1 ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Personal
            </span>
            <span
              className={`text-center ${
                step >= 2 ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Academic
            </span>
            <span
              className={`text-center ${
                step >= 3 ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Skills
            </span>
            <span
              className={`text-center ${
                step >= 4 ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Interests
            </span>
            <span
              className={`text-center ${
                step >= 5 ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Behavioral 1
            </span>
            <span
              className={`text-center ${
                step >= 6 ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Behavioral 2
            </span>
            <span
              className={`text-center ${
                step >= 7 ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Payment
            </span>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your.email@jimma.edu.et"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="22"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="+251 xxx xxx xxx"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Academic Background */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6">Academic Background</h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  University *
                </label>
                <select
                  value={formData.university}
                  onChange={(e) =>
                    setFormData({ ...formData, university: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option>Jimma University</option>
                  <option>Addis Ababa University</option>
                  <option>Hawassa University</option>
                  <option>Bahir Dar University</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Discipline / Field of Study *
                </label>
                <select
                  value={formData.discipline}
                  onChange={(e) =>
                    setFormData({ ...formData, discipline: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select your discipline</option>
                  {disciplines.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Year *
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select year</option>
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="4">Year 4</option>
                    <option value="5">Year 5+</option>
                    <option value="graduate">Graduate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    GPA (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.gpa}
                    onChange={(e) =>
                      setFormData({ ...formData, gpa: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="3.5"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Skills */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6">Skills & Experience</h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select Your Skills *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`px-4 py-3 rounded-lg border-2 transition-all text-left ${
                        formData.skills.includes(skill)
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {formData.skills.length} skills selected
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Previous Projects (optional)
                </label>
                <textarea
                  value={formData.projects}
                  onChange={(e) =>
                    setFormData({ ...formData, projects: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  rows={3}
                  placeholder="Briefly describe any relevant projects you've worked on..."
                />
              </div>
            </div>
          )}

          {/* Step 4: Interests */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6">Interests & Goals</h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Target Industries *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      type="button"
                      onClick={() => toggleInterest(industry)}
                      className={`px-4 py-3 rounded-lg border-2 transition-all text-left ${
                        formData.interests.includes(industry)
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {formData.interests.length} industries selected
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Startup Role *
                </label>
                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select your preferred role</option>
                  <option value="technical">Technical (CTO, Developer)</option>
                  <option value="business">Business (CEO, COO)</option>
                  <option value="design">Design (CPO, Designer)</option>
                  <option value="hybrid">Hybrid (Multi-functional)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Commitment Level *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Full-time", "Part-time", "Flexible"].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, commitment: level })
                      }
                      className={`px-4 py-3 rounded-lg border-2 transition-all ${
                        formData.commitment === level
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Behavioral Assessment - Part 1 (Motivation & Leadership) */}
          {step === 5 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <span className="text-4xl">🧠</span>
                  Behavioral Assessment - Part 1
                </h2>
                <p className="text-gray-600">
                  Help us understand your entrepreneurial DNA. This helps our AI
                  find perfect co-founders.
                </p>
              </div>

              {/* Motivation */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center gap-2">
                  🔥 Motivation & Drive
                </h3>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    What motivates you to start a company? * (Select all that
                    apply)
                  </label>
                  <div className="space-y-2">
                    {[
                      "Solve a problem I experienced",
                      "Financial independence",
                      "Social impact",
                      "Build something innovative",
                      "Professional recognition",
                      "Create jobs",
                    ].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-3 p-3 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-all"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Hours per week you can dedicate to your startup? *
                  </label>
                  <select
                    value={formData.hoursPerWeek}
                    onChange={(e) =>
                      setFormData({ ...formData, hoursPerWeek: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select commitment level</option>
                    <option value="<10">
                      Less than 10 hours (side project)
                    </option>
                    <option value="10-20">10-20 hours (part-time)</option>
                    <option value="20-40">
                      20-40 hours (serious commitment)
                    </option>
                    <option value="40+">40+ hours (full-time)</option>
                    <option value="60+">60+ hours (all-in founder mode)</option>
                  </select>
                </div>
              </div>

              {/* Leadership */}
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-900 flex items-center gap-2">
                  👑 Leadership Style
                </h3>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    In group projects, what role do you typically take? *
                  </label>
                  <select
                    value={formData.leadershipRole}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        leadershipRole: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-lg focus:border-purple-500 focus:outline-none"
                  >
                    <option value="">Select your typical role</option>
                    <option value="leader">
                      I naturally take charge and lead the team
                    </option>
                    <option value="collaborative">
                      I contribute ideas but prefer collaborative leadership
                    </option>
                    <option value="executor">
                      I excel at executing tasks others plan
                    </option>
                    <option value="strategist">
                      I provide creative input and strategic thinking
                    </option>
                    <option value="adaptive">
                      I adapt to whatever role is needed
                    </option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    When making important decisions, I tend to:
                  </label>
                  <select
                    value={formData.decisionStyle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        decisionStyle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-lg focus:border-purple-500 focus:outline-none"
                  >
                    <option value="">Select decision style</option>
                    <option value="quick">
                      Make quick decisions based on intuition
                    </option>
                    <option value="analytical">
                      Analyze data thoroughly before deciding
                    </option>
                    <option value="collaborative">
                      Seek input from others before deciding
                    </option>
                    <option value="experimental">
                      Test multiple options before committing
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Rate your confidence in leading a team (1-10) *
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Low</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.leadershipConfidence}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          leadershipConfidence: parseInt(e.target.value),
                        })
                      }
                      className="flex-1 h-3 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm text-gray-600">High</span>
                    <div className="w-16 text-center">
                      <span className="text-2xl font-bold text-purple-600">
                        {formData.leadershipConfidence}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Behavioral Assessment - Part 2 (Teamwork, Risk, Resilience) */}
          {step === 6 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border-2 border-green-200">
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <span className="text-4xl">💎</span>
                  Behavioral Assessment - Part 2
                </h2>
                <p className="text-gray-600">
                  Final questions to complete your entrepreneurial profile
                </p>
              </div>

              {/* Teamwork */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
                  🤝 Teamwork & Collaboration
                </h3>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    How do you handle disagreements with team members? *
                  </label>
                  <select
                    value={formData.conflictResolution}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        conflictResolution: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-lg focus:border-green-500 focus:outline-none"
                  >
                    <option value="">Select approach</option>
                    <option value="direct">
                      State my position clearly and stand firm
                    </option>
                    <option value="compromise">
                      Seek compromise that satisfies everyone
                    </option>
                    <option value="defer">
                      Defer to whoever has more expertise
                    </option>
                    <option value="data">
                      Present data and let facts decide
                    </option>
                    <option value="harmony">
                      Focus on maintaining team harmony
                    </option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Preferred communication frequency with co-founders:
                  </label>
                  <select
                    value={formData.communicationPreference}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        communicationPreference: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-lg focus:border-green-500 focus:outline-none"
                  >
                    <option value="">Select preference</option>
                    <option value="daily">
                      Daily communication and close collaboration
                    </option>
                    <option value="regular">
                      Regular check-ins but independent work
                    </option>
                    <option value="async">
                      Async communication with clear deliverables
                    </option>
                    <option value="flexible">
                      Flexible based on project phase
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Rate your ability to give constructive feedback (1-10)
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Struggle</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.teamworkRating}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          teamworkRating: parseInt(e.target.value),
                        })
                      }
                      className="flex-1 h-3 bg-green-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm text-gray-600">Excel</span>
                    <div className="w-16 text-center">
                      <span className="text-2xl font-bold text-green-600">
                        {formData.teamworkRating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk & Resilience */}
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-900 flex items-center gap-2">
                  🎲 Risk Tolerance & Resilience
                </h3>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Would you invest your savings into your startup idea? *
                  </label>
                  <select
                    value={formData.investmentWillingness}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        investmentWillingness: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-lg focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Select option</option>
                    <option value="all">
                      Yes, all of it - go big or go home
                    </option>
                    <option value="most">
                      Yes, significant portion (50%+)
                    </option>
                    <option value="some">Maybe 25-50% after validation</option>
                    <option value="little">
                      Only small amount (less than 25%)
                    </option>
                    <option value="none">
                      No, I would bootstrap with no personal investment
                    </option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    How comfortable are you with uncertainty? (1-10)
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      Need certainty
                    </span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.uncertaintyComfort}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          uncertaintyComfort: parseInt(e.target.value),
                        })
                      }
                      className="flex-1 h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm text-gray-600">Thrive in it</span>
                    <div className="w-16 text-center">
                      <span className="text-2xl font-bold text-orange-600">
                        {formData.uncertaintyComfort}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    If your first product fails, you would:
                  </label>
                  <select
                    value={formData.failureResponse}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        failureResponse: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-lg focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Select response</option>
                    <option value="pivot">
                      Immediately pivot and try a new approach
                    </option>
                    <option value="analyze">
                      Analyze what went wrong and iterate
                    </option>
                    <option value="break">Take a break to reassess</option>
                    <option value="mentor">
                      Seek mentorship before continuing
                    </option>
                    <option value="learn">
                      Consider it a learning experience
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Describe a significant challenge you overcame *
                  </label>
                  <textarea
                    value={formData.challenge}
                    onChange={(e) =>
                      setFormData({ ...formData, challenge: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-lg focus:border-orange-500 focus:outline-none"
                    rows={3}
                    placeholder="Share a specific challenge and how you overcame it..."
                  />
                </div>
              </div>

              {/* Stress & Resilience */}
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-red-900 flex items-center gap-2">
                  💪 Stress Management & Resilience
                </h3>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    When facing a major setback, I typically:
                  </label>
                  <select
                    value={formData.setbackHandling}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        setbackHandling: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-lg focus:border-red-500 focus:outline-none"
                  >
                    <option value="">Select approach</option>
                    <option value="motivated">
                      Feel motivated to prove myself
                    </option>
                    <option value="process">
                      Take time to process, then come back stronger
                    </option>
                    <option value="support">Seek support from others</option>
                    <option value="systematic">
                      Re-evaluate my approach systematically
                    </option>
                    <option value="learning">
                      View it as a learning opportunity
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Rate your ability to handle stress and pressure (1-10)
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Overwhelmed</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.stressHandling}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          stressHandling: parseInt(e.target.value),
                        })
                      }
                      className="flex-1 h-3 bg-red-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm text-gray-600">Thrive</span>
                    <div className="w-16 text-center">
                      <span className="text-2xl font-bold text-red-600">
                        {formData.stressHandling}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Style */}
              <div className="bg-teal-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-teal-900 flex items-center gap-2">
                  ⚡ Work Style & Adaptability
                </h3>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Your preferred work style:
                  </label>
                  <select
                    value={formData.workStyle}
                    onChange={(e) =>
                      setFormData({ ...formData, workStyle: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-lg focus:border-teal-500 focus:outline-none"
                  >
                    <option value="">Select work style</option>
                    <option value="structured">
                      Structured schedule with clear deadlines
                    </option>
                    <option value="flexible">
                      Flexible hours with outcome focus
                    </option>
                    <option value="sprints">
                      Intense sprints followed by breaks
                    </option>
                    <option value="steady">Steady consistent pace</option>
                    <option value="adaptive">
                      Adaptive based on project needs
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Your startup needs to pivot immediately. How quickly do you
                    adapt?
                  </label>
                  <select
                    value={formData.adaptability}
                    onChange={(e) =>
                      setFormData({ ...formData, adaptability: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-lg focus:border-teal-500 focus:outline-none"
                  >
                    <option value="">Select adaptation speed</option>
                    <option value="immediate">
                      Immediately - I embrace change
                    </option>
                    <option value="quick">Within a week after analysis</option>
                    <option value="cautious">
                      Cautiously - need strong evidence
                    </option>
                    <option value="reluctant">
                      Only if absolutely necessary
                    </option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 7: Payment */}
          {step === 7 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 rounded-2xl p-6 border-2 border-yellow-200">
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <span className="text-4xl">💳</span>
                  Secure Your Spot – $4 / 600 ETB
                </h2>
                <p className="text-gray-600">
                  One-time payment for lifetime access to the Connect AI ecosystem. Choose your preferred payment method below.
                </p>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Select Payment Method *
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { label: "Telebirr", value: "telebirr", icon: "📱" },
                    { label: "CBE Birr", value: "cbebirr", icon: "🏦" },
                    { label: "M-Pesa", value: "mpesa", icon: "💸" },
                    { label: "Bank Transfer", value: "bank", icon: "🏛️" },
                  ].map((method) => (
                    <button
                      key={method.value}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, paymentMethod: method.value })
                      }
                      className={`relative px-6 py-5 rounded-2xl border-2 transition-all text-left shadow-sm hover:shadow-lg flex items-start gap-4 ${
                        formData.paymentMethod === method.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="text-2xl">{method.icon}</div>
                      <div>
                        <div className="font-bold text-gray-800">{method.label}</div>
                        <div className="text-xs text-gray-500">
                          {method.value === "telebirr" && "* Dial *127# → Pay Merchant"}
                          {method.value === "cbebirr" && "* Dial *847# → Pay Merchant"}
                          {method.value === "mpesa" && "* Open M-Pesa app → Pay Bill"}
                          {method.value === "bank" && "* Transfer to Connect AI Innovation Account"}
                        </div>
                      </div>
                      {formData.paymentMethod === method.value && (
                        <span className="absolute top-2 right-2 text-blue-600 font-bold">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Instructions */}
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📌</span> Payment Instructions
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>1. Send <strong>$4 USD / 600 ETB</strong> using your selected method</li>
                  <li>
                    2. Use Merchant Name: <strong>Connect AI Innovation Hub</strong>
                  </li>
                  <li>
                    3. For bank transfer: Account Number <strong>1234567890</strong> (Commercial Bank of Ethiopia)
                  </li>
                  <li>4. Save the transaction ID / reference number</li>
                </ul>
              </div>

              {/* Payment Reference */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Payment Reference / Transaction ID *
                </label>
                <input
                  type="text"
                  value={formData.paymentReference}
                  onChange={(e) =>
                    setFormData({ ...formData, paymentReference: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="e.g. 9GHT-123456 or Telebirr receipt number"
                />
              </div>

              <label className="flex items-start gap-3 bg-white border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 transition-all">
                <input
                  type="checkbox"
                  checked={formData.paymentConfirmed}
                  onChange={(e) =>
                    setFormData({ ...formData, paymentConfirmed: e.target.checked })
                  }
                  className="mt-1 w-4 h-4"
                />
                <span className="text-sm text-gray-700">
                  I confirm that I have paid <strong>$4 USD / 600 ETB</strong> to Connect AI and the transaction ID above is correct.
                </span>
              </label>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-sm text-blue-900">
                💡 Once confirmed, you will unlock full access to the Founder Academy, AI matchmaking, and marketplace.
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              {step === totalSteps ? "Complete Registration" : "Continue"}
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <div className="flex gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="font-bold text-blue-900 mb-1">
                Why we ask these questions
              </h3>
              <p className="text-blue-700 text-sm">
                Your detailed profile helps our AI find the perfect co-founders
                who complement your skills, share your passion, and match your
                commitment level. The more accurate your answers, the better
                your matches!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
