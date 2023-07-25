"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About", 
        url: "/about",
    },
    {
        id: 5,
        title: "Dashboard",
        url: "/dashboard",
    },
]

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <Link href="/">theCreativeSpark</Link>
        <div className="links">
            {links.map((link) => (
                <Link key={link.id} href={link.url}>{link.title}</Link>
            ))}
        </div>
        <button onClick={() => {
            console.log("logged out");
            
        }}>Logout</button>
    </nav>
  )
}

export default Navbar