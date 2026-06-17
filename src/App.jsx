import React, { useState } from 'react'
import Lesson1 from './lessons/Lesson1'
import Lesson2 from './lessons/Lesson2'
import Lesson4 from './lessons/Lesson4'
import Lesson5 from './lessons/Lesson5'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [currentLesson, setCurrentLesson] = useState(null)

  const lessons = [
    { id: 1, title: 'Can We Trust AI?', component: Lesson1 },
    { id: 2, title: 'How Does AI See Images?', component: Lesson2 },
    { id: 4, title: 'Can We Trust Information?', component: Lesson4 },
    { id: 5, title: 'How Can We Help AI?', component: Lesson5 },
  ]

  if (currentLesson) {
    const LessonComponent = lessons.find(l => l.id === currentLesson)?.component
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
        <Navigation currentLesson={currentLesson} onBack={() => setCurrentLesson(null)} />
        {LessonComponent && <LessonComponent />}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 text-white">
          <h1 className="text-5xl font-bold mb-4">🤖 Can We Trust AI?</h1>
          <p className="text-xl opacity-90">Learn how AI works, how it can make mistakes, and how to keep it safe!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {lessons.map(lesson => (
            <div
              key={lesson.id}
              onClick={() => setCurrentLesson(lesson.id)}
              className="glass-morphism rounded-lg p-8 cursor-pointer card-hover shadow-lg"
            >
              <h2 className="text-2xl font-bold text-trust-blue mb-3">
                Lesson {lesson.id}
              </h2>
              <p className="text-gray-700 text-lg">{lesson.title}</p>
              <div className="mt-4 text-trust-blue font-semibold">Click to explore →</div>
            </div>
          ))}
        </div>

        <div className="glass-morphism rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-trust-blue mb-4">💡 The Big Idea</h2>
          <p className="text-lg text-gray-700">
            AI is only as trustworthy as the information it receives. When information travels between devices,
            cybersecurity helps ensure AI systems receive accurate information and make reliable decisions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App