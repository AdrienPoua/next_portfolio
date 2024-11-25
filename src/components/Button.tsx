import { Typography, Button } from '@mui/material';
import Image from 'next/image';


type ButtonProps = {
    icon?: string;
    href: string;
    text: string;
    navitem?: boolean;
}

export function ButtonBlackEffect({ icon, href, text, navitem }: Readonly<ButtonProps>) {
    return (
        <Button href={href} variant={navitem ? undefined : "outlined"} className="flex relative group overflow-hidden rounded-full px-8 py-2 items-center gap-2 border-transparent ">
            <BlackEffect />
            <Typography className={`hidden md:block relative text-black font-semibold group-hover:text-primary duration-300 ${navitem ? "text-xl" : "text-base"} ease-in-out`}>{!navitem ? text.toUpperCase() : text}</Typography>
            {icon && <Image src={icon} alt={"Way to contact me"} width={20} height={20} className="w-10 h-10 rounded-full " />}
        </Button>
    );
}

const BlackEffect = () => {
    return (
        <span className="hidden md:block bg-black absolute -left-3 -right-3 top-0 bottom-0 translate-x-full -skew-x-12 transition-transform duration-300 group-hover:translate-x-0 group-hover:ease-in-out -z-10"></span>
    )
}