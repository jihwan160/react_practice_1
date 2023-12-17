import { Link } from 'react-router-dom'
import UseFetch from './UseFetch'
function Day() {
  const days = UseFetch("http://localhost:3001/days")

  return (
    <ul>
      {days.map(one_day => (
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