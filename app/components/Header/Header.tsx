import Image from "next/image";
import Link from "next/link";

interface HeaderProps{}


export const Header = () => {
    return(
        <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
            <Image src='/stack.png' width={50} height={50} alt="main-pic"/>
            <div className="grow">
                <div className=" flex items-center justify-center gap-2 md:gap-8">
                    <Link href=''>Find new friends</Link>
                    <Link href=''>Discover</Link>
                    <Link href=''>Feed</Link>
                </div>
            </div>
        </div>
    )
}