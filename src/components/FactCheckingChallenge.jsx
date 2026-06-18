import React, { useState } from 'react'

function FactCheckingChallenge() {
  const [selectedClaim, setSelectedClaim] = useState(null)
  const [userAnswer, setUserAnswer] = useState(null)

  const claims = [
    {
      id: 1,
      claim: 'Honey never spoils and can last for thousands of years.',
      isTrue: true,
      explanation: 'TRUE! Archaeologists found honey in Egyptian tombs that\'s over 3,000 years old and still edible.',
      verification: 'You can verify this by checking scientific sources and museum records.'
    },
    {
      id: 2,
      claim: 'Bananas are berries, but strawberries are not.',
      isTrue: true,
      explanation: 'TRUE! Scientifically, bananas ARE berries, but strawberries are NOT. Interesting, right?',
      verification: 'Look up botanical definitions to verify!'
    },
    {
      id: 3,
      claim: 'A goldfish has a memory span of only 3 seconds.',
      isTrue: false,
      explanation: 'FALSE! Goldfish can actually remember things for months and can be trained. The 3-second myth is wrong!',
      verification: 'Studies show goldfish can remember food sources and recognize their owners.'
    },
    {
      id: 4,
      claim: 'Octopuses have three hearts.',
      isTrue: true,
      explanation: 'TRUE! Octopuses actually have three hearts - two pump blood to the gills, and one pumps blood to the body.',
      verification: 'Marine biology sources confirm this unusual feature.'
    },
    {
      id: 5,
      claim: 'The Great Wall of China is visible from space with the naked eye.',
      isTrue: false,
      explanation: 'FALSE! This is a common myth. The Great Wall is too narrow to see from space without magnification.',
      verification: 'Astronauts have confirmed this - you need binoculars or a camera zoom to see it.'
    }
  ]

  const handleAnswer = (answer) => {
    setUserAnswer(answer)
  }

  const handleReset = () => {
    setSelectedClaim(null)
    setUserAnswer(null)
  }

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-blue-50 p-6 rounded-lg border-2 border-trust-blue">
        <h3 className="font-bold text-lg text-trust-blue mb-2">🔍 Fact-Checking Challenge:</h3>
        <p className="text-gray-700">
          AI sometimes gives information that sounds true but isn't! 
          Your job: Decide if each claim is TRUE or FALSE, then check if you were right.
        </p>
      </div>

      {!selectedClaim ? (
        // Claim Selection
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {claims.map(claim => (
            <button
              key={claim.id}
              onClick={() => setSelectedClaim(claim)}
              className="p-6 bg-white border-2 border-gray-300 rounded-lg hover:border-trust-blue hover:shadow-lg transition text-left cursor-pointer"
            >
              <p className="font-semibold text-gray-800 mb-2">Claim {claim.id}</p>
              <p className="text-gray-700 line-clamp-2">{claim.claim}</p>
              <p className="text-sm text-gray-600 mt-2">Click to check →</p>
            </button>
          ))}
        </div>
      ) : (
        // Claim Details
        <div className="space-y-6">
          {/* Claim Display */}
          <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Claim {selectedClaim.id}:</strong> "{selectedClaim.claim}"
            </p>
          </div>

          {/* Answer Buttons */}
          {!userAnswer && (
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer(true)}
                className="p-6 bg-green-100 border-2 border-trust-green rounded-lg hover:bg-green-200 transition font-bold text-lg text-trust-green"
              >
                ✅ TRUE
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="p-6 bg-red-100 border-2 border-trust-red rounded-lg hover:bg-red-200 transition font-bold text-lg text-trust-red"
              >
                ❌ FALSE
              </button>
            </div>
          )}

          {/* Results */}
          {userAnswer !== null && (
            <div className={`p-6 rounded-lg border-2 ${
              userAnswer === selectedClaim.isTrue
                ? 'bg-green-50 border-trust-green'
                : 'bg-yellow-50 border-trust-yellow'
            }`}>
              <h3 className={`font-bold text-lg mb-3 ${
                userAnswer === selectedClaim.isTrue
                  ? 'text-trust-green'
                  : 'text-trust-yellow'
              }`}>
                {userAnswer === selectedClaim.isTrue ? '✅ Correct!' : '❌ Not quite!'}
              </h3>

              <div className={`p-4 rounded-lg mb-4 ${
                selectedClaim.isTrue ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <p className="font-bold text-gray-800 mb-2">The Answer:</p>
                <p className={`text-lg font-semibold ${
                  selectedClaim.isTrue ? 'text-trust-green' : 'text-trust-red'
                }`}>
                  {selectedClaim.isTrue ? '✅ TRUE' : '❌ FALSE'}
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-trust-blue mb-4">
                <p className="font-semibold text-gray-800 mb-2">Why:</p>
                <p className="text-gray-700">{selectedClaim.explanation}</p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">How to verify:</p>
                <p className="text-gray-700">{selectedClaim.verification}</p>
              </div>

              <button
                onClick={handleReset}
                className="mt-4 w-full bg-trust-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-trust-blue/80 transition"
              >
                Try Another Claim
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tips for Fact-Checking */}
      <div className="bg-green-50 p-6 rounded-lg border-2 border-trust-green">
        <h3 className="font-bold text-lg text-trust-green mb-3">🔍 Tips for Fact-Checking AI Claims:</h3>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Check multiple sources (websites, books, videos)</li>
          <li>✅ Look for expert opinions from scientists or specialists</li>
          <li>✅ Ask: "Does this make sense?" and "Where's the proof?"</li>
          <li>✅ Be skeptical of claims that sound too good to be true</li>
          <li>✅ When in doubt, ask a teacher or librarian!</li>
        </ul>
      </div>
    </div>
  )
}

export default FactCheckingChallenge