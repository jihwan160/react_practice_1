import { useParams } from 'react-router-dom';
import Kor_on_off from './Kor_on_off';
import UseFetch from './UseFetch';

function Word() {
  const { word } = useParams(); 

  const words = UseFetch(`http://localhost:3001/words?day=${word}`)

  return (
    <div>
      <h2>Day {word}</h2>
      <table>
        <tbody>
          {words.map(one_word => (
            <Kor_on_off one_word={one_word} key={one_word.id}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Word