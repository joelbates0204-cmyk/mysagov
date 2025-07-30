"use client"

interface Page1Props {
  onNavigate: (page: number) => void
}

export default function Page1({ onNavigate }: Page1Props) {
  return (
    <div className="w-[390px] h-[844px] cursor-pointer relative overflow-hidden" onClick={() => onNavigate(2)}>
      <img src="/images/page1-background.jpeg" alt="mySAGOV Splash Screen" className="w-full h-full object-cover" />
    </div>
  )
}
