import React, { useState } from 'react'
import EnvelopeTamperingSimulation from '../components/EnvelopeTamperingSimulation'

function Day4() {
  const [activeTab, setActiveTab] = useState('simulation')

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="glass-morphism rounded-lg p-8 mb-6">
        <h1 className="text-4xl font-bold text-trust-blue mb-4">⚠️ Day 4: What Happens When Information Changes?</h1>
        <p className="text-xl text-gray-700">Focus: Information integrity and cybersecurity</p>
        <p className="text-lg text-gray-600 mt-2">Question: How do we keep information safe as it travels?</p>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        {['simulation', 'tampering', 'encryption', 'consequences'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === tab ? 'bg-trust-blue text-white' : 'glass-morphism text-gray-700 hover:bg-white/50'}`}>
            {tab === 'simulation' && '📬 Envelope Challenge'}
            {tab === 'tampering' && '🔥 How Tampering Happens'}
            {tab === 'encryption' && '🔐 Encryption'}
            {tab === 'consequences' && '⚠️ Consequences'}
          </button>
        ))}
      </div>

      <div className="glass-morphism rounded-lg p-8">
        {activeTab === 'simulation' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">📬 Envelope Tampering Simulation</h2>
            <p className="text-lg text-gray-700 mb-6">Send messages through different levels of security. Will they make it safely?</p>
            <EnvelopeTamperingSimulation />
          </div>
        )}
        {activeTab === 'tampering' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🔥 How Information Gets Tampered With</h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-lg border-2 border-trust-red">
                <h3 className="font-bold text-lg text-trust-red mb-2">❌ Scenario 1: Command Change</h3>
                <p className="text-gray-700 mb-2"><strong>Original:</strong> "Tell me 3 facts about dogs"</p>
                <p className="text-gray-700 mb-2"><strong>Changed to:</strong> "Tell me 30 facts about dogs"</p>
                <p className="text-gray-700">AI now gives too much information - not what you wanted!</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-trust-red">
                <h3 className="font-bold text-lg text-trust-red mb-2">❌ Scenario 2: Image Change</h3>
                <p className="text-gray-700 mb-2"><strong>Original:</strong> STOP sign (red octagon)</p>
                <p className="text-gray-700 mb-2"><strong>Changed to:</strong> STQP sign (typo in text)</p>
                <p className="text-gray-700">AI doesn't recognize it as a STOP sign - dangerous!</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-trust-red">
                <h3 className="font-bold text-lg text-trust-red mb-2">❌ Scenario 3: Data Value Change</h3>
                <p className="text-gray-700 mb-2"><strong>Original:</strong> "Temperature is 20°C (safe)"</p>
                <p className="text-gray-700 mb-2"><strong>Changed to:</strong> "Temperature is 200°C (dangerous!)"</p>
                <p className="text-gray-700">AI makes wrong decision about safety!</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'encryption' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🔐 Encryption: Protecting Information</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
                <h3 className="font-bold text-lg text-trust-blue mb-3">What is Encryption?</h3>
                <p className="text-gray-700">
                  Encryption scrambles information into a secret code that only the right person can read.
                  It's like putting a message in a locked box with a special key.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-3">✅ How Encryption Helps:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🔑 Information becomes unreadable to hackers</li>
                  <li>🛡️ Changes are obvious - you can see if it was tampered with</li>
                  <li>✓ Only the correct person can decrypt (unlock) it</li>
                  <li>🔐 Uses special mathematical keys</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-trust-yellow">
                <h3 className="font-bold text-lg text-trust-yellow mb-3">🔑 Real Examples of Encryption:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🔐 Banking passwords (HTTPS websites)</li>
                  <li>💬 WhatsApp messages (end-to-end encrypted)</li>
                  <li>🏪 Credit card numbers at checkout</li>
                  <li>📱 Your phone's fingerprint data</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'consequences' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">⚠️ Consequences of Tampering</h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-lg border-2 border-trust-red">
                <h3 className="font-bold text-lg text-trust-red mb-2">🚗 Danger: Autonomous Vehicle</h3>
                <p className="text-gray-700">
                  If traffic signal data is tampered with, a self-driving car might get a wrong command and crash!
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-trust-red">
                <h3 className="font-bold text-lg text-trust-red mb-2">🏥 Danger: Medical Data</h3>
                <p className="text-gray-700">
                  If a patient's blood type is changed in AI medical records, they might get wrong treatment!
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-trust-red">
                <h3 className="font-bold text-lg text-trust-red mb-2">💰 Danger: Financial Fraud</h3>
                <p className="text-gray-700">
                  If transaction amounts are tampered with, money could be stolen or lost.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border-2 border-trust-red">
                <h3 className="font-bold text-lg text-trust-red mb-2">📰 Danger: False Information</h3>
                <p className="text-gray-700">
                  If news data is tampered with, AI could spread misinformation to millions of people!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
        <h3 className="font-bold text-lg text-trust-blue mb-3">💡 Key Idea for Today:</h3>
        <p className="text-gray-700">Information traveling between computers needs protection! Encryption and security measures help make sure AI receives correct information and makes safe decisions.</p>
      </div>
    </div>
  )
}

export default Day4