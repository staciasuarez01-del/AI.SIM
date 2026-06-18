import React, { useState } from 'react'
import PromptComparison from '../components/PromptComparison'
import YellowBallChallenge from '../components/YellowBallChallenge'
import StopSignFeatures from '../components/StopSignFeatures'

function Day2() {
  const [activeTab, setActiveTab] = useState('prompts')

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="glass-morphism rounded-lg p-8 mb-6">
        <h1 className="text-4xl font-bold text-trust-blue mb-4">💭 Day 2: How Does AI Create Responses?</h1>
        <p className="text-xl text-gray-700">Focus: Prompts, information quality, and AI responses</p>
        <p className="text-lg text-gray-600 mt-2">Question: How do we get AI to give us good answers?</p>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        {['prompts', 'challenge', 'features', 'missing'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === tab ? 'bg-trust-blue text-white' : 'glass-morphism text-gray-700 hover:bg-white/50'}`}>
            {tab === 'prompts' && '📝 Vague vs Detailed'}
            {tab === 'challenge' && '🎯 Yellow Ball'}
            {tab === 'features' && '🛑 STOP Sign'}
            {tab === 'missing' && '❓ Missing Info'}
          </button>
        ))}
      </div>

      <div className="glass-morphism rounded-lg p-8">
        {activeTab === 'prompts' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">📝 Vague vs Detailed Prompts</h2>
            <p className="text-lg text-gray-700 mb-6">The better your prompt (question), the better AI's answer!</p>
            <PromptComparison />
          </div>
        )}
        {activeTab === 'challenge' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🎯 Yellow Ball with Star Challenge</h2>
            <p className="text-lg text-gray-700 mb-6">Try to write the perfect prompt to get AI to draw what you want!</p>
            <YellowBallChallenge />
          </div>
        )}
        {activeTab === 'features' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🛑 STOP Sign Information Detective</h2>
            <p className="text-lg text-gray-700 mb-6">Which features help AI recognize a STOP sign?</p>
            <StopSignFeatures />
          </div>
        )}
        {activeTab === 'missing' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">❓ Missing Information Challenge</h2>
            <p className="text-lg text-gray-700 mb-6">What happens when important information is missing?</p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
                <h3 className="font-bold text-lg text-trust-blue mb-2">Complete Information:</h3>
                <p className="text-gray-700 mb-3">"Round, orange, bumpy texture, sweet taste"</p>
                <p className="text-trust-green font-bold">✅ AI answers: It's an orange! 🍊</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-trust-yellow">
                <h3 className="font-bold text-lg text-trust-yellow mb-2">Incomplete Information:</h3>
                <p className="text-gray-700 mb-3">"Round, orange..."</p>
                <p className="text-trust-red font-bold">❌ AI might guess: Ball? Coin? Planet?</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-trust-red">
                <h3 className="font-bold text-lg text-trust-red mb-2">Wrong Information:</h3>
                <p className="text-gray-700 mb-3">"Round, red, bumpy, sweet"</p>
                <p className="text-trust-red font-bold">❌ AI gets confused or makes wrong guess</p>
              </div>
            </div>
            <div className="mt-6 bg-green-50 p-6 rounded-lg border-2 border-trust-green">
              <h3 className="font-bold text-lg text-trust-green mb-2">🔑 Key Idea:</h3>
              <p className="text-gray-700">Good information = Good answers. Bad or missing information = Bad answers!</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
        <h3 className="font-bold text-lg text-trust-blue mb-3">💡 Key Idea for Today:</h3>
        <p className="text-gray-700">Information quality matters! Better prompts and complete information lead to better AI responses.</p>
      </div>
    </div>
  )
}

export default Day2