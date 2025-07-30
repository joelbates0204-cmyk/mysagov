"use client"

interface Page2Props {
  onNavigate: (page: number) => void
}

export default function Page2({ onNavigate }: Page2Props) {
  return (
    <div className="w-[390px] h-[844px] bg-[#4a5c6a] flex flex-col pt-12 pb-8">
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8QRPuw6srFeaH3ZiDCB5GQ3l1X5SMK.png"
            alt="Digital wallet illustration"
            className="w-64 h-64 object-contain"
          />
        </div>

        <h1 className="text-white text-3xl font-light mb-4 text-center">Your digital wallet</h1>

        <p className="text-white/80 text-lg text-center mb-8 leading-relaxed">
          Access your government licences and vehicle registrations.
        </p>
      </div>

      <div className="px-8 pb-4">
        <button
          onClick={() => onNavigate(3)}
          className="w-full bg-[#e74c3c] text-white py-4 rounded-lg text-lg font-medium mb-4 h-14"
        >
          Login with mySAGOV
        </button>

        <p className="text-white/80 text-center">
          Don't have an account? <span className="text-white font-medium">Signup</span>
        </p>
      </div>
    </div>
  )
}
