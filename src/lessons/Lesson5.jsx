import React, { useState } from 'react'
import EdgeAISimulation from '../components/EdgeAISimulation'

function Lesson5() {
  const [activeTab, setActiveTab] = useState('simulation')

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="glass-morphism rounded-lg p-8 mb-6">
        <h1 className="text-4xl font-bold text-trust-blue mb-4">Lesson 5: How Can We Help AI Make Trustworthy Decisions?</h1>
        <p className="text-xl text-gray-700">Essential Question: How can we help AI make trustworthy decisions?</p>
        <p className="text-lg text-gray-600 mt-2">Learning Goal: We are learning how Edge AI, information, and cybersecurity work together.</p>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        {['simulation', 'design', 'reflection'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === tab ? 'bg-trust-blue text-white' : 'glass-morphism text-gray-700 hover:bg-white/50'}`}>
            {tab === 'simulation' && '🌐 Can AI Trust the Internet?'}
            {tab === 'design' && '🛠️ Design a Secure System'}
            {tab === 'reflection' && '🤔 Reflection'}
          </button>
        ))}
      </div>

      <div className="glass-morphism rounded-lg p-8">
        {activeTab === 'simulation' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🌐 Can AI Trust the Internet?</h2>
            <p className="text-lg text-gray-700 mb-6">Try the full Edge AI simulation! See what happens when information travels between devices.</p>
            <EdgeAISimulation />
          </div>
        )}
        {activeTab === 'design' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🛠️ Design a Secure Edge AI System</h2>
            <p className="text-lg text-gray-700 mb-6">Your challenge: Build a system with these required components:</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-trust-blue">
                <span className="text-2xl">📷</span>
                <div>
                  <h3 className="font-bold">Camera</h3>
                  <p className="text-gray-600">Captures images from the real world</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-trust-blue">
                <span className="text-2xl">🔴</span>
                <div>
                  <h3 className="font-bold">Raspberry Pi (Edge Device)</h3>
                  <p className="text-gray-600">Processes information locally</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-trust-blue">
                <span className="text-2xl">💾</span>
                <div>
                  <h3 className="font-bold">Information</h3>
                  <p className="text-gray-600">Data travels across the network</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-trust-blue">
                <span className="text-2xl">🌐</span>
                <div>
                  <h3 className="font-bold">Internet</h3>
                  <p className="text-gray-600">Connects devices together</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-trust-blue">
                <span className="text-2xl">☁️</span>
                <div>
                  <h3 className="font-bold">Cloud AI</h3>
                  <p className="text-gray-600">Powerful AI in the cloud makes decisions</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-trust-green">
                <span className="text-2xl">🔒</span>
                <div>
                  <h3 className="font-bold">Security Method</h3>
                  <p className="text-gray-600">Choose: Encryption, Digital Signatures, or Both</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'reflection' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🤔 How Has Your Thinking Changed?</h2>
            <p className="text-lg text-gray-700 mb-6">Reflect on what you've learned about AI, information, and cybersecurity:</p>
            <textarea className="w-full p-4 border-2 border-trust-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue mb-4" rows="8" placeholder="How has your thinking about AI changed? What surprised you? What questions do you still have?" />
            <button className="bg-trust-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-trust-blue/80 transition">Submit Reflection</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Lesson5