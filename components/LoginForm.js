import React, {useState, useEffect, useRef} from 'react'
import {ArrowRight} from 'react-feather'

import Card from './Card'
import styles from './LoginForm.module.css'

const LoginForm = ({hasError, onSubmit}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    if (hasError) {
      setUsername('')
      setPassword('')

      if (inputRef.current) inputRef.current.focus()
    }
  }, [hasError])

  return (
    <Card centered className={`${hasError ? 'animated shake' : ''}`}>
      <p className={styles.title}>Packages</p>
      <form onSubmit={() => onSubmit(username, password)}>
        <input
          placeholder="Email"
          type="email"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
          ref={inputRef}
        />
        <input
          placeholder="Password"
          type="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className={`${styles.submit} ${
            username.length && password.length ? styles.submitActive : ''
          }`}
        >
          <ArrowRight />
        </button>
      </form>
    </Card>
  )
}

export default LoginForm
