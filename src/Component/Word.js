import React from 'react'
import dummy from '../db/data.json'
import { useParams } from 'react-router-dom';
import Kor_on_off from './Kor_on_off';

function Word() {
  const word = useParams().word; 
  const wordList = dummy.words.filter(words => words.day === Number(word))


  return (
    <div>
      <h2>Day {word}</h2>
      <table>
        <tbody>
          {wordList.map(one_word => (
            <Kor_on_off one_word={one_word} key={one_word.id}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Word