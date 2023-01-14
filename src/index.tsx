import React from "react"
import "./index.css"
import { createRoot } from "react-dom/client"

// import pMap1 from "https://cdn.skypack.dev/p-map"
import Button from "https://framer.com/m/Button-KYsw.js@M5ouSgzXj4cBQ8UwE5Wp"
import Card from "https://framer.com/m/Card-I9LQ.js@3TSZu7JAmdHki0qPd1jL"

const App = () => {
  return (
    <div>
      Hello Framer Handshake. 👋
      <Button />
      <Card />
    </div>
  )
}

const container: any = document.getElementById("root")
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App />)
