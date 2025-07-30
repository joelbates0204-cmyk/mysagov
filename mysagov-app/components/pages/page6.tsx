"use client"

interface Page6Props {
  onNavigate: (page: number) => void
}

export default function Page6({ onNavigate }: Page6Props) {
  return (
    <div className="w-[390px] h-[844px] bg-[#4a5c6a] flex flex-col pt-12 pb-8">
      <div className="flex items-center p-4">
        <button
          onClick={() => onNavigate(5)}
          className="text-white text-2xl w-12 h-12 flex items-center justify-center"
        >
          ←
        </button>
      </div>

      <div className="flex-1 px-6">
        <div className="mb-6 text-center">
          <h1 className="text-white text-3xl font-light">
            <span className="text-[#e74c3c]">my</span>
            <span className="text-white">SA</span>
            <span className="text-[#e74c3c]">GOV</span>
          </h1>
        </div>

        <div className="bg-white rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>

          <div className="space-y-6">
            <button className="w-full text-left min-h-[60px] flex flex-col justify-center">
              <div className="border-2 border-black px-4 py-2 inline-block mb-2">
                <span className="font-medium">Account</span>
              </div>
              <p className="text-gray-600 text-sm">Change your email address or delete your account</p>
            </button>

            <button className="w-full text-left min-h-[60px] flex flex-col justify-center">
              <div className="border-2 border-black px-4 py-2 inline-block mb-2">
                <span className="font-medium">Password</span>
              </div>
              <p className="text-gray-600 text-sm">Change your account password</p>
            </button>

            <button className="w-full text-left min-h-[60px] flex flex-col justify-center">
              <div className="border-2 border-black px-4 py-2 inline-block mb-2">
                <span className="font-medium">Security</span>
              </div>
              <p className="text-gray-600 text-sm">Manage multi-factor authentication</p>
            </button>

            <button className="w-full text-left min-h-[60px] flex flex-col justify-center">
              <div className="border-2 border-black px-4 py-2 inline-block mb-2">
                <span className="font-medium">Notifications</span>
              </div>
              <p className="text-gray-600 text-sm">Set your notifications preferences</p>
            </button>

            <button className="w-full text-left min-h-[60px] flex flex-col justify-center">
              <div className="border-2 border-black px-4 py-2 inline-block mb-2">
                <span className="font-medium">Privacy</span>
              </div>
              <p className="text-gray-600 text-sm">Review the privacy policy</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
