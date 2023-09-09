import React from 'react'
import { Revenue, Transaction, Like, User, Search,Notification } from './Svg';
import styles from './Head.module.css'
import profile from './public/image 1.png'

function Head() {
    return (
        <div    className={styles.head}>
            <div className={styles.top}>

                <div><h1>Dashboard</h1></div>
                <div    className={styles.search} >
                    <input   type="text" placeholder="Search..." style={{height:"100%",border:"none"}} />
                    <Search />
                </div>
                <Notification style={{height:"100%"}}/>
                <img src={profile} style={{borderRadius:"50%"}} alt=""/>
            </div>



            <div className={styles.container}>
                <div className={styles.box} style={{backgroundColor:"#DDEFE0"}}>
                    <p className={styles.p}>
                        <p>
                            Total Revenue
                        </p>
                        <p>

                            $2000
                        </p>
                    </p>
                    <Revenue style={{marginLeft:"auto"}}/>
                </div>
                <div className={styles.box} style={{backgroundColor:"#F4ECDD"}}>
                <p className={styles.p}>
                        <p>
                            Total Transaction
                        </p>
                        <p>

                            $2000
                        </p>
                    </p>
                   
                    <Transaction />
                </div>
                <div className={styles.box} style={{backgroundColor:"#EFDADA"}}>
                <p className={styles.p}>
                        <p>
                            Total Likes
                        </p>
                        <p>

                            $2000
                        </p>
                    </p>
                    <p>
                    </p>
                    <Like />
                </div>
                <div className={styles.box} style={{backgroundColor:"#DEE0EF"}}>
                <p className={styles.p}>
                        <p>
                            Total User
                        </p>
                        <p>

                            $2000
                        </p>
                    </p>
                    <User />
                </div>



            </div>
        </div>
    )
}

export default Head