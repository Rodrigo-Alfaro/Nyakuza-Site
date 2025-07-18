'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [showCatImage, setShowCatImage] = useState(false)


  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.error('Audio play failed:', err)
      })
    }
    setShowCatImage(true)
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      backgroundColor: '#000',
      color: '#fff'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '2rem', 
        textAlign: 'center',
        fontWeight: 'bold'
      }}>
        Interested in joining the Nyakuza?
      </h1>
      
      <Image
        src="/nyakuzahouse.png"
        alt="Funny meme"
        width={800}
        height={600}
        style={{ maxWidth: '90%', maxHeight: '80vh', borderRadius: '10px', width: 'auto', height: 'auto' }}
        priority
      />
      
      {showCatImage && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '2rem',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Image
            src="/catlaugh.jpg"
            alt="Cat laughing"
            width={400}
            height={400}
            style={{ borderRadius: '10px', marginBottom: '1rem' }}
          />
          <button 
            onClick={() => setShowCatImage(false)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#9306d4ff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Close
          </button>
        </div>
      )}
      
      <button 
        onClick={handleButtonClick}
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          backgroundColor: '#9306d4ff',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#08eb94ff'}
        onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#08eb94ff'}
      >
        Click here for more info
      </button>
      
      <audio ref={audioRef} src="/Cat Laughing At You.mp3" />
    </div>
  )
}
