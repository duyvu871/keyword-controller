
import Image from "next/image";
import Link from "next/link";
export default function Logo() {
    return (
        <Link href={"/"} passHref={true}>
            <Image src={"/favicon.ico"} alt={"logo"} width={50} height={50}/>
        </Link>
    )
}