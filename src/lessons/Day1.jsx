import React, { useState } from 'react'
import AIImageDetective from '../components/AIImageDetective'

function Day1() {
  const [activeTab, setActiveTab] = useState('hook')

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="glass-morphism rounded-lg p-8 mb-6">
        <h1 className="text-4xl font-bold text-trust-blue mb-4">🤖 Day 1: What Is AI?</h1>
        <p className="text-xl text-gray-700">Focus: AI in everyday life, benefits and challenges, AI can make mistakes</p>
        <p className="text-lg text-gray-600 mt-2">Question: What is artificial intelligence and where do we see it?</p>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        {['hook', 'detective', 'benefits', 'challenges'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === tab ? 'bg-trust-blue text-white' : 'glass-morphism text-gray-700 hover:bg-white/50'}`}>
            {tab === 'hook' && '💬 What is AI?'}
            {tab === 'detective' && '🔍 Image Detective'}
            {tab === 'benefits' && '✅ Benefits'}
            {tab === 'challenges' && '⚠️ Challenges'}
          </button>
        ))}
      </div>

      <div className="glass-morphism rounded-lg p-8">
        {activeTab === 'hook' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">💬 What is Artificial Intelligence?</h2>
            <p className="text-lg text-gray-700 mb-6">
              AI is technology that learns patterns and makes decisions, like a very smart computer program.
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-trust-blue">
                <h3 className="font-bold text-lg text-trust-blue mb-2">🎮 Gaming AI</h3>
                <p className="text-gray-700">Video game characters that learn how you play and get smarter</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-trust-blue">
                <h3 className="font-bold text-lg text-trust-blue mb-2">📱 Phone AI</h3>
                <p className="text-gray-700">Voice assistants like Siri and Alexa that understand your commands</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-trust-blue">
                <h3 className="font-bold text-lg text-trust-blue mb-2">🎥 Streaming AI</h3>
                <p className="text-gray-700">Netflix recommends shows based on what you've watched</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-trust-blue">
                <h3 className="font-bold text-lg text-trust-blue mb-2">📸 Camera AI</h3>
                <p className="text-gray-700">Your phone's camera recognizes faces and improves photos</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'detective' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🔍 AI Image Detective</h2>
            <p className="text-lg text-gray-700 mb-6">AI-generated images sometimes have mistakes. Can you spot what's wrong?</p>
            <AIImageDetective />
          </div>
        )}
        {activeTab === 'benefits' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">✅ Benefits of AI</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-2">⚡ Speed</h3>
                <p className="text-gray-700">AI can process information faster than humans</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-2">🎯 Accuracy</h3>
                <p className="text-gray-700">AI can recognize patterns and make precise decisions</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-2">💡 Creativity</h3>
                <p className="text-gray-700">AI can generate new ideas, art, and writing</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-2">🏥 Helping People</h3>
                <p className="text-gray-700">AI assists doctors, teachers, and scientists</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'challenges' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">⚠️ Challenges with AI</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-trust-yellow">
                <h3 className="font-bold text-lg text-trust-yellow mb-2">❌ AI Can Make Mistakes</h3>
                <p className="text-gray-700">Even smart AI systems sometimes give wrong answers</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-trust-yellow">
                <h3 className="font-bold text-lg text-trust-yellow mb-2">🔐 Privacy Concerns</h3>
                <p className="text-gray-700">AI collects data about you - we need to protect privacy</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-trust-yellow">
                <h3 className="font-bold text-lg text-trust-yellow mb-2">⚖️ Bias</h3>
                <p className="text-gray-700">AI can have unfair preferences if trained on biased data</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-trust-yellow">
                <h3 className="font-bold text-lg text-trust-yellow mb-2">🎲 Unpredictability</h3>
                <p className="text-gray-700">Sometimes AI does things we don't expect or understand</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
        <h3 className="font-bold text-lg text-trust-blue mb-3">💡 Key Idea for Today:</h3>
        <p className="text-gray-700">AI is powerful and helpful, but it can make mistakes. We need to think critically about AI and verify important information!</p>
      </div>
    </div>
  )
}

export default Day1