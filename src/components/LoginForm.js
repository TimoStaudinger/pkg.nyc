import React, {useState, useEffect, useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import style from './LoginForm.css'
import Card from './Card'

const LoginForm = ({hasError, onSubmit}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const inputRef = useRef(null)

  useEffect(
    () => {
      if (hasError) {
        setUsername('')
        setPassword('')

        if (inputRef.current) inputRef.current.focus()
      }
    },
    [hasError]
  )

  return (
    <Card centered className={`${hasError ? 'animated shake' : ''}`}>
      <p className={style.title}>Packages</p>
      <input
        placeholder="Email"
        type="email"
        className={style.input}
        value={username}
        onChange={e => setUsername(e.target.value)}
        autoFocus
        ref={inputRef}
      />
      <input
        placeholder="Password"
        type="password"
        className={style.input}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button
        className={style.submit}
        onClick={() => onSubmit(username, password)}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </Card>
  )
}

export default LoginForm
