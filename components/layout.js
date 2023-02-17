import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import search from "../assets/search.png";
import styles from "../styles/Layout.module.css";

const Navbar = () => {
    return <div className={styles.header}>
        <div className={styles.header_content}>
            <div >
                <Image
                    src={logo} // Route of the image file
                    height={94} // Desired size with correct aspect ratio
                    width={92} // Desired size with correct aspect ratio
                    alt="Logo image"
                />
            </div>

            <div className={styles.search_container} >
                <div>
                    <Image
                        src={search} // Route of the image file
                        height={11} // Desired size with correct aspect ratio
                        width={11} // Desired size with correct aspect ratio
                        alt="search icon"
                    />
                </div>
                <input className={styles.search_bar} type="search" placeholder="Search" name="search" />
            </div>
            <div className={styles.nav_items}>

                <Link href="/">Home</Link>

                <Link href="/">What's on</Link>

                <Link href="/">Book Venue</Link>

                <Link href="/">Menu</Link>

                <Link href="/gallery">Gallery</Link>

                <Link href="/">Contact Us</Link>

                <Link href="/">About Us</Link>
            </div>
        </div>

    </div>;
};

const Footer = () => {
    return <div className={styles.footer}>
        <div className={styles.footer_content}>
            <div className={styles.footer_column}>
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
            <div className={styles.footer_column}>
                <div className={styles.event_updates}>
                    <div>
                        <h2>Get Event Updates</h2>
                        <div className={styles.event_updates_input_container}>
                            <input className={styles.event_updates_input} type="text" placeholder="admin123@gmail.com" />
                            <button className={styles.submit_button}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className={styles.contact_us}>
                    <div>
                        <h3>Contact us</h3>
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
                <div className={styles.contact_us}>
                    <h3>Privacy</h3>
                    <p>
                        <Link href="/">Terms and Conditions</Link>
                    </p>
                    <p><Link href="/">Privacy Policy</Link></p>
                    <p><Link href="/">About Us</Link></p>
                </div>
            </div>
        </div>

    </div>;
};

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;