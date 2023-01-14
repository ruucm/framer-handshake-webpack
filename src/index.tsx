import React from "react"
import "./index.css"

// import pMap1 from "https://cdn.skypack.dev/p-map"
import Button from "https://framer.com/m/Button-9Nlu.js"
import Card from "https://framer.com/m/Card-E72i.js"
import { createRoot } from "react-dom/client"

const App = () => {
  return (
    <div>
      Hello Framer Handshake.2 👋
      <Button />
      <Card />
    </div>
  )
}

const container: any = document.getElementById("root")
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App />)
