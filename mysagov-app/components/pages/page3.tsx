"use client"

import { useState } from "react"
import { Lock } from "lucide-react"

interface Page3Props {
  onNavigate: (page: number) => void
}

export default function Page3({ onNavigate }: Page3Props) {
  const [pin, setPin] = useState(["", "", "", "", "", ""])
  const [showResult, setShowResult] = useState<"correct" | "incorrect" | null>(null)
  const correctPin = "000000"

  const handleNumberClick = (number: string) => {
    if (showResult) return

    const firstEmptyIndex = pin.findIndex((digit) => digit === "")
    if (firstEmptyIndex !== -1) {
      const newPin = [...pin]
      newPin[firstEmptyIndex] = number
      setPin(newPin)

      // Check if PIN is complete
      if (firstEmptyIndex === 5) {
        const enteredPin = newPin.join("")
        if (enteredPin === correctPin) {
          setShowResult("correct")
          setTimeout(() => onNavigate(5), 1500)
        } else {
          setShowResult("incorrect")
          setTimeout(() => {
            setPin(["", "", "", "", "", ""])
            setShowResult(null)
          }, 1500)
        }
      }
    }
  }

  const handleBackspace = () => {
    if (showResult) return

    const lastFilledIndex = pin
      .map((digit, index) => (digit !== "" ? index : -1))
      .filter((index) => index !== -1)
      .pop()

    if (lastFilledIndex !== undefined) {
      const newPin = [...pin]
      newPin[lastFilledIndex] = ""
      setPin(newPin)
    }
  }

  const handleReset = () => {
    onNavigate(4)
  }

  return (
    <div className="w-[390px] h-[844px] bg-white flex flex-col pt-12 pb-8 relative">
      {/* Green overlay for correct PIN */}
      {showResult === "correct" && (
        <div className="absolute inset-0 bg-green-500/30 flex items-center justify-center z-10">
          <div className="text-white text-4xl font-bold">Correct</div>
        </div>
      )}

      {/* Red overlay for incorrect PIN */}
      {showResult === "incorrect" && (
        <div className="absolute inset-0 bg-red-500/30 flex items-center justify-center z-10">
          <div className="text-white text-4xl font-bold">Incorrect</div>
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="mb-8">
          <div className="w-16 h-16 flex items-center justify-center mb-8">
            <Lock className="w-12 h-12 text-[#8e44ad]" />
          </div>
        </div>

        <h1 className="text-[#8e44ad] text-2xl font-medium mb-12 text-center">Enter your 6 digit PIN</h1>

        <div className="flex space-x-3 mb-8">
          {pin.map((digit, index) => (
            <div
              key={index}
              className="w-12 h-12 border-2 border-[#8e44ad] rounded-lg flex items-center justify-center text-xl font-medium text-[#8e44ad]"
            >
              {digit}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2 mb-8">
          <span className="text-gray-500">Forgot your PIN?</span>
          <button onClick={handleReset} className="text-[#8e44ad] font-medium">
            RESET
          </button>
        </div>
      </div>

      <div className="px-8 pb-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(number.toString())}
              className="w-20 h-16 text-2xl font-medium text-[#8e44ad] flex items-center justify-center rounded-lg active:bg-gray-100"
            >
              {number}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div></div>
          <button
            onClick={() => handleNumberClick("0")}
            className="w-20 h-16 text-2xl font-medium text-[#8e44ad] flex items-center justify-center rounded-lg active:bg-gray-100"
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className="w-20 h-16 text-2xl font-medium text-[#8e44ad] flex items-center justify-center rounded-lg active:bg-gray-100"
          >
            ⌫
          </button>
        </div>
      </div>
    </div>
  )
}
