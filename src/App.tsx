import { useState } from "react"
import Layout from "./Layout/Layout.tsx"

function App() {
  const [showLayout, setShowLayout] = useState(false)

  const toggleshowLayout = () => {
    setShowLayout(!showLayout)
  }

  return (
    <>
      <button onClick={toggleshowLayout} className="p-2 bg-blue-500 text-white rounded">
        Show Layout
      </button>
      <br />
      {showLayout ? <Layout /> :
        <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-950">
          <h1 className="text-6xl font-bold text-blue-600">Welcome to CodeGears!</h1>
          <p className="text-4xl font-bold text-gray-300">Site is currently in Production</p>
        </div>
      }
    </>
  )
}

export default App
