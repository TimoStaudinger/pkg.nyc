import React from 'react'

import Card from './Card'

import styles from './Spinner.module.css'

const Spinner = () => (
  <Card centered>
    <div className={styles.spinner}>
      <img className={styles.icon} src="octopus.png" />
    </div>
  </Card>
)

export default Spinner
