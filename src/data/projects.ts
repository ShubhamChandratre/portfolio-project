import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'FitTrack',
    description: 'Developed a comprehensive web application for tracking daily workouts and calorie intake, allowing users to log workouts for past and future dates.',
    imageUrl: '/fittrack.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/ShubhamChandratre/Fittrack.git',
    techStack: ['JavaScript', 'React', 'Node.js', 'MongoDB','VSCode']
  },
  {
    id: 2,
    title: 'ChronoMail',
    description: 'A fully responsive email scheduler app with automated scheduling, email tracking, user authentication, and clean UI.',
    imageUrl: '/chronomail3.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/ShubhamChandratre/ChronoMail.git',
    techStack: ['React', 'Node.js', 'MongoDB', 'Brevo','VSCode']
  },
  {
    id: 3,
    title: 'Klimate - Weather Forecast',
    description: 'A fully responsive weather app with real-time forecasts, location search and sleek design.',
    imageUrl: '/klimate.png',
    liveUrl: 'https://klimateforecast.vercel.app/',
    githubUrl: 'https://github.com/ShubhamChandratre/Klimate.git',
    techStack: ['TypeScript', 'Node.js', 'Express', 'OpenWeather API','VSCode','Docker']
  },
  {
    id: 4,
    title: 'TravelPlanner-AI',
    description: 'An AI-powered travel planner that generates personalized itineraries, offers real-time suggestions, and integrates chatbot for seamless trip planning',
    imageUrl: '/travel.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/ShubhamChandratre/TravelPlanner-AI.git',
    techStack: ['JavaScript', 'Node.js', 'TypeScript', 'Gemini API', 'Vite','VSCode','Docker']
  },
  {
    id: 5,
    title: 'RFM Analysis',
    description: 'RFM model to analyze customer behavior and segment them based on recency, frequency, and monetary metrics.',
    imageUrl: '/rfm.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/ShubhamChandratre/RFMAnalysis.git',
    techStack: ['Python', 'Jupyter Notebook', 'Scikit-learn', 'Pandas', 'Matplotlib',]
  },
  {
    id: 6,
    title: 'Credit Card Fraud Detection',
    description: 'Machine learning model Logistic Regression to detect fraudulent credit card transactions and visualization ',
    imageUrl: '/ccfd.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/ShubhamChandratre/Credit-Card-Fraud-Detection.git',
    techStack: ['Python', 'Jupyter Notebook', 'Scikit-learn', 'Pandas', 'Matplotlib']
  },
];