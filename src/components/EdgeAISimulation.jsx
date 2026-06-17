import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

function EdgeAISimulation() {
  const [hasEncryption, setHasEncryption] = useState(false)
  const [simulationRun, setSimulationRun] = useState(false)
  const [result, setResult] = useState(null)

  const runSimulation = () => {
    setSimulationRun(true)
    setTimeout(() => {
      if (hasEncryption) {
        setResult({
          success: true,
          message: '✅ Information was protected!',
          decision: 'AI correctly identified: STOP SIGN',
          color: 'green'
        })
      } else {
        const random = Math.random()
        if (random > 0.6) {
          setResult({
            success: false,
            message: '❌ Information was tampered with!',
            decision: 'AI incorrectly identified: YIELD SIGN',
            color: 'red'
          })
        } else {
          setResult({
            success: true,
            message: '✅ No tampering detected this time',
            decision: 'AI correctly identified: STOP SIGN',
            color: 'green'
          })
        }
      }
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-lg border-2 border-trust-blue">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 text-center p-4 bg-blue-50 rounded-lg border-2 border-trust-blue">
              <div className="text-4xl mb-2">📷</div>
              <p className="font-bold">Camera</p>
              <p className="text-sm text-gray-600">Takes picture of street sign</p>
            </div>
            <ArrowRight className="text-trust-blue mx-4" size={32} />
            <div className="flex-1 text-center p-4 bg-blue-50 rounded-lg border-2 border-trust-blue">
              <div className="text-4xl mb-2">🔴</div>
              <p className="font-bold">Raspberry Pi</p>
              <p className="text-sm text-gray-600">Edge device processes data</p>
            </div>
          </div>

          <div className="text-center">
            <ArrowRight className="text-trust-blue mx-auto rotate-90" size={32} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1 text-center p-4 bg-blue-50 rounded-lg border-2 border-trust-blue">
              <div className="text-4xl mb-2">🌐</div>
              <p className="font-bold">Internet</p>
              <p className="text-sm text-gray-600">Information travels here</p>
            </div>
            <div className="flex-1 text-center p-4 mx-4">
              {hasEncryption ? (
                <div className="bg-green-50 border-2 border-trust-green rounded-lg p-4">
                  <p className="text-3xl mb-2">🔒</p>
                  <p className="font-bold text-trust-green">ENCRYPTED</p>
                  <p className="text-sm">Protected!</p>
                </div>
              ) : (
                <div className="bg-red-50 border-2 border-trust-red rounded-lg p-4">
                  <p className="text-3xl mb-2">🔓</p>
                  <p className="font-bold text-trust-red">NOT ENCRYPTED</p>
                  <p className="text-sm">Could be hacked!</p>
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <ArrowRight className="text-trust-blue mx-auto rotate-90" size={32} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1 text-center p-4 bg-blue-50 rounded-lg border-2 border-trust-blue">
              <div className="text-4xl mb-2">☁️</div>
              <p className="font-bold">Cloud AI</p>
              <p className="text-sm text-gray-600">Makes decision</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border-2 border-trust-blue">
        <h3 className="text-2xl font-bold text-trust-blue mb-4">🔐 Choose Security Level:</h3>
        <div className="space-y-4">
          <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-trust-blue transition">
            <input type="radio" name="security" checked={!hasEncryption} onChange={() => setHasEncryption(false)} className="w-6 h-6" />
            <span className="ml-4"><span className="font-bold block">🔓 No Security</span><span className="text-sm text-gray-600">Information travels without protection</span></span>
          </label>
          <label className="flex items-center p-4 border-2 border-trust-green rounded-lg cursor-pointer hover:border-trust-green transition">
            <input type="radio" name="security" checked={hasEncryption} onChange={() => setHasEncryption(true)} className="w-6 h-6" />
            <span className="ml-4"><span className="font-bold block">🔒 Encrypted</span><span className="text-sm text-gray-600">Information is scrambled and protected</span></span>
          </label>
        </div>
      </div>

      <button onClick={runSimulation} disabled={simulationRun && !result} className="w-full bg-trust-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-trust-blue/80 disabled:opacity-50 transition">
        {simulationRun && !result ? '⏳ Running Simulation...' : '▶️ Run Simulation'}
      </button>

      {result && (
        <div className={`p-8 rounded-lg border-4 bg-${result.color}-50 border-${result.color === 'green' ? 'trust-green' : 'trust-red'}`}>
          <h3 className={`text-3xl font-bold mb-4 text-${result.color === 'green' ? 'trust-green' : 'trust-red'}`}>
            {result.message}
          </h3>
          <p className="text-lg text-gray-700">{result.decision}</p>
          <button onClick={() => { setResult(null); setSimulationRun(false); }} className="mt-4 bg-trust-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-trust-blue/80 transition">
            Run Again
          </button>
        </div>
      )}
    </div>
  )
}

export default EdgeAISimulation