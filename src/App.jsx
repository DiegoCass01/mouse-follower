import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // limpia el evento
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: enabled ? 0.8 : 0,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'opacity 0.2s ease-in-out'
      }} />
      <button onClick={() => setEnabled(!enabled)}>{
        enabled ? 'Desactivar' : 'Activar '} seguir puntero
      </button>
    </>
  )
}


function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
