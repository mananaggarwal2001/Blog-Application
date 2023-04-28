import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
const Navbar = () => {
    return (
        <nav className={styles.container}>
            <ul>
                <Link className={styles.mxclass} href={'/'}>
                    <li >Home</li>
                </Link>
                <Link className={styles.mxclass} href={'/about'}>
                    <li >About</li>
                </Link>
                <Link className={styles.mxclass} href={'/blog'}>
                    <li >Blog</li>
                </Link>
                <Link className={styles.mxclass} href={'/contact'}>
                    <li >Contact Us</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar