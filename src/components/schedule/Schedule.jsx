import React, { useEffect, useState } from 'react'
import styles from './Schedule.module.css'
function Schedule() {
    const [list,setList]=useState(['meeting1','meeting2','meeting3'])
    // useEffect(()=>{
        
    // },[list])
  return (
    <div className={styles.schedule}>{list}</div>
  )
}

export default Schedule