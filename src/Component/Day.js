import React from 'react'
import dummy from '../db/data.json'
function Day() {
  
  return (
    <ul>
      {dummy.days.map(one_day => (
        <li>
          Day {one_day.day} 
        </li>
      ))}
    </ul>
  )
}

export default Day