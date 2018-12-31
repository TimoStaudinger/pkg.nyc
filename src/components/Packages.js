import React from 'react'

import LasershipIcon from '@assets/lasership.png'
import USPSIcon from '@assets/usps.png'
import UPSIcon from '@assets/ups.png'
import LaundryIcon from '@assets/laundry.png'

import style from './Packages.css'
import Card from './Card'
import Message from './Message'

const getIconPath = carrier => {
  carrier = carrier.toLowerCase()

  if (carrier.includes('lasership')) return LasershipIcon
  if (carrier.includes('usps')) return USPSIcon
  if (carrier.includes('ups')) return UPSIcon
  if (carrier.includes('laundry')) return LaundryIcon
}

const Packages = ({packages}) =>
  packages && packages.length > 0 ? (
    packages.map(pkg => (
      <Card>
        <img className={style.carrierIcon} src={getIconPath(pkg.carrier)} />
        <p className={style.carrier}>{pkg.carrier}</p>
        <p className={style.date}>{pkg.date}</p>
        <p className={style.text}>{pkg.text}</p>
      </Card>
    ))
  ) : (
    <Message text="No new packages! 😞" />
  )

export default Packages
