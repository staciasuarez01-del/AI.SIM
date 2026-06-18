import React, { useState } from 'react'
import Day1 from './lessons/Day1'
import Day2 from './lessons/Day2'
import Day3 from './lessons/Day3'
import Day4 from './lessons/Day4'
import Day5 from './lessons/Day5'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [currentDay, setCurrentDay] = useState(null)

  const days = [
    { id: 1, title: 'What Is AI?', component: Day1, emoji: '🤖' },
    { id: 2, title: 'How Does AI Create Responses?', component: Day2, emoji: '💭' },
    { id: 3, title: 'How Do Computers Work Together?', component: Day3, emoji: '🌐' },
    { id: 4, title: 'What Happens When Information Changes?', component: Day4, emoji: '⚠️' },
    { id: 5, title: 'How Can We Use AI Safely?', component: Day5, emoji: '🛡️' },
  ]

  if (currentDay) {
    const DayComponent = days.find(d => d.id === currentDay)?.component
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
        <Navigation currentDay={currentDay} onBack={() => setCurrentDay(null)} />
        {DayComponent && <DayComponent />}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 text-white">
          <h1 className="text-5xl font-bold mb-2">🤖 AI Explorers</h1>
          <h2 className="text-3xl font-semibold mb-4">Understanding AI, Safety, and Smart Decision-Making</h2>
          <p className="text-xl opacity-90">Driving Question: How can we use AI safely, responsibly, and effectively?</p>
        </div>

        {/* Big Idea */}
        <div className="glass-morphism rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-trust-blue mb-4">💡 Our Big Idea</h2>
          <p className="text-lg text-gray-700">
            AI can be a powerful tool, but it depends on information and is not always correct. 
            People must think critically, use effective prompts, verify information, and understand 
            how cybersecurity helps protect AI systems.
          </p>
        </div>

        {/* Day Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {days.map(day => (
            <div
              key={day.id}
              onClick={() => setCurrentDay(day.id)}
              className="glass-morphism rounded-lg p-8 cursor-pointer card-hover shadow-lg hover:shadow-xl"
            >
              <div className="text-5xl mb-3">{day.emoji}</div>
              <h2 className="text-2xl font-bold text-trust-blue mb-2">
                Day {day.id}
              </h2>
              <p className="text-gray-700 text-lg font-semibold">{day.title}</p>
              <div className="mt-4 text-trust-blue font-semibold">Click to explore →</div>
            </div>
          ))}
          {/* 5th card takes full width */}
          <div
            onClick={() => setCurrentDay(5)}
            className="glass-morphism rounded-lg p-8 cursor-pointer card-hover shadow-lg hover:shadow-xl md:col-span-2 lg:col-span-1"
          >
            <div className="text-5xl mb-3">🛡️</div>
            <h2 className="text-2xl font-bold text-trust-blue mb-2">
              Day 5
            </h2>
            <p className="text-gray-700 text-lg font-semibold">How Can We Use AI Safely?</p>
            <div className="mt-4 text-trust-blue font-semibold">Click to explore →</div>
          </div>
        </div>

        {/* Theme Badge */}
        <div className="text-center text-white text-sm opacity-75">
          <p>🔗 Connecting theme throughout: How information affects AI decisions</p>
        </div>
      </div>
    </div>
  )
}

export default App