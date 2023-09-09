    import React, { useState } from 'react'
import styles from './Menu.module.css';
import Dashboard from '../dashboard/Dashboard'
import { SvgDashboard, SvgSchedule, SvgSetting, SvgTransaction, SvgUser } from './Svg';
function Menu() {
    const [unhideMenu,setUnhideMenu]=useState(false)
    return (
      <div className={styles.dashboarUnits}>
          <nav >
              {/* <ul className={styles.navBox}><li>LOGO</li>
              </ul> */}
              <button className={styles.menu} onClick={()=>{setUnhideMenu(!unhideMenu)}}>MENU</button>
              
                  
  
                <ul className={`${styles.navBox} ${styles.options} ${unhideMenu && styles.unhideMenu}`}>
                    <li className={styles.mainMenu} style={{marginBottom:"20px",marginTop:"20px"}}><h1>Board</h1></li>
                    
                    <li className={styles.mainMenu}><SvgDashboard /> Dashboard</li>
                    <li className={styles.mainMenu}><SvgTransaction/> Transactions</li>
                    <li className={styles.mainMenu}><SvgSchedule /> Schedules</li>
                    <li className={styles.mainMenu}><SvgUser /> Users</li>
                    <li className={styles.mainMenu}><SvgSetting /> Settings</li>

                    <li className={styles.mainMenu} style={{marginTop:"100%"}}>Help</li>
                    <li className={styles.mainMenu}>Contact us</li>

                </ul>
              
          </nav>
          <Dashboard />
        </div>);
  
}

export default Menu