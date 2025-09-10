import React from "react"
import { createRoot } from "react-dom/client"
import LandshaperNavbar from "./components/LandshaperNavbar"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"

function App() {
  return (
    <>
      <LandshaperNavbar />
      <HeroSection />
      <ServicesSection />
      <main style={{paddingTop: 0}}>
        {/* Additional sections will go here */}
      </main>
    </>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<App />)
