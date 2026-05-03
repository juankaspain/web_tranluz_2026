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
          borderRadius: '28px',
        }}
      >
        {/* Barra naranja izquierda */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '28px',
            width: '42px',
            height: '148px',
            background: '#e8580a',
            transform: 'skewX(-10deg)',
            borderRadius: '8px',
          }}
        />
        {/* Barra naranja derecha */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '74px',
            width: '42px',
            height: '148px',
            background: '#e8580a',
            transform: 'skewX(-10deg)',
            borderRadius: '8px',
          }}
        />
        {/* T en blanco */}
        <span
          style={{
            color: '#ffffff',
            fontSize: 84,
            fontWeight: 900,
            fontFamily: 'Arial Black, Arial, sans-serif',
            marginLeft: '50px',
            letterSpacing: '-4px',
            lineHeight: 1,
            zIndex: 1,
          }}
        >
          T
        </span>
      </div>
    ),
    { ...size }
  )
}
