import React from "react"
import { createRoot } from "react-dom/client"

function App() {
  return (
    <div style={{padding: "40px", textAlign: "center", backgroundColor: "#f0f0f0", minHeight: "100vh"}}>
      <h1 style={{color: "#8bc34a", fontSize: "3rem"}}>Trilok Singh Jabinda Lawn</h1>
      <p style={{fontSize: "1.2rem", margin: "20px 0"}}>Welcome to our premium event venue!</p>
      <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px", margin: "20px auto", maxWidth: "600px"}}>
        <h2>Our Services</h2>
        <ul style={{textAlign: "left", listStyle: "none", padding: 0}}>
          <li style={{padding: "10px", borderBottom: "1px solid #eee"}}>🎉 Weddings</li>
          <li style={{padding: "10px", borderBottom: "1px solid #eee"}}>�� Receptions</li>
          <li style={{padding: "10px", borderBottom: "1px solid #eee"}}>💼 Corporate Events</li>
          <li style={{padding: "10px", borderBottom: "1px solid #eee"}}>🎂 Birthday Parties</li>
          <li style={{padding: "10px", borderBottom: "1px solid #eee"}}>🎓 Graduation Ceremonies</li>
          <li style={{padding: "10px"}}>🎵 Music Concerts</li>
        </ul>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<App />)
