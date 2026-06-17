import React, { useState } from 'react'
import PixelToDataDemo from '../components/PixelToDataDemo'

function Lesson2() {
  const [activeTab, setActiveTab] = useState('hook')

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="glass-morphism rounded-lg p-8 mb-6">
        <h1 className="text-4xl font-bold text-trust-blue mb-4">Lesson 2: How Does AI See Images?</h1>
        <p className="text-xl text-gray-700">Essential Question: How does AI use information to understand images?</p>
        <p className="text-lg text-gray-600 mt-2">Learning Goal: We are learning how AI turns images into information that it can use to make decisions.</p>
      </div>

      <div className="flex gap-4 mb-6 flex-wrap">
        {['hook', 'features', 'data', 'missing'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 rounded-lg font-semibold transition ${activeTab === tab ? 'bg-trust-blue text-white' : 'glass-morphism text-gray-700 hover:bg-white/50'}`}>
            {tab === 'hook' && '🎨 Mystery Pixel Image'}
            {tab === 'features' && '🛑 STOP Sign Features'}
            {tab === 'data' && '💾 Data Only Challenge'}
            {tab === 'missing' && '⚠️ Missing Information'}
          </button>
        ))}
      </div>

      <div className="glass-morphism rounded-lg p-8">
        {activeTab === 'hook' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🎨 Mystery Pixel Image</h2>
            <p className="text-lg text-gray-700 mb-6">Computers see images as tiny colored squares called pixels. Can you guess what this image is?</p>
            <PixelToDataDemo />
          </div>
        )}
        {activeTab === 'features' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">🛑 Human Vision Tokens: STOP Sign</h2>
            <p className="text-lg text-gray-700 mb-6">When humans look at images, we see features like colors, shapes, and letters. Let's see what features AI looks for:</p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-trust-blue">
                <h3 className="font-bold text-trust-blue mb-2">Feature: Red Color</h3>
                <p className="text-gray-700">✅ Present in this image</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-trust-blue">
                <h3 className="font-bold text-trust-blue mb-2">Feature: Letters</h3>
                <p className="text-gray-700">✅ Present in this image (STOP)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-trust-blue">
                <h3 className="font-bold text-trust-blue mb-2">Feature: Octagon Shape</h3>
                <p className="text-gray-700">✅ Present in this image</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'data' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">💾 Guess the Object Using Data Only</h2>
            <p className="text-lg text-gray-700 mb-6">Here's information about an object, but no picture. Can you guess what it is?</p>
            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-trust-yellow mb-6">
              <h3 className="font-bold text-lg mb-3">Mystery Object Data:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Round shape</li>
                <li>Orange color</li>
                <li>Small bumpy texture</li>
                <li>Sweet taste</li>
              </ul>
            </div>
            <p className="text-trust-green font-bold text-lg">It's an orange! 🍊</p>
          </div>
        )}
        {activeTab === 'missing' && (
          <div>
            <h2 className="text-3xl font-bold text-trust-blue mb-4">⚠️ Missing Information Challenge</h2>
            <p className="text-lg text-gray-700 mb-6">What happens when important information is missing?</p>
            <div className="bg-red-50 p-6 rounded-lg border-2 border-trust-red mb-6">
              <h3 className="font-bold text-lg mb-3">Incomplete Data:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Round shape</li>
                <li>Orange color</li>
                <li>Small...</li>
              </ul>
              <p className="mt-4 text-trust-red font-bold">❌ AI might guess wrong! It could be an orange, a ball, a coin, or something else!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Lesson2