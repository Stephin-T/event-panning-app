import Link from 'next/link';
import React from 'react'
import classes from "./main-header.module.css";

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo} >
                <Link href="/" >SML Events</Link>
            </div>
            <nav className={classes.navigation}>
                <ul className={classes.ul}>
                    <li>
                        <Link href="/events"> Browse All Events</Link>
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader