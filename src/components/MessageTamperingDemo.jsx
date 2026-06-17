import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

function MessageTamperingDemo() {
  const [tamperPoint, setTamperPoint] = useState(null)

  const stages = [
    { id: 0, label: 'Camera', emoji: '📷', description: 'Captures a stop sign' },
    { id: 1, label: 'Raspberry Pi', emoji: '🔴', description: 'Processes locally' },
    { id: 2, label: 'Internet', emoji: '🌐', description: 'Data travels' },
    { id: 3, label: 'Cloud AI', emoji: '☁️', description: 'Makes decision' }
  ]

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-lg border-2 border-trust-blue">
        <div className="flex items-center justify-between gap-4">
          {stages.map((stage, idx) => (
            <React.Fragment key={stage.id}>
              <button
                onClick={() => setTamperPoint(tamperPoint === stage.id ? null : stage.id)}
                className={`flex flex-col items-center p-4 rounded-lg transition cursor-pointer ${tamperPoint === stage.id ? 'bg-trust-red text-white ring-4 ring-trust-red/30' : 'bg-blue-50 text-trust-blue hover:bg-blue-100'}`}
              >
                <div className="text-4xl mb-2">{stage.emoji}</div>
                <div className="font-bold text-sm">{stage.label}</div>
                <div className="text-xs text-center mt-1">{stage.description}</div>
              </button>
              {idx < stages.length - 1 && (
                <div className="flex-1 flex justify-center">
                  <ArrowRight className="text-trust-blue" size={32} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-trust-blue">Information at Each Stage:</h3>
        
        <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
          <h4 className="font-bold text-lg mb-2">✅ Original Information (from Camera)</h4>
          <p className="font-mono text-gray-700 mb-2">This is a red octagon with the word STOP</p>
          <p className="text-gray-600 text-sm">AI Decision: 🛑 STOP SIGN</p>
        </div>

        {tamperPoint === 2 && (
          <div className="bg-red-50 p-6 rounded-lg border-4 border-trust-red animate-pulse">
            <h4 className="font-bold text-lg mb-2 text-trust-red">⚠️ TAMPERING DETECTED!</h4>
            <p className="font-mono text-gray-700 mb-2">This is a blue circle with the word SLOW</p>
            <p className="text-gray-600 text-sm">Someone changed the data while it traveled!</p>
          </div>
        )}

        <div className={`p-6 rounded-lg border-2 ${tamperPoint === 2 ? 'bg-red-50 border-trust-red' : 'bg-blue-50 border-trust-blue'}`}>
          <h4 className="font-bold text-lg mb-2">AI's Final Decision:</h4>
          <p className="font-mono text-gray-700 mb-2">
            {tamperPoint === 2 ? 'This is a speed sign' : 'This is a STOP sign'}
          </p>
          <p className={`text-sm font-bold ${tamperPoint === 2 ? 'text-trust-red' : 'text-trust-green'}`}>
            {tamperPoint === 2 ? '❌ WRONG!' : '✅ CORRECT!'}
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-2 border-trust-yellow">
        <p className="text-gray-700">
          <strong>🔑 Key Lesson:</strong> Even tiny changes cause AI to make wrong decisions! This is why encryption matters.
        </p>
      </div>
    </div>
  )
}

export default MessageTamperingDemo