import * as React from 'react'
import {} from '@sanity/ui'
import {set, unset} from 'sanity'

// Custom input component for sanity studio v3 with a range slider from 1 to 12

export const RatioInput: React.FC = (props: any) => {
  const {elementProps, onChange, value = ''} = props

  const handleChange = (event: any) => {
    const nextValue = event.currentTarget.value
    onChange(nextValue ? set(nextValue) : unset())
  }

  return (
    <div>
      <p>{value} / 12</p>
      <div
        style={{display: 'grid', gridTemplateColumns: `${value}fr ${12 - value}fr`, gap: '1rem'}}
      >
        <div
          style={{
            height: '6rem',
            backgroundColor: '#0C0056',
          }}
        />
        <div style={{height: '6rem', background: '#0C0056'}} />
      </div>
      <input
        type="range"
        min="0"
        max="11"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{width: '100%'}}
        {...elementProps}
      />
    </div>
  )
}
