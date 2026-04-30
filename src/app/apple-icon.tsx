import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a2f5e',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '20px',
        }}
      >
        {/* Rayo naranja - trazo superior */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '18px',
            width: '62px',
            height: '110px',
            background: '#e8580a',
            transform: 'skewX(-12deg)',
            borderRadius: '6px',
          }}
        />
        {/* Rayo naranja - trazo inferior */}
        <div
          style={{
            position: 'absolute',
            top: '70px',
            left: '50px',
            width: '52px',
            height: '110px',
            background: '#e8580a',
            transform: 'skewX(-12deg)',
            borderRadius: '6px',
          }}
        />
        {/* Letra T en blanco */}
        <span
          style={{
            color: '#ffffff',
            fontSize: 100,
            fontWeight: 900,
            fontFamily: 'sans-serif',
            marginLeft: '45px',
            letterSpacing: '-4px',
            lineHeight: 1,
          }}
        >
          T
        </span>
      </div>
    ),
    { ...size }
  )
}
