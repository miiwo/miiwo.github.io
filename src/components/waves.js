import React from 'react'
import styles from './waves.module.css'

function Waves(prop) {
    return (
	<>
	    <div className="wave-container">
			<div className={ `${styles.wave} ${styles.wave1}`} />
			<div className={ `${styles.wave} ${styles.wave2}`} />
			<div className={ `${styles.wave} ${styles.wave3}`} />
			<div className={ `${styles.wave} ${styles.wave4}`} />
	    </div>
	</>
    )
}

export default Waves;
