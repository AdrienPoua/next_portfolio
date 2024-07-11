import Image from 'next/image'
import curv from "@/public/curv.svg";

export default function Curv({ rotate }: Readonly<{ rotate?: boolean }>) {
    return (
        <Image src={curv} width={1200} height={10} alt="decoration" objectFit='cover' className={`  w-full ${rotate ? "rotate-180" : ""}`} />
    )
}
