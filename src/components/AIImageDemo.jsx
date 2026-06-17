import React, { useState } from 'react'

function AIImageDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const flawedImages = [
    {
      id: 1,
      description: 'Cat with 6 legs',
      issue: 'AI generated a cat with the wrong number of legs!',
      problem: 'AI sometimes makes mistakes with body parts'
    },
    {
      id: 2,
      description: 'Text that says HELLO',
      issue: 'The letters look weird and jumbled',
      problem: 'AI struggles with generating readable text'
    },
    {
      id: 3,
      description: 'A hand with too many fingers',
      issue: 'The hand has 8 fingers instead of 5!',
      problem: 'Hands are one of the hardest things for AI'
    }
  ]

  const current = flawedImages[currentIndex]

  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-8 rounded-lg border-4 border-dashed border-gray-400 text-center min-h-96 flex items-center justify-center">
        <div>
          <p className="text-6xl mb-4">🖼️</p>
          <p className="text-2xl font-bold text-gray-600">{current.description}</p>
        </div>
      </div>

      <div className="bg-red-50 p-6 rounded-lg border-2 border-trust-red">
        <h3 className="font-bold text-lg text-trust-red mb-2">❌ What's Wrong?</h3>
        <p className="text-gray-700">{current.issue}</p>
        <p className="text-gray-600 mt-2 text-sm">💡 {current.problem}</p>
      </div>

      <div className="flex gap-4 justify-between">
        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + flawedImages.length) % flawedImages.length)}
          className="px-6 py-3 bg-trust-blue text-white rounded-lg font-semibold hover:bg-trust-blue/80 transition"
        >
          ← Previous
        </button>
        <span className="text-center text-gray-600 py-3">
          Image {currentIndex + 1} of {flawedImages.length}
        </span>
        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % flawedImages.length)}
          className="px-6 py-3 bg-trust-blue text-white rounded-lg font-semibold hover:bg-trust-blue/80 transition"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default AIImageDemo