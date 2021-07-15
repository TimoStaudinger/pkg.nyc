import React from 'react'

import Card from './Card'
import Message from './Message'

// import LasershipIcon from './logos/lasership.png'
// import USPSIcon from './logos/usps.png'
// import UPSIcon from './logos/ups.png'
// import LaundryIcon from './logos/laundry.png'
// import PharmacyIcon from './logos/pharmacy.png'

import styles from './Packages.module.css'

const getIconPath = (carrier) => {
  carrier = carrier.toLowerCase()

  if (carrier.includes('lasership')) return LasershipIcon
  if (carrier.includes('usps')) return USPSIcon
  if (carrier.includes('ups')) return UPSIcon
  if (carrier.includes('laundry')) return LaundryIcon
  if (carrier.includes('pharmacy')) return PharmacyIcon
}

const Packages = ({packages}) =>
  packages && packages.length > 0 ? (
    packages.map((pkg) => (
      <Card>
        <img className={styles.carrierIcon} src={getIconPath(pkg.carrier)} />
        <p className={styles.carrier}>{pkg.carrier}</p>
        <p className={styles.date}>{pkg.date}</p>
        <p className={styles.text}>{pkg.text}</p>
      </Card>
    ))
  ) : (
    <Message text="No new packages! 😞" />
  )

export default Packages
