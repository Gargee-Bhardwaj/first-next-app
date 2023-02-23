import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import search from "../assets/search.png";
import styles from "../styles/Layout.module.css";

import eventData from "../utils/data.json"

import { useState } from "react";

//     const [showMenu, setShowMenu] = useState(false);

//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };
//     const [query, setQuery] = useState('');
//     const handleChange = (e) => {
//         setQuery(e.target.value)
//     }
//     console.log("query" + query);

//     // filter function
//     // const searchFilter = (array) => {
//     //     return array.filter(
//     //         (el) => el.name.toLowerCase().includes(query)
//     //     )
//     // }
//     // console.log(eventData);


//     const searchFilter = (array, query) => {
//         return array.filter(
//             (el) => el.name.toLowerCase().includes(query.toLowerCase())
//         );
//     };

//     //const filteredEvents = searchFilter(eventData.events);
//     const filteredEvents = searchFilter(eventData.events, query);



//     return <div className={styles.header}>
//         <div className={styles.header_content}>
//             <div >
//                 <Image
//                     src={logo}
//                     height={94}
//                     width={92}
//                     alt="Logo image"
//                 />
//             </div>

//             <div className={styles.search_container} >
//                 <div className={styles.search_image}>
//                     <Image
//                         src={search}
//                         height={11}
//                         width={11}
//                         alt="Logo image"
//                     />
//                 </div>
//                 <input className={styles.search_bar} type="search" placeholder="Search" name="search" onchange={handleChange}  />
//             </div>
//             <div className={`${styles.nav_items} ${showMenu && styles.show}`}>

//                 <Link href="/">Home</Link>

//                 <Link href="/">What's on</Link>

//                 <Link href="/">Book Venue</Link>

//                 <Link href="/">Menu</Link>

//                 <Link href="/gallery">Gallery</Link>

//                 <Link href="/">Contact Us</Link>

//                 <Link href="/">About Us</Link>
//             </div>
//             <div className={styles.hamburger_menu}>
//                 <Image
//                     src={search}
//                     height={22}
//                     width={22}
//                     alt="Logo image"
//                 />
//             </div>
//             <button className={styles.hamburger_menu} onClick={toggleMenu}>
//                 <span className={styles.line}></span>
//                 <span className={styles.line}></span>
//                 <span className={styles.line}></span>
//             </button>

//         </div>

//     </div>;
// };

const Footer = () => {
    return <div className={styles.footer}>
        <div className={styles.footer_content}>
            <div className={styles.footer_column1}>
                <div>
                    <Image
                        src={logo}
                        height={94}
                        width={92}
                        alt="Logo image"
                    />
                </div>
                <div className={styles.nav_items_footer}>

                    <Link href="/">Home</Link>

                    <Link href="/">What's on</Link>

                    <Link href="/">Book Venue</Link>

                    <Link href="/">Menu</Link>

                    <Link href="/gallery">Gallery</Link>

                </div>
                <div className={styles.social_icons}>
                    <Image
                        src={facebook}
                        height={29}
                        width={29}
                        alt="Facebook Icon"
                    />
                    <Image
                        src={instagram}
                        height={29}
                        width={29}
                        alt="Instagram Icon"
                    />

                </div>
            </div>
            <div className={styles.footer_column2}>
                <div className={styles.event_updates}>
                    <div>
                        <h2>Get Event Updates</h2>
                        <div className={styles.event_updates_input_container}>
                            <input className={styles.event_updates_input} type="text" placeholder="admin123@gmail.com" />
                            <button className={styles.submit_button}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className={styles.side_columns}>
                    <h3>Contact us</h3>
                    <div>
                        <Image
                            src={mail}
                            height={18}
                            width={25}
                            alt="Phone icon"
                        /> <span>events@18candleriggs.com</span>
                    </div>
                    <div>
                        <Image
                            src={phone}
                            height={18}
                            width={25}
                            alt="Mailk Icon"
                        /> <span>0330 202 1818</span>
                    </div>
                </div>
                <div className={styles.side_columns}>
                    <h3>Privacy</h3>
                    <p>
                        <Link href="/">Terms and Conditions</Link>
                    </p>
                    <p><Link href="/">Privacy Policy</Link></p>
                    <p><Link href="/">About Us</Link></p>
                </div>
            </div>
            <div className={styles.copyrights}>
                <p>©  18 candleriggs 2022</p>
            </div>
        </div>
        <div className={styles.mobile_footer_content}>
            <div className={styles.mobile_footer_links}>
                <Link href="/">Terms and Conditions</Link>

                <Link href="/">Privacy policy</Link>

                <Link href="/">FAQ</Link>
            </div>
            <div className={styles.mobile_event_updates}>
                <div>
                    <h5>Get Event Updates</h5>
                    <div className={styles.mobile_event_updates_input_container}>
                        <input className={styles.mobile_event_updates_input} type="text" placeholder="admin123@gmail.com" />
                        <button className={styles.mobile_submit_button}>Submit</button>
                    </div>
                </div>
            </div>
            <div className={styles.mobile_footer_contact_us}>
                <h4>contact us</h4>
                <div>
                    <Image
                        src={mail}
                        height={12}
                        width={17}
                        alt="Phone icon"
                    /> <span>events@18candleriggs.com</span>
                </div>
                <div>
                    <Image
                        src={phone}
                        height={16}
                        width={16}
                        alt="Mail Icon"
                    /> <span>0330 202 1818</span>
                </div>
            </div>
            <div className={styles.mobile_footer_social_links}>
                <h4>Social Links</h4>
                <div className={styles.social_icons}>
                    <Image
                        src={facebook}
                        height={16.3}
                        width={16.3}
                        alt="Facebook Icon"
                    />
                    <Image
                        src={instagram}
                        height={16.3}
                        width={16.3}
                        alt="Instagram Icon"
                    />

                </div>
            </div>
            <div className={styles.mobile_footer_copyright}>©  18 candleriggs 2022</div>

        </div>

    </div>;
};

const Layout = ({ children }) => {
    return (
        <>
            {/* <Navbar /> */}
            {children}
            <Footer />
        </>
    );
};

export default Layout;