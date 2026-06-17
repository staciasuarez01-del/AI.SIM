import React, { useState } from 'react'

function PixelToDataDemo() {
  const [pixelCount, setPixelCount] = useState(1)

  const pixelSizes = [
    { id: 1, size: '16px', label: '1x1 Pixels - Too blurry!', resolution: '4%' },
    { id: 2, size: '8px', label: '2x2 Pixels - Still blurry', resolution: '25%' },
    { id: 3, size: '4px', label: '4x4 Pixels - Getting clearer', resolution: '100%' },
    { id: 4, size: '1px', label: 'Full Resolution - Clear!', resolution: '100%' },
  ]

  const current = pixelSizes[pixelCount - 1]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div
          className="inline-block bg-blue-400 rounded mb-4"
          style={{
            width: current.size,
            height: current.size,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        />
        <p className="text-lg font-semibold text-gray-700">{current.label}</p>
        <p className="text-sm text-gray-600">Resolution: {current.resolution}</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
        <h3 className="font-bold text-lg mb-3">How Many Pixels Can You Identify?</h3>
        <div className="space-y-4">
          {pixelSizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setPixelCount(size.id)}
              className={`w-full p-3 rounded-lg text-left font-semibold transition ${pixelCount === size.id ? 'bg-trust-blue text-white' : 'bg-white text-gray-700 border-2 border-trust-blue hover:bg-blue-50'}`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-2 border-trust-yellow">
        <p className="text-gray-700">
          <strong>💡 Key Idea:</strong> More pixels = more information = AI makes better decisions! But more pixels also means more data to send.
        </p>
      </div>
    </div>
  )
}

export default PixelToDataDemo