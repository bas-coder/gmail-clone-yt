import React from 'react'

function Section({Icon, title, color, selected}) {
  return (
    <div className={`section ${selected && "section--selected"}`}
    style={{
        borderBottom: `3px solid #0b57d0`,
        color: `${selected && color}`,
    }}>
      <Icon />
      <h4>{title}</h4>
    </div>
  )
}

export default Section
