"use client"

import { useState } from "react"
import Page1 from "@/components/pages/page1"
import Page2 from "@/components/pages/page2"
import Page3 from "@/components/pages/page3"
import Page4 from "@/components/pages/page4"
import Page5 from "@/components/pages/page5"
import Page6 from "@/components/pages/page6"
import Page7 from "@/components/pages/page7"
import Page8 from "@/components/pages/page8"
import RegisterSW from "./register-sw"

export default function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const navigateToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 onNavigate={navigateToPage} />
      case 2:
        return <Page2 onNavigate={navigateToPage} />
      case 3:
        return <Page3 onNavigate={navigateToPage} />
      case 4:
        return <Page4 onNavigate={navigateToPage} />
      case 5:
        return <Page5 onNavigate={navigateToPage} />
      case 6:
        return <Page6 onNavigate={navigateToPage} />
      case 7:
        return <Page7 onNavigate={navigateToPage} />
      case 8:
        return <Page8 onNavigate={navigateToPage} />
      default:
        return <Page1 onNavigate={navigateToPage} />
    }
  }

  return (
    <>
      <RegisterSW />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-[390px] h-[844px] bg-white relative overflow-hidden">{renderCurrentPage()}</div>
      </div>
    </>
  )
}