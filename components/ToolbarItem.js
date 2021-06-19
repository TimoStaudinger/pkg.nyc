import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import styles from './ToolbarItem.module.css'

const ToolbarItem = ({title, icon, onClick}) => (
  <span title={title} onClick={onClick} className={styles.button}>
    <FontAwesomeIcon icon={icon} />
  </span>
)

export default ToolbarItem
