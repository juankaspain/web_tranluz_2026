import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
        }}
      >
        {/* Rayo naranja diagonal - marca Tranluz */}
        <div
          style={{
            position: 'absolute',
            top: '-2px',
            left: '3px',
            width: '12px',
            height: '22px',
            background: '#e8580a',
            transform: 'skewX(-12deg)',
            borderRadius: '2px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '9px',
            width: '10px',
            height: '22px',
            background: '#e8580a',
            transform: 'skewX(-12deg)',
            borderRadius: '2px',
          }}
        />
        {/* Letra T en blanco */}
        <span
          style={{
            color: '#ffffff',
            fontSize: 18,
            fontWeight: 900,
            fontFamily: 'sans-serif',
            marginLeft: '8px',
            letterSpacing: '-1px',
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
