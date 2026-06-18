import React, { useState } from 'react'
import EdgeAIDataFlow from '../components/EdgeAIDataFlow'

function Day3() {
  const [activeTab, setActiveTab] = useState('flow')

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="glass-morphism rounded-lg p-8 mb-6">
        <h1 className="text-4xl font-bold text-trust-blue mb-4">🌐 Day 3: How Do Computers Work Together?</h1>
        <p className="text-xl text-gray-700">Focus: Edge AI and Raspberry Pi as an edge device</p>
        <p className="text-lg text-gray-600 mt-2">Question: How do small computers and big computers work together?</p>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        {['flow', 'what-is', 'why'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === tab ? 'bg-trust-blue text-white' : 'glass-morphism text-gray-700 hover:bg-white/50'}`}>
            {tab === 'flow' && '📊 Data Flow'}
            {tab === 'what-is' && '🔴 What is Edge AI?'}
            {tab === 'why' && '❓ Why It Matters'}
          </button>
        ))}
      </div>

      <div className="glass-morphism rounded-lg p-8">
        {activeTab === 'flow' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">📊 Edge AI Data Flow</h2>
            <p className="text-lg text-gray-700 mb-6">Click on each stage to learn what happens!</p>
            <EdgeAIDataFlow />
          </div>
        )}
        {activeTab === 'what-is' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🔴 What is Edge AI?</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
                <h3 className="font-bold text-xl text-trust-blue mb-3">Edge Device = Smart Computer Nearby</h3>
                <p className="text-gray-700 mb-4">
                  An edge device is a smaller computer (like a Raspberry Pi) that's placed close to where information is collected.
                  Instead of sending everything to the cloud, it does some thinking right there!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                  <h3 className="font-bold text-lg text-trust-green mb-3">✅ Edge Device (Small Computer)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>📍 Located nearby</li>
                    <li>⚡ Instant response</li>
                    <li>🔐 More private</li>
                    <li>💰 Less expensive</li>
                    <li>🌐 Works without internet</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border-2 border-trust-yellow">
                  <h3 className="font-bold text-lg text-trust-yellow mb-3">☁️ Cloud AI (Big Computers)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>🏢 In data centers</li>
                    <li>🧠 Very powerful</li>
                    <li>📊 Can analyze lots of data</li>
                    <li>🎯 Complex thinking</li>
                    <li>🌍 Works anywhere online</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-300">
                <h3 className="font-bold text-lg text-gray-800 mb-3">🤝 They Work Together!</h3>
                <p className="text-gray-700 mb-4">
                  Edge devices handle quick tasks locally, then send important information to the cloud for deeper analysis.
                  The cloud sends back smarter results.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Example:</strong> A security camera uses an edge device to quickly detect motion, then sends the video to the cloud for detailed analysis of what the object is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'why' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">❓ Why Edge AI Matters</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-2">⚡ Speed</h3>
                <p className="text-gray-700">Instant decisions without waiting for internet connection</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-2">🔐 Privacy</h3>
                <p className="text-gray-700">Not all your data goes to the cloud - some stays local and private</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-2">💰 Efficiency</h3>
                <p className="text-gray-700">Uses less internet and electricity - better for the environment</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-2">🚀 Real-Time</h3>
                <p className="text-gray-700">Perfect for systems that need instant responses (like self-driving cars)</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
        <h3 className="font-bold text-lg text-trust-blue mb-3">💡 Key Idea for Today:</h3>
        <p className="text-gray-700">Small edge devices and big cloud computers work together. Information travels between them, and both types of thinking are important!</p>
      </div>
    </div>
  )
}

export default Day3