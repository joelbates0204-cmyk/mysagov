"use client"

import { useState, useEffect } from "react"

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  if (!showInstallPrompt) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-[#4a5c6a] text-white p-4 rounded-lg shadow-lg z-50">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Install mySAGOV</h3>
          <p className="text-sm opacity-90">Add to your home screen for quick access</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setShowInstallPrompt(false)} className="px-3 py-1 text-sm bg-white/20 rounded">
            Later
          </button>
          <button onClick={handleInstall} className="px-3 py-1 text-sm bg-[#e74c3c] rounded">
            Install
          </button>
        </div>
      </div>
    </div>
  )
}
