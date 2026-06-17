import React, { useState } from 'react'
import AIImageDemo from '../components/AIImageDemo'

function Lesson1() {
  const [activeTab, setActiveTab] = useState('hook')

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="glass-morphism rounded-lg p-8 mb-6">
        <h1 className="text-4xl font-bold text-trust-blue mb-4">Lesson 1: Can We Trust AI?</h1>
        <p className="text-xl text-gray-700">Essential Question: Can we trust AI to be correct?</p>
        <p className="text-lg text-gray-600 mt-2">Learning Goal: We are learning that AI uses information to make decisions and that AI can sometimes make mistakes.</p>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        {['hook', 'activity', 'demo', 'exit'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === tab ? 'bg-trust-blue text-white' : 'glass-morphism text-gray-700 hover:bg-white/50'}`}>
            {tab === 'hook' && '🪝 Hook: Flawed AI Images'}
            {tab === 'activity' && '🎯 AI or Human?'}
            {tab === 'demo' && '🔍 AI Image Detective'}
            {tab === 'exit' && '📝 Exit Ticket'}
          </button>
        ))}
      </div>

      <div className="glass-morphism rounded-lg p-8">
        {activeTab === 'hook' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🪝 Notice & Wonder: Flawed AI Images</h2>
            <p className="text-lg text-gray-700 mb-6">Look at these AI-generated images. What do you notice? What seems wrong? What do you wonder about?</p>
            <AIImageDemo />
          </div>
        )}
        {activeTab === 'activity' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🎯 AI or Human?</h2>
            <p className="text-lg text-gray-700 mb-6">Can you tell the difference between images made by AI and images made by humans? Try to guess!</p>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
              <p className="text-gray-600">This activity is interactive. Click on images to guess if they were made by AI or by a human!</p>
            </div>
          </div>
        )}
        {activeTab === 'demo' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🔍 AI Image Detective</h2>
            <p className="text-lg text-gray-700 mb-6">Detective work! Find the mistakes in these AI images. What did the AI get wrong?</p>
            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-lg border-2 border-trust-red">
                <h3 className="font-bold text-trust-red mb-2">❌ Problem Found:</h3>
                <p className="text-gray-700">AI sometimes makes mistakes with hands, text, or objects that don't make sense together.</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'exit' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">📝 Exit Ticket</h2>
            <p className="text-lg text-gray-700 mb-4">Can we always trust AI? Explain your reasoning.</p>
            <textarea className="w-full p-4 border-2 border-trust-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue" rows="6" placeholder="Type your answer here..." />
            <button className="mt-4 bg-trust-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-trust-blue/80 transition">Submit Answer</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Lesson1