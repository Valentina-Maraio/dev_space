import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <>
            <Link
                href="/"
            >
                <Image
                    src="/Images/logo.png"
                    alt="Vercel logomark"
                    width={100}
                    height={100}
                />
            </Link>
        </>
    )
}