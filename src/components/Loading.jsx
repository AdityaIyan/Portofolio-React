import React, { useEffect, useState } from 'react'
import './loading.css'

export default function Loading() {
  const [exiting, setExiting] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start = 1600 // time until start hiding (ms)
    const fade = 400 // fade duration (ms)
    const t1 = setTimeout(() => setExiting(true), start)
    const t2 = setTimeout(() => setVisible(false), start + fade)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={"loader-overlay" + (exiting ? ' exiting' : '')} aria-hidden={!visible}>
      <svg className="loader-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Loading">
        <defs>
          <style>{"text { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-weight: 700; font-size: 120px; }"}</style>
        </defs>
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" className="loader-text">AF</text>
      </svg>
    </div>
  )
}
