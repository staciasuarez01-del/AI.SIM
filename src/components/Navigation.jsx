import React from 'react'
import { ArrowLeft } from 'lucide-react'

function Navigation({ currentLesson, onBack }) {
  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="max-w-6xl mx-auto flex items-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-trust-blue hover:text-trust-blue/80 font-semibold transition"
        >
          <ArrowLeft size={20} />
          Back to Lessons
        </button>
        <div className="ml-auto text-gray-600 text-sm">
          Lesson {currentLesson}
        </div>
      </div>
    </nav>
  )
}

export default Navigation