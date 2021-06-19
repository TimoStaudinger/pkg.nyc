import React from 'react'

import Card from './Card'

import styles from './Message.module.css'

const Message = ({text}) => (
  <Card centered>
    <p className={styles.text}>{text}</p>
  </Card>
)

export default Message
