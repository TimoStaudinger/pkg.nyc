import React from 'react'

import Card from './Card'

import style from './Message.css'

const Message = ({text}) => (
  <Card centered>
    <p className={style.text}>{text}</p>
  </Card>
)

export default Message
