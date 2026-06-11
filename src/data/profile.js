/**
 * profile.js
 * ----------
 * Central place for all personal information.
 * Edit this file to update name, bio, links, skills, etc.
 */

export const profile = {
  name: 'Glauco Cipriano Moreira',
  initials: 'GC',
  university: 'Universidade Estadual do Ceará (UECE)',
  course: 'Computer Science',
  location: 'Fortaleza, Ceará',

  // Specialty tags shown in the hero section
  specialties: [
    'Python Developer',
    'Data Science',
    'ML & AI Engineer',
    'Statistical Modeling',
    'Data Visualization',
  ],

  // Contact links
  contact: {
    email: 'glauco.cipriano.moreira@gmail.com',
    linkedin: 'https://www.linkedin.com/in/glauco-cipriano-moreira-7ba57631a',
    github: 'https://github.com/GlaucoCiprianoMoreira',
    phone: '(85) 9 9210-3517',
  },

  // CV file path — place your PDF at this location
  cvPath: '/assets/cv/Currículo_Glauco.pdf',

  // Technical skill blocks for the About page
  technicalSkills: [
    {
      id: 'data-science',
      title: 'Data Science',
      items: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Plotly', 'Matplotlib'],
    },
    {
      id: 'forecasting',
      title: 'Forecasting',
      items: ['TensorFlow', 'Time Series', 'PyWavelets', 'Statsmodels', 'LSTM'],
    },
    {
      id: 'ai-engineering',
      title: 'AI Engineering',
      items: ['Gemini API', 'Context Management', 'Prompt Engineering'],
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      items: ['OpenCV', 'MediaPipe', 'CNN', 'Image Processing'],
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      items: ['KNN', 'Decision Trees', 'Random Forests', 'SVM', 'MLP', 'Evolutionary Algorithms (GA)'],
    },
    {
      id: 'game-dev',
      title: 'Game Development',
      items: ['Pygame'],
    },
    {
      id: 'other-tools',
      title: 'Other Tools',
      items: ['Git/Github', 'Jira', 'Django', 'ClickUp'],
    },
  ],

  // Soft skills for the About page
  softSkills: [
    'Teamwork',
    'Communication',
    'Leadership',
    'Organization',
    'Problem-solving',
    'Critical thinking',
    'Proactivity',
    'Adaptability',
  ],
}
