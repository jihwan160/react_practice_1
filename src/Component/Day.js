import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
function Day() {
  const days = useFetch("http://localhost:3001/days")

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