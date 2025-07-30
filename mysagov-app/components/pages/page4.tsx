"use client"

import { useState } from "react"

interface Page4Props {
  onNavigate: (page: number) => void
}

export default function Page4({ onNavigate }: Page4Props) {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="w-[390px] h-[844px] bg-[#4a5c6a] flex flex-col pt-12 pb-8">
      <div className="flex items-center p-4">
        <button
          onClick={() => onNavigate(3)}
          className="text-white text-2xl w-12 h-12 flex items-center justify-center"
        >
          ←
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-8">
        <div className="bg-white rounded-2xl p-8 w-full max-w-sm">
          <div className="mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mySAGOVPhoto-d9OAauNxhkuLXUt61Z9drVLTWy7Ean.jpeg"
              alt="mySAGOV Logo"
              className="w-48 h-auto mx-auto mb-6"
            />
          </div>

          <h1 className="text-2xl font-medium text-center mb-2">Find your pin</h1>

          <p className="text-gray-600 text-center mb-6">Enter your phone number or recovery email</p>

          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Phone number or email"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg mb-6 focus:outline-none focus:border-[#8e44ad] h-14"
          />

          <button className="w-full bg-[#e74c3c] text-white py-3 rounded-lg text-lg font-medium h-14">Next</button>
        </div>
      </div>
    </div>
  )
}
