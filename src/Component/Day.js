import React from 'react'
import dummy from '../db/data.json'
import { Link } from 'react-router-dom'
function Day() {
  
  return (
    <ul>
      {dummy.days.map(one_day => (
        <li key={one_day.id}>
          <Link to={`/word/${one_day.day}`}>
            Day {one_day.day} 
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Day