import React from 'react'
import { Link } from 'react-router-dom'


function Header() {

  

  return (
    <>
      <h1>
        <Link to="/">
          영단어 프로젝트 연습
        </Link>
      </h1>
      <button>단어 추가</button>
      <button>날짜 추가</button>
    </>
  )
}

export default Header