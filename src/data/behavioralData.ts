// Behavioral Assessment Data

export interface BehavioralQuestion {
  id: string;
  category: 'motivation' | 'leadership' | 'teamwork' | 'risk' | 'resilience' | 'communication' | 'decision';
  question: string;
  type: 'text' | 'scale' | 'multiple' | 'single';
  options?: string[];
  scaleLabels?: { min: string; max: string };
}

export const behavioralQuestions: BehavioralQuestion[] = [
  // Motivation
  {
    id: 'mot1',
    category: 'motivation',
    question: 'What is your primary motivation for starting a company?',
    type: 'multiple',
    options: [
      'Solve a problem I personally experienced',
      'Create financial independence',
      'Make a positive social impact',
      'Build something innovative',
      'Gain professional recognition',
      'Create jobs for others',
    ],
  },
  {
    id: 'mot2',
    category: 'motivation',
    question: 'How many hours per week are you willing to dedicate to your startup?',
    type: 'single',
    options: [
      'Less than 10 hours (side project)',
      '10-20 hours (part-time)',
      '20-40 hours (serious commitment)',
      '40+ hours (full-time)',
      '60+ hours (all-in)',
    ],
  },

  // Leadership
  {
    id: 'lead1',
    category: 'leadership',
    question: 'In group projects, what role do you typically take?',
    type: 'single',
    options: [
      'I naturally take charge and lead the team',
      'I contribute ideas but prefer collaborative leadership',
      'I excel at executing tasks others plan',
      'I provide creative input and strategic thinking',
      'I adapt to whatever role is needed',
    ],
  },
  {
    id: 'lead2',
    category: 'leadership',
    question: 'When making important decisions, I tend to:',
    type: 'single',
    options: [
      'Make quick decisions based on intuition',
      'Analyze data thoroughly before deciding',
      'Seek input from others before deciding',
      'Test multiple options before committing',
      'Delay until the best option is clear',
    ],
  },
  {
    id: 'lead3',
    category: 'leadership',
    question: 'Rate your confidence in leading a team (1-10)',
    type: 'scale',
    scaleLabels: { min: 'Not confident at all', max: 'Extremely confident' },
  },

  // Teamwork
  {
    id: 'team1',
    category: 'teamwork',
    question: 'How do you handle disagreements with team members?',
    type: 'single',
    options: [
      'I state my position clearly and stand firm',
      'I seek compromise that satisfies everyone',
      'I defer to whoever has more expertise',
      'I present data and let facts decide',
      'I focus on maintaining team harmony',
    ],
  },
  {
    id: 'team2',
    category: 'teamwork',
    question: 'In your ideal co-founder relationship, you prefer:',
    type: 'single',
    options: [
      'Daily communication and close collaboration',
      'Regular check-ins but independent work',
      'Async communication with clear deliverables',
      'Flexible based on project phase',
    ],
  },
  {
    id: 'team3',
    category: 'teamwork',
    question: 'Rate your ability to give constructive feedback (1-10)',
    type: 'scale',
    scaleLabels: { min: 'Struggle with it', max: 'Excel at it' },
  },

  // Risk Tolerance
  {
    id: 'risk1',
    category: 'risk',
    question: 'Would you invest your savings into your startup idea?',
    type: 'single',
    options: [
      'Yes, all of it - go big or go home',
      'Yes, a significant portion (50%+)',
      'Maybe 25-50% after validation',
      'Only a small amount (less than 25%)',
      'No, I would bootstrap with no personal investment',
    ],
  },
  {
    id: 'risk2',
    category: 'risk',
    question: 'How comfortable are you with uncertainty?',
    type: 'scale',
    scaleLabels: { min: 'Need clear plans and certainty', max: 'Thrive in ambiguity' },
  },
  {
    id: 'risk3',
    category: 'risk',
    question: 'If your first product fails, you would:',
    type: 'single',
    options: [
      'Immediately pivot and try a new approach',
      'Analyze what went wrong and iterate',
      'Take a break to reassess',
      'Seek mentorship before continuing',
      'Consider it a learning experience and move on',
    ],
  },

  // Resilience
  {
    id: 'res1',
    category: 'resilience',
    question: 'Describe a significant challenge you overcame and what you learned',
    type: 'text',
  },
  {
    id: 'res2',
    category: 'resilience',
    question: 'When facing a major setback, I typically:',
    type: 'single',
    options: [
      'Feel motivated to prove myself',
      'Take time to process, then come back stronger',
      'Seek support from others',
      'Re-evaluate my approach systematically',
      'View it as a learning opportunity',
    ],
  },
  {
    id: 'res3',
    category: 'resilience',
    question: 'Rate your ability to handle stress and pressure (1-10)',
    type: 'scale',
    scaleLabels: { min: 'Easily overwhelmed', max: 'Thrive under pressure' },
  },

  // Communication
  {
    id: 'comm1',
    category: 'communication',
    question: 'What is your preferred communication style?',
    type: 'single',
    options: [
      'Direct and to-the-point',
      'Detailed and thorough',
      'Collaborative and discussion-based',
      'Visual and example-driven',
      'Empathetic and relationship-focused',
    ],
  },
  {
    id: 'comm2',
    category: 'communication',
    question: 'How do you prefer to receive feedback?',
    type: 'single',
    options: [
      'Direct and immediate',
      'Structured with specific examples',
      'In private, one-on-one',
      'In team settings with open discussion',
      'Written with time to reflect',
    ],
  },

  // Decision Making
  {
    id: 'dec1',
    category: 'decision',
    question: 'When making strategic decisions, I prioritize:',
    type: 'multiple',
    options: [
      'Data and analytics',
      'Customer feedback',
      'Market trends',
      'Team input',
      'Gut feeling and experience',
      'Financial impact',
    ],
  },
  {
    id: 'dec2',
    category: 'decision',
    question: 'Your startup needs to pivot. How quickly do you adapt?',
    type: 'single',
    options: [
      'Immediately - I embrace change',
      'Within a week after analysis',
      'Cautiously - need strong evidence',
      'Only if absolutely necessary',
    ],
  },
];

