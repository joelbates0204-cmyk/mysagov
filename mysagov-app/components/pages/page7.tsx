"use client"

import { useEffect, useState } from "react"

interface Page7Props {
  onNavigate: (page: number) => void
}

export default function Page7({ onNavigate }: Page7Props) {
  const [currentDate, setCurrentDate] = useState<string>("")
  const [showDateOverlay, setShowDateOverlay] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Format the current date as "DD MMM" (day and first 3 letters of month in uppercase)
    const now = new Date()
    const day = now.getDate().toString().padStart(2, "0")
    const month = now.toLocaleString("default", { month: "short" }).toUpperCase()
    const formattedDate = `${day} ${month}`
    setCurrentDate(formattedDate)

    // Show the date overlay when component mounts
    setShowDateOverlay(true)

    // Start exit animation after 2.5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 2500)

    // Hide the overlay after exit animation completes
    const hideTimer = setTimeout(() => {
      setShowDateOverlay(false)
    }, 3400)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="w-[390px] h-[844px] bg-white flex flex-col">
      <div className="bg-black text-white p-4 pt-16">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate(5)}
            className="text-white text-xl w-12 h-12 flex items-center justify-center"
          >
            ←
          </button>
          <div className="text-center">
            <h1 className="font-medium">Provisional Driver's Licence</h1>
            <p className="text-sm text-gray-300">Active until 28 December 2026</p>
          </div>
          <div className="w-12"></div>
        </div>
      </div>

      <div className="bg-[#e74c3c] flex">
        <button className="flex-1 py-4 text-white font-medium bg-[#e74c3c] h-14">Overview</button>
        <button onClick={() => onNavigate(8)} className="flex-1 py-4 text-white/70 font-medium h-14">
          Details
        </button>
      </div>

      <div className="flex-1 p-6 bg-gray-50 relative overflow-y-auto pb-8">
        <div className="absolute left-2 top-12 opacity-50">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAOveriviewbackground-dPl1yV5haS1vb28RUwoSDh2cCZWmic.jpeg"
            alt="SA Government Seal"
            className="w-44 h-44 object-contain"
          />
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 text-sm">License Number</p>
              <p className="font-bold text-lg">WD8305</p>

              <p className="text-gray-600 text-sm mt-3">Date of Birth</p>
              <p className="font-bold">18/07/2006</p>

              <p className="text-gray-600 text-sm mt-3">Class</p>
              <p className="font-bold text-lg">C</p>
            </div>

            <div className="w-40 h-48 relative overflow-hidden rounded">
              {/* Photo ID - always visible */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAPhotoID-JOjeji9xsmZMiRROPMgxvvnOO3pXDO.jpeg"
                alt="Photo ID"
                className="w-full h-full object-cover"
              />

              {/* Custom date overlay with slideshow animation from top */}
              {showDateOverlay && (
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-transform duration-900 ease-in-out ${
                    isExiting ? "transform translate-y-full" : "transform translate-y-0"
                  }`}
                  style={{
                    transform: showDateOverlay && !isExiting ? "translateY(0)" : "translateY(-100%)",
                    animation: showDateOverlay && !isExiting ? "slideInFromTop 0.9s ease-out forwards" : undefined,
                  }}
                >
                  <div className="absolute inset-0 bg-red-300/60 rounded"></div>
                  <div className="relative z-10 text-white font-bold text-2xl drop-shadow-lg">{currentDate}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <h2 className="font-bold text-xl mb-1">Kingston Takai</h2>
          <p className="text-gray-600 mb-3 text-sm">30 ARTHUR ST PLYMPTON PARK SA 5038</p>
          <div className="bg-gray-600 text-white px-3 py-1 rounded text-sm inline-block">P1</div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SADetailsBarcode-qVlcwmq1SYnfTim2SyDqcY5s5u96iK.jpeg"
            alt="Barcode"
            className="w-full h-16 object-cover"
          />
          <div className="w-full h-1 bg-black mt-4"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
