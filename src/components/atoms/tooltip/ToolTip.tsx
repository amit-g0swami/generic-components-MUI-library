import React, { useState } from 'react'
import { TooltipProps } from './tooltip.interface'

const Tooltip = ({ text, position = 'bottom', children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  const getTooltipStyle = () => {
    switch (position) {
      case 'top':
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' }
      case 'right':
        return { top: '50%', left: '100%', transform: 'translateY(-50%)' }
      case 'bottom':
        return { top: '100%', left: '50%', transform: 'translateX(-50%)' }
      case 'left':
        return { top: '50%', right: '100%', transform: 'translateY(-50%)' }
      default:
        return {}
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block'
      }}
    >
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#333',
            color: '#fff',
            padding: '0px 8px',
            borderRadius: '4px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            zIndex: 50,
            fontSize: '12px',
            whiteSpace: 'nowrap',
            ...getTooltipStyle()
          }}
        >
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip
