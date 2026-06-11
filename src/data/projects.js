/**
 * projects.js
 * -----------
 * Add or remove projects here without touching any component.
 *
 * Fields:
 *   id          – unique string key
 *   emoji       – cover emoji (used when no image is provided)
 *   image       – optional path, e.g. '/assets/images/project-ts.png'
 *   title       – project name
 *   description – short summary (1–2 sentences)
 *   stack       – array of tech tags
 *   github      – URL to GitHub repository
 *   demo        – (optional) live demo URL
 */

const projects = [
  {
    id: 'research-flow',
    emoji: '📄',
    image: null,
    title: 'Research Flow',
    description:
      'A modern web application developed with Next.js, React, and Tailwind CSS, created to facilitate the process of scientific research, analysis, and writing. It integrates the Gemini API for advanced language processing and the Semantic Scholar API for efficient literature review, providing researchers with a streamlined workflow from data collection to manuscript preparation.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Gemini API', 'Semantic Scholar API'],
    github: 'https://github.com/GlaucoCiprianoMoreira/Projeto-Research-Flow',
    demo: null,
  },
  {
    id: 'volume-gesture-control',
    emoji: '🎛',
    image: null,
    title: 'Volume Gesture Control',
    description: 'Computer Vision project that allows you to control the main volume of the operating system (Windows) using only hand gestures, captured in real time through your webcam. The system uses OpenCV and MediaPipe to detect hand landmarks and interpret specific gestures for volume adjustment, providing an intuitive and touchless way to manage audio levels.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'PyCaw'],
    github: 'https://github.com/GlaucoCiprianoMoreira/Gesture-Volume-Control',
    demo: null,
  },
  {
    id: 'cave-game',
    emoji: '🎮',
    image: null,
    title: 'Cave Game',
    description:
      'This 2D arcade game was developed as a project for the Computer Graphics course. All visual elements are rendered using graphics algorithms implemented from scratch, using Pygame. The project was developed following SCRUM methodologies, with task management in Jira, and the commits followed the conventional commits rule.',
    stack: ['Python', 'Pygame', 'SCRUM', 'Jira'],
    github: 'https://github.com/GlaucoCiprianoMoreira/Trabalho_CG_2D',
    demo: 'https://www.youtube.com/watch?v=1Pw7r0RtE-Y',
  },
]

export default projects
