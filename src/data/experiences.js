/**
 * experiences.js
 * --------------
 * Add or remove experiences here without touching any component.
 *
 * Fields:
 *   id          – unique string key
 *   emoji       – icon emoji
 *   image       – optional path, e.g. '/assets/images/uece.png'
 *   title       – role / activity title
 *   org         – institution or company name
 *   period      – date range string
 *   description – 1–3 sentence summary
 *   stack       – technologies / skills used
 */

const experiences = [
  {
    id: 'pet',
    emoji: '🏛',
    image: null,
    title: 'PET — Programa de Educação Tutorial',
    org: 'PET Ciências da Computação — UECE',
    period: 'Mar 2026 – Present',
    description:
      'Teaching, research, and outreach activities within the PET Computer Science group at UECE. Participation in academic activities, technology training projects, events, and critical and community-based education initiatives. Contribution to strengthening undergraduate education and the integration between university and society.',
    stack: ['Python', 'AI Engineering', 'Organization', 'Teaching'],
  },
  {
    id: 'laura-forecasting',
    emoji: '📈',
    image: null,
    title: 'Time Series Forecasting for ESP',
    org: 'LAURA',
    period: 'Mar 2025 – Feb 2026',
    description:
      'As a data scientist and software developer, I have developed database analytics, preprocessing, and machine learning models for time series forecasting using neural networks, which predict the number of patients waiting in a hospital each day. I have used established strategies, techniques, and technologies, such as feature engineering and neural network model enhancement with hop connections, Huber loss, and convolutional layers.',
    stack: ['Python', 'TensorFlow', 'Time Series Analysis', 'ResNet', 'LSTM', 'Random Forest', 'XGBoost', 'Feature Engineering', 'Django'],

  },
]

export default experiences
