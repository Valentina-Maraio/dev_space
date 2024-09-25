import Image from "next/image";
import Link from "next/link"
import styles from './componentStyle/menu.module.css'


export default function Menu() {
    return (
        <>
            <footer className={styles.footer}>

                <Link
                    href="Tech"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Tech Challenges
                </Link>

                <Link
                    href="/Contacts"
                >
                    <Image
                        aria-hidden
                        src="https://nextjs.org/icons/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Contacts
                </Link>
            </footer>
        </>
    )
}