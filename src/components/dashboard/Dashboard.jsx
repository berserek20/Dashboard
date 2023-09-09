import React from 'react'
import Head from '../head/Head'
import Chart from '../charts/Chart'
import Schedule from '../schedule/Schedule'
import PIeChart from '../charts/PIeChart'
import styles from './Dashboard.module.css'
function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Head />
        <Chart />
      <div  className={styles.foot}>
        <PIeChart />
          <Schedule />
      </div>
    </div>
  )
}

export default Dashboard