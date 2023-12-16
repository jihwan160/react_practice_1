import React, { useState } from 'react'

function Kor_on_off({ one_word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(one_word.isDone);
  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    setIsDone(!isDone);
  }

  return (
    <>
    <tr key={one_word.id} className={isDone ? "off" : ""}>
      <td>
          <input type='checkbox' checked={isDone} onChange={toggleDone}/>
      </td>
      <td>{one_word.eng}</td>
      <td>{isShow && one_word.kor}</td>
      <td>
          <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button>삭제</button>
      </td>
    </tr>
    </>
  )
}

export default Kor_on_off