import React, { useState } from 'react'
import MessageTamperingDemo from '../components/MessageTamperingDemo'

function Lesson4() {
  const [activeTab, setActiveTab] = useState('hook')

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="glass-morphism rounded-lg p-8 mb-6">
        <h1 className="text-4xl font-bold text-trust-blue mb-4">Lesson 4: Can We Trust Information?</h1>
        <p className="text-xl text-gray-700">Essential Question: Can we trust information as it travels across the internet?</p>
        <p className="text-lg text-gray-600 mt-2">Learning Goal: We are learning how information moves between devices and what can happen when information changes.</p>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        {['hook', 'delivery', 'tampering', 'exit'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === tab ? 'bg-trust-blue text-white' : 'glass-morphism text-gray-700 hover:bg-white/50'}`}>
            {tab === 'hook' && '📮 Envelope Delivery'}
            {tab === 'delivery' && '🚚 AI Delivery Challenge'}
            {tab === 'tampering' && '🔥 Message Tampering'}
            {tab === 'exit' && '💭 Exit Ticket'}
          </button>
        ))}
      </div>

      <div className="glass-morphism rounded-lg p-8">
        {activeTab === 'hook' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">📮 Special Delivery Envelope</h2>
            <p className="text-lg text-gray-700 mb-6">Imagine sending a message in different types of envelopes. Which ones protect the message best?</p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-trust-blue">
                <h3 className="font-bold text-lg mb-2">📭 Open Envelope</h3>
                <p className="text-gray-700">Anyone can read or change the message!</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-trust-yellow">
                <h3 className="font-bold text-lg mb-2">📬 Sealed Envelope</h3>
                <p className="text-gray-700">Better protection, but someone could still open it.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-trust-green">
                <h3 className="font-bold text-lg mb-2">🔒 Security Sealed Envelope</h3>
                <p className="text-gray-700">Strong protection! Easy to see if it was opened.</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'delivery' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🚚 The AI Delivery Challenge</h2>
            <p className="text-lg text-gray-700 mb-6">Watch what happens to a message as it travels from one computer to another:</p>
            <MessageTamperingDemo />
          </div>
        )}
        {activeTab === 'tampering' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🔥 Broken Message Test</h2>
            <p className="text-lg text-gray-700 mb-6">What happens when information gets changed during travel?</p>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3 text-trust-blue">Original Message:</h3>
                <div className="bg-green-50 p-4 rounded-lg border-2 border-trust-green">
                  <p className="font-mono text-lg">This is a SAFE message</p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-trust-red">Message Got Tampered With:</h3>
                <div className="bg-red-50 p-4 rounded-lg border-2 border-trust-red">
                  <p className="font-mono text-lg">This is NOT a SAFE message</p>
                </div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-trust-yellow">
                <p className="text-gray-700">
                  <strong>What changed?</strong> Just one word! But now AI might make a completely different decision.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'exit' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">💭 Exit Ticket</h2>
            <p className="text-lg text-gray-700 mb-4">How could changing information affect AI decisions?</p>
            <textarea className="w-full p-4 border-2 border-trust-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue" rows="6" placeholder="Type your answer here..." />
            <button className="mt-4 bg-trust-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-trust-blue/80 transition">Submit Answer</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Lesson4