export interface BehavioralProfile {
  motivation: number; // 0-100
  leadership: number;
  teamwork: number;
  riskTolerance: number;
  resilience: number;
  communication: number;
  decisionMaking: number;
  overallScore: number;
}

export const behavioralTraits = [
  {
    name: 'Motivation & Drive',
    description: 'Your passion and commitment to entrepreneurship',
    color: 'blue',
    icon: '🔥',
  },
  {
    name: 'Leadership Ability',
    description: 'How you guide and inspire others',
    color: 'purple',
    icon: '👑',
  },
  {
    name: 'Teamwork & Collaboration',
    description: 'Your ability to work effectively with others',
    color: 'green',
    icon: '🤝',
  },
  {
    name: 'Risk Tolerance',
    description: 'How comfortable you are with uncertainty',
    color: 'orange',
    icon: '🎲',
  },
  {
    name: 'Resilience & Grit',
    description: 'Your ability to bounce back from setbacks',
    color: 'red',
    icon: '💪',
  },
  {
    name: 'Communication Skills',
    description: 'How effectively you convey ideas',
    color: 'teal',
    icon: '💬',
  },
  {
    name: 'Decision Making',
    description: 'Your approach to solving problems',
    color: 'indigo',
    icon: '🧠',
  },
];

export const personalityTypes = [
  {
    type: 'Visionary Leader',
    traits: ['High motivation', 'Strong leadership', 'High risk tolerance'],
    description: 'Natural entrepreneur with big ideas and the drive to execute',
    bestMatch: 'Operations Manager, Technical Lead',
    color: 'from-blue-600 to-purple-600',
  },
  {
    type: 'Systematic Builder',
    traits: ['Strong teamwork', 'Data-driven', 'Methodical decision making'],
    description: 'Excellent at execution and process optimization',
    bestMatch: 'Visionary Leader, Creative Strategist',
    color: 'from-green-600 to-teal-600',
  },
  {
    type: 'Creative Strategist',
    traits: ['High resilience', 'Innovative thinking', 'Strong communication'],
    description: 'Brings fresh perspectives and creative solutions',
    bestMatch: 'Systematic Builder, Technical Expert',
    color: 'from-purple-600 to-pink-600',
  },
  {
    type: 'Technical Expert',
    traits: ['Domain expertise', 'Problem solver', 'Detail-oriented'],
    description: 'Deep technical knowledge with execution capability',
    bestMatch: 'Visionary Leader, Business Strategist',
    color: 'from-orange-600 to-red-600',
  },
];

export const workStylePreferences = [
  'Structured schedule with clear deadlines',
  'Flexible hours with outcome focus',
  'Intense sprints followed by breaks',
  'Steady consistent pace',
  'Adaptive based on project needs',
];

export const conflictResolutionStyles = [
  'Direct confrontation and immediate resolution',
  'Mediated discussion with neutral party',
  'Collaborative problem-solving session',
  'Time apart to cool down, then discuss',
  'Focus on common goals and compromise',
];


