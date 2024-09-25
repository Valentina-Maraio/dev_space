import Logo from '@/components/Logo';
import styles from '../app/page.module.css'
import Image from "next/image";
import Link from 'next/link';

export default function HomePage(){
    return(
      <>
      <Logo/>
        <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className={styles.ctas}>
          <Link
            className={styles.primary}
            href="/Web"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Web
          </Link>
          <Link
            className={styles.primary}
            href="/Blender"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            3D
          </Link>
        </div>
      </main>
      </>
    )
}