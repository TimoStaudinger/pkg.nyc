import React, {useState, useEffect} from 'react'
import {HMR} from '@pwa/preset-react'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

import Packages from './Packages'
import LoginForm from './LoginForm'
import Message from './Message'
import Spinner from './Spinner'

import style from './App.css'
import Toolbar from './Toolbar'
import ToolbarItem from './ToolbarItem'

const OK = 200
const UNAUTHORIZED = 401
const INTERNAL_SERVER_ERROR = 500

const ERROR_MESSAGE = 'Oops, something went wrong. Please try again later! 🤕'

const getStoredToken = () => localStorage.getItem('token')
const setStoredToken = token =>
  token === null
    ? localStorage.removeItem('token')
    : localStorage.setItem('token', token)

const fetchPackages = async token => {
  try {
    const response = await fetch('/api/pkg', {
      headers: {Authorization: `Bearer ${token}`}
    })

    if (response.status === OK) {
      return await response.json()
    } else {
      throw response
    }
  } catch (err) {
    console.error(err)
    return Promise.reject((err && err.status) || INTERNAL_SERVER_ERROR)
  }
}

const App = () => {
  const [packages, setPackages] = useState(null)
  const [token, setToken] = useState(getStoredToken())
  const [error, setError] = useState(null)
  const [isLoginError, setIsLoginError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const logout = () => {
    setToken(null)
    setStoredToken(null)
  }

  const login = async (username, password) => {
    try {
      logout()
      setIsLoginError(false)
      setIsLoading(true)

      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({username, password})
      })

      if (response.status === UNAUTHORIZED) {
        setIsLoginError(true)
        setIsLoading(false)
      } else if (response.status === OK) {
        const token = await response.text()
        setToken(token)
        setStoredToken(token)
      } else {
        setError(ERROR_MESSAGE)
        setIsLoading(false)
      }
    } catch (err) {
      console.error(err)
      setError(ERROR_MESSAGE)
      setIsLoading(false)
    }
  }

  const refreshPackages = async () => {
    if (token) {
      setIsLoading(true)
      try {
        setPackages(await fetchPackages(token))
      } catch (status) {
        if (status === UNAUTHORIZED) logout()
        else setError(ERROR_MESSAGE)
      }
      setIsLoading(false)
    }
  }

  useEffect(
    () => {
      refreshPackages()
    },
    [token]
  )

  return (
    <div className={style.app}>
      {error ? (
        <Message text={error} />
      ) : isLoading ? (
        <Spinner />
      ) : token === null ? (
        <LoginForm onSubmit={login} hasError={isLoginError} />
      ) : (
        <Packages packages={packages} />
      )}

      <Toolbar>
        {token !== null && (
          <ToolbarItem title="Sign off" icon={faSignOutAlt} onClick={logout} />
        )}
      </Toolbar>
    </div>
  )
}

export default HMR(App, module)
