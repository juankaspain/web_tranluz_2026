import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

// Favicon fiel a la identidad visual de Tranluz:
// fondo azul marino corporativo + dos barras naranjas diagonales (símbolo del rayo/cable)
// + texto "T" en blanco – minimalista, legible a 16px
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
          borderRadius: '4px',
        }}
      >
        {/* Barra naranja izquierda – rayo Tranluz */}
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: '4px',
            width: '9px',
            height: '28px',
            background: '#e8580a',
            transform: 'skewX(-10deg)',
            borderRadius: '2px',
          }}
        />
        {/* Barra naranja derecha */}
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: '13px',
            width: '9px',
            height: '28px',
            background: '#e8580a',
            transform: 'skewX(-10deg)',
            borderRadius: '2px',
          }}
        />
        {/* T en blanco */}
        <span
          style={{
            color: '#ffffff',
            fontSize: 17,
            fontWeight: 900,
            fontFamily: 'Arial Black, Arial, sans-serif',
            marginLeft: '10px',
            letterSpacing: '-1px',
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
