"use client"

interface Page8Props {
  onNavigate: (page: number) => void
}

export default function Page8({ onNavigate }: Page8Props) {
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
        <button onClick={() => onNavigate(7)} className="flex-1 py-4 text-white/70 font-medium h-14">
          Overview
        </button>
        <button className="flex-1 py-4 text-white font-medium bg-[#e74c3c] h-14">Details</button>
      </div>

      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto pb-8">
        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="text-2xl font-bold text-green-600 mb-4">0</div>
          <h3 className="font-bold mb-2">Demerit points accumulated</h3>
          <p className="text-gray-600 text-sm">
            These points are added when you commit offences. If you accrue four or more demerit points on your
            provisional licence you will be disqualified from driving for 6 months.
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <h3 className="font-bold mb-4 text-gray-600">Classes</h3>
          <div className="flex items-center">
            <span className="font-bold text-2xl mr-4">C</span>
            <span className="text-lg">Car</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <h3 className="font-bold mb-4 text-gray-600">Signature</h3>
          <div className="h-24 flex items-center justify-center">
            <img src="/images/signature.jpeg" alt="Signature" className="h-16 object-contain" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <h3 className="font-bold mb-2 text-gray-600">General</h3>
          <p className="font-medium">Must be carried while driving</p>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold mb-2 text-gray-600">Scope</h3>
          <p className="text-sm">
            Use of this permit/licence for identification purposes, other than for policing road traffic laws, is not
            intended or authorised, and is solely at the risk of the user.
          </p>
        </div>
      </div>
    </div>
  )
}
