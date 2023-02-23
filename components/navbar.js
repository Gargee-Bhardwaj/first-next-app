import Link from "next/link";
import Image from "next/image";

import eventData from "../utils/data.json"
import search from "../assets/search.png";
import logo from "../assets/logo.png";
import styles from "../styles/Layout.module.css"
import { useState } from "react";

function Navbar({ query, setQuery }) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        console.log(e.target.value);
    };
    console.log(query);

    return (
        <div className={styles.header}>
            <div className={styles.header_content}>
                <div >
                    <Image
                        src={logo}
                        height={94}
                        width={92}
                        alt="Logo image"
                    />
                </div>

                <div className={styles.search_container} >
                    <div className={styles.search_image}>
                        <Image
                            src={search}
                            height={11}
                            width={11}
                            alt="Logo image"
                        />
                    </div>
                    <input className={styles.search_bar} type="search" placeholder="Search" onchange={handleChange} />
                </div>
                <div className={`${styles.nav_items} ${showMenu && styles.show}`}>

                    <Link href="/">Home</Link>

                    <Link href="/">What's on</Link>

                    <Link href="/">Book Venue</Link>

                    <Link href="/">Menu</Link>

                    <Link href="/gallery">Gallery</Link>

                    <Link href="/">Contact Us</Link>

                    <Link href="/">About Us</Link>
                </div>
                <div className={styles.hamburger_menu}>
                    <Image
                        src={search}
                        height={22}
                        width={22}
                        alt="Logo image"
                    />
                </div>
                <button className={styles.hamburger_menu} onClick={toggleMenu}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </button>

            </div>

        </div>
    );
};


export default Navbar;