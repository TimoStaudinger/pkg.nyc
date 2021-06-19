import React from 'react'

import styles from './Card.module.css'

const Card = ({className, centered = false, children}) => (
  <div
    className={`${styles.card} ${centered ? styles.centered : ''} ${
      className || ''
    }`}
  >
    {children}
  </div>
)

export default Card
