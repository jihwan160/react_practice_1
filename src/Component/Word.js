import React from 'react'
import dummy from '../db/data.json'

function Word() {
  const day = 1;
  const wordList = dummy.words.filter(word => word.day === day)
  return (
    <div>
      <table>
        <tbody>
          {wordList.map(one_word => (
            <tr key={one_word.id}>
              <td>{one_word.eng}</td>
              <td>{one_word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Word