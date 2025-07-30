"use client"

interface Page5Props {
  onNavigate: (page: number) => void
}

export default function Page5({ onNavigate }: Page5Props) {
  return (
    <div className="w-[390px] h-[844px] bg-[#4a5c6a] flex flex-col">
      <div className="bg-black text-white p-4 pt-16">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate(6)}
            className="text-white text-2xl w-12 h-12 flex items-center justify-center"
          >
            ⚙️
          </button>
          <h1 className="text-white text-xl font-medium">Credentials</h1>
          <div className="w-12"></div>
        </div>
      </div>

      <div className="flex-1 px-6 py-8">
        <button
          onClick={() => onNavigate(7)}
          className="w-full bg-[#e91e63] rounded-2xl p-6 flex items-center justify-between text-white min-h-[100px]"
        >
          <div className="text-left">
            <h2 className="text-lg font-medium mb-1">Provisional Drivers Licence</h2>
            <p className="text-white/80">Active until 28 December 2026</p>
          </div>
          <div className="w-10 h-10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SSQ0Updn1Fb1Q2uavx7mEIOe5QKSww.png"
              alt="Steering wheel icon"
              className="w-full h-full object-contain"
            />
          </div>
        </button>
      </div>
    </div>
  )
}
