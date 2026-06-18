import React, { useState } from 'react'
import FactCheckingChallenge from '../components/FactCheckingChallenge'

function Day5() {
  const [activeTab, setActiveTab] = useState('facts')
  const [reflectionText, setReflectionText] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleReflectionSubmit = () => {
    if (reflectionText.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="glass-morphism rounded-lg p-8 mb-6">
        <h1 className="text-4xl font-bold text-trust-blue mb-4">🛡️ Day 5: How Can We Use AI Safely and Responsibly?</h1>
        <p className="text-xl text-gray-700">Focus: Fact-checking, AI safety, responsible AI use</p>
        <p className="text-lg text-gray-600 mt-2">Question: How can we use AI safely, responsibly, and effectively?</p>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        {['facts', 'safety', 'checklist', 'reflection'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === tab ? 'bg-trust-blue text-white' : 'glass-morphism text-gray-700 hover:bg-white/50'}`}>
            {tab === 'facts' && '🔍 Fact-Checking'}
            {tab === 'safety' && '🛡️ AI Safety'}
            {tab === 'checklist' && '✅ Responsible Use'}
            {tab === 'reflection' && '💭 Your Thoughts'}
          </button>
        ))}
      </div>

      <div className="glass-morphism rounded-lg p-8">
        {activeTab === 'facts' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🔍 Fact-Checking AI Claims</h2>
            <p className="text-lg text-gray-700 mb-6">Even smart AI sometimes gives wrong information. Can you spot what's true?</p>
            <FactCheckingChallenge />
          </div>
        )}
        {activeTab === 'safety' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🛡️ AI Safety: What You Need to Know</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-3">✅ Verify Important Information</h3>
                <p className="text-gray-700">Don't just trust AI's first answer. Check multiple sources, ask experts, and verify facts.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-3">✅ Use Strong Passwords & Encryption</h3>
                <p className="text-gray-700">Protect your data and the data AI uses. Use passwords, two-factor authentication, and encrypted connections.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-3">✅ Be Careful What You Share</h3>
                <p className="text-gray-700">Don't give AI personal information unless you trust the company. Your data is valuable!</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-3">✅ Understand Biases</h3>
                <p className="text-gray-700">AI can have unfair preferences. Question if recommendations seem biased or stereotypical.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                <h3 className="font-bold text-lg text-trust-green mb-3">✅ Think Critically</h3>
                <p className="text-gray-700">Ask: "Does this make sense?" "Who made this AI?" "What information does it use?" "Could it be wrong?"</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'checklist' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">✅ Responsible AI Use Checklist</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
                <h3 className="font-bold text-lg text-trust-blue mb-4">Before Using AI, Ask Yourself:</h3>
              </div>

              <div className="space-y-3">
                <label className="flex items-start p-4 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:border-trust-blue transition">
                  <input type="checkbox" className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Is this information important or risky?</p>
                    <p className="text-sm text-gray-600">If yes, verify with multiple sources</p>
                  </div>
                </label>
                <label className="flex items-start p-4 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:border-trust-blue transition">
                  <input type="checkbox" className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Do I trust this AI source?</p>
                    <p className="text-sm text-gray-600">Look for reputable companies and transparent AI</p>
                  </div>
                </label>
                <label className="flex items-start p-4 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:border-trust-blue transition">
                  <input type="checkbox" className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Am I sharing private information?</p>
                    <p className="text-sm text-gray-600">Be careful - your data is valuable</p>
                  </div>
                </label>
                <label className="flex items-start p-4 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:border-trust-blue transition">
                  <input type="checkbox" className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Does this AI have bias?</p>
                    <p className="text-sm text-gray-600">Question unfair or stereotypical suggestions</p>
                  </div>
                </label>
                <label className="flex items-start p-4 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:border-trust-blue transition">
                  <input type="checkbox" className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Have I used good encryption/passwords?</p>
                    <p className="text-sm text-gray-600">Use strong passwords and secure connections (HTTPS)</p>
                  </div>
                </label>
                <label className="flex items-start p-4 bg-white border-2 border-gray-300 rounded-lg cursor-pointer hover:border-trust-blue transition">
                  <input type="checkbox" className="w-5 h-5 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Can I explain how this AI works?</p>
                    <p className="text-sm text-gray-600">Understand what AI you're using and how it works</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'reflection' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">💭 Your Reflection</h2>
            <p className="text-lg text-gray-700 mb-6">How can we use AI safely, responsibly, and effectively?</p>
            
            {!submitted ? (
              <div className="space-y-4">
                <textarea
                  value={reflectionText}
                  onChange={(e) => setReflectionText(e.target.value)}
                  placeholder="Share your thoughts on:\n- What surprised you about AI this week?\n- What's one way you can use AI responsibly?\n- What questions do you still have?\n- How can AI help solve problems?\n\nType your ideas here..."
                  className="w-full p-4 border-2 border-trust-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-trust-blue"
                  rows="8"
                />
                <button
                  onClick={handleReflectionSubmit}
                  disabled={!reflectionText.trim()}
                  className="w-full bg-trust-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-trust-blue/80 disabled:opacity-50 transition"
                >
                  Submit Your Reflection
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
                  <h3 className="font-bold text-lg text-trust-green mb-3">✅ Thank You!</h3>
                  <p className="text-gray-700 mb-4">Here's what you wrote:</p>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-trust-blue">
                    <p className="text-gray-700 whitespace-pre-wrap">{reflectionText}</p>
                  </div>
                  <button
                    onClick={() => {
                      setReflectionText('')
                      setSubmitted(false)
                    }}
                    className="mt-4 bg-trust-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-trust-blue/80 transition"
                  >
                    Edit Response
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
        <h3 className="font-bold text-lg text-trust-blue mb-3">🎓 Congratulations!</h3>
        <p className="text-gray-700 mb-3">
          You've completed the AI Explorers unit! You now understand:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>What AI is and where it's used</li>
          <li>How information quality affects AI responses</li>
          <li>How edge devices and cloud computers work together</li>
          <li>Why cybersecurity and encryption protect AI systems</li>
          <li>How to use AI safely and responsibly</li>
        </ul>
      </div>
    </div>
  )
}

export default Day